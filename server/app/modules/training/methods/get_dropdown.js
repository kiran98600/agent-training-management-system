(() => {
    const trainingRepository = require('../repository/training.repository');
    const httpStatus = require('http-status')
    module.exports = async (req, res, next) => {
        try {
            let [trainingList] = await trainingRepository.getDropDown();
             return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: trainingList });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
