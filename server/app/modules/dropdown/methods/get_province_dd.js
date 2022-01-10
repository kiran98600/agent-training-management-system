(() => {
    const dropDownRepository = require('../repository/dropdown.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [provinceList] = await dropDownRepository.getProvinceDdList(request);
            let defualtValue = {
                id: 0,
                province_name: 'Select',
                uuid: ''
            }
            provinceList.unshift(defualtValue)
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: provinceList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
