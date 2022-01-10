(() => {
    const trainingRepository = require('../repository/participant.repository');
    const httpStatus = require('http-status')
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            let [trainingParticipantList] = await trainingRepository.getList(request);
             return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: trainingParticipantList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
