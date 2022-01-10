(() => {
    const dropDownRepository = require('../repository/dropdown.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [districtDdList] = await dropDownRepository.getDistrictDdList(request);
            let defualtValue = {
                id: 0,
                district_name: 'Select',
                uuid: ''
            }
            districtDdList.unshift(defualtValue)

            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: districtDdList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
