(() => {
    const participantsRepository = require('../repository/participant.repository');
    const trainingRepository = require('../../training/repository/training.repository');
    const httpStatus = require('http-status')
    const { participantHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            // let request = { ...req.params, ...req.body }
            // let [trainingDetail] = await trainingRepository.getDetail({ uuid: request.uuid });
            // let [participantDetail] = await participantsRepository.getDetail(request);
            // return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: { trainingDetail: trainingDetail[0], participantDetail: participantDetail } });
            let buffer = await participantHelper.generateCertificate();
            res.set('Content-Type', 'application/pdf');
            res.set('Content-Disposition', `attachment; filename=cirtificate.pdf`);
            return res.send(buffer);
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
