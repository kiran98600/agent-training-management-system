(() => {
    const dropDownRepository = require('../repository/dropdown.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.query, ...req.body }
            let [trainingDdList] = await dropDownRepository.traningDdList(request);
            let defualtValue = {
                "id": 0,
                "training_name": "Select"
            }
            trainingDdList.unshift(defualtValue);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: trainingDdList });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
