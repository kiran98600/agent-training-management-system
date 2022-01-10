(() => {
    const dropDownRepository = require('../repository/dropdown.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [branchDdList] = await dropDownRepository.getBranchDdList(request);
            let defualtValue = {
                branch_id: "0",
                branch_name: "Select",
                branch_region: 0,
                uuid: ""
            }
            branchDdList.unshift(defualtValue)
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: branchDdList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
