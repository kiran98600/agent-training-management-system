(() => {
    const certificateRepo = require('../repository/certificate.repository');
    const httpStatus = require('http-status')
    const pdf = require('html-pdf');
    const { participantHelper, validationHelper } = require('../helper');
    const { utilityHelper } = require('../../../helpers')
    module.exports = async (req, res, next) => {
        try {
            var options = {
                orientation: 'landscape',
                height: "6.5in",
            };
            let request = { ...req.body, ...req.query }
            let [cirtificateDetail] = await certificateRepo.getCertificateDetail(request);
            let sequenceResponse;
            if (cirtificateDetail[0].sequence_id == null) {
                sequenceResponse = await certificateRepo.updateSequence({ training_id: cirtificateDetail[0].training_pk_id, agent_id: cirtificateDetail[0].agent_id })
                cirtificateDetail[0].sequence_id = sequenceResponse.sequence_id
            }
            var html = `
            <head>
                <meta http-equiv=Content-Type content="text/html; charset=UTF-8">
            </head>
            <style>
            </style>

            <body>
                <div class="centered" style="">
                    <img src="${process.env.IMAGE_BASE_CERTIFICATE_URL}image" style="min-width: 100%;max-height: 780px;"></div>
                    <div class="toTxt" style="font-size: 18px; position: absolute; top: 8%;left: 12%;transform: translate(-50%, -50%);">${cirtificateDetail[0].sequence_id}-${cirtificateDetail[0].training_id}-2077</div>
                    <div class="nameTxt" style=" font-size: 18px ; position: absolute;top: 51%; left: 32%; transform: translate(-50%, -50%);">${cirtificateDetail[0].full_name}</div>
                    <div class="fromTxt" style="font-size: 18px ;  position: absolute;top: 65%;left: 16%; transform: translate(-50%, -50%);">${utilityHelper.ad2bs(cirtificateDetail[0].training_date_from)}</div>
                    <div class="toTxt" style="font-size: 18px ; position: absolute; top: 65%;left: 36%;transform: translate(-50%, -50%);">${utilityHelper.ad2bs(cirtificateDetail[0].training_date_to)}</div>
                    <div class="txtTrainingVenue" style="font-size: 18px ; position: absolute; top: 70%;left: 10%;transform: translate(-50%, -50%);">${cirtificateDetail[0].branch_name ? cirtificateDetail[0].branch_name : ""}</div>
                    <img src="${process.env.IMAGE_BASE_URL}/${cirtificateDetail[0].pp_photo}" class="pphoto" style="width: 125px; position: absolute;top: 11%;left: 81%; transform: translate(-50%, -50%);"></div>
                </div>
            </body>
            </html>
            `
            pdf.create(html, options).toStream((err, stream) => {
                if (err) {
                    res.status(500);
                    res.end(JSON.stringify(err));
                    return;
                }
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=test-file.pdf;');
                stream.pipe(res);
            });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
