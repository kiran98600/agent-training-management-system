(() => {
    const trainingRepository = require('../repository/training.repository');
    const httpStatus = require('http-status')
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.query, ...req.body }
            let [trainingList] = await trainingRepository.getTrainingList(request);
             return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: trainingList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
