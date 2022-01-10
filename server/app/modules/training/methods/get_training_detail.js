(() => {
    const trainingRepository = require('../repository/training.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [trainingDetail] = await trainingRepository.getDetail(request);
            if (trainingDetail && trainingDetail[0].training_id) {
                let [trainerInfo] = await trainingRepository.getTraininingTrainerDetail({ training_id: trainingDetail[0].id });
                trainingDetail[0].trainer_info = trainerInfo
            }
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: trainingDetail[0] });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
