(() => {
    const dropDownRepository = require('../repository/dropdown.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [regionDdList] = await dropDownRepository.getRegionDdList(request);
            let defualtValue = {
                "uuid": "",
                "branch_region": "0",
                "branch_region_name": "Select"
            }
            regionDdList.unshift(defualtValue);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: regionDdList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
