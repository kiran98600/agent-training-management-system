(() => {
    const httpStatus = require('http-status')
    const { Parser } = require('json2csv');
    const reportRepository = require('../repository/reporting.repository');
    const pdf = require('html-pdf');
    module.exports = async (req, res, next) => {
        try {
            let data = [];
            let request = { ...req.query, ...req.body }
            let [getAgents] = await reportRepository.getTrainingParicipant(request);
            let [getAttendance] = await reportRepository.attendanceDetailReport(request);
            for (let i = 0; i < getAgents.length; i++) {
                let row1 =
                {
                    "Name": getAgents[i].full_name,
                    "Occupation": getAgents[i].current_occupation,
                    "Branch Name": getAgents[i].branch_name,
                    "Contact Number": getAgents[i].mobile_no,
                    "Educational Qualification": getAgents[i].education_qualification,
                }
                for (let j = 0; j < getAttendance.length; j++) {
                    let counter = 1;
                    if (getAgents[i].agent_id == getAttendance[j].agent_id) {
                        let obj = {}
                        obj[`${getAttendance[j].training_date}`] = (getAttendance[j].is_present == 1) ? 'P' : 'A';
                        Object.assign(row1, obj)
                        counter++;
                    }
                }
                data.push(row1);
            }
            const json2csvParser = new Parser();
            const csv = json2csvParser.parse(data);
            res.header('Content-Type', 'text/csv');
            res.header('Content-Disposition', 'attachment; filename=attendance.csv;');
            return res.send(csv);

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
