(() => {
    const trainingRepository = require('../repository/training.repository');
    const httpStatus = require('http-status')
    const { trainingHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            const validationResponse = await validationHelper.attendanceRequest(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: validationResponse.message });
            }
            let insertObject = trainingHelper.getAttendanceObject(request)
            await trainingRepository.attendance(insertObject, request);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: validationResponse.message });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
