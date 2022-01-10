(() => {
    const reportRepository = require('../repository/reporting.repository');
    const httpStatus = require('http-status')
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.query, ...req.body }
            let responseBody = {
                trainingList: [],
                attendanceList: []
            }
            let [trainingList] = await reportRepository.branchWiseAgentReport(request);
            responseBody.trainingList = trainingList;

            let [attendanceList] = await reportRepository.attendanceDetailReport(request);
            responseBody.attendanceList = attendanceList;

            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: responseBody });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
