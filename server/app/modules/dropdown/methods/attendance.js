
(() => {
    const trainingRepository = require('../../training/repository/training.repository');
    const { trainingHelper } = require('../../training/helper');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let responseBody = []
            let request = { ...req.query, ...req.body }
            let [trainingDetail] = await trainingRepository.getDetail({ id: request.training_id });
            let dateArray = trainingHelper.getAttendenceDate(trainingDetail[0].training_date_from, trainingDetail[0].training_date_to)
            for (let i = 0; i < dateArray.length; i++) {
                let date = dateArray[i].getFullYear() + "-" + trainingHelper.appendLeadingZeroes(dateArray[i].getMonth() + 1) + "-" + trainingHelper.appendLeadingZeroes(dateArray[i].getDate())
                let obj = {
                    label: date,
                    value: date
                };
                responseBody.push(obj);
            }
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: responseBody });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();











