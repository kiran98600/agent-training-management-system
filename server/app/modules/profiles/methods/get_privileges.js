(() => {
    const profileRepository = require('../repository/pofile.repository');
    const httpStatus = require('http-status')
    const {  validationHelper } = require('../helper');
    const { utilityHelper } = require('../../../helpers');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [profileMenu] = await profileRepository.getPrivileges(request);
            profileMenu = utilityHelper.groupBy(profileMenu , 'parent_menu')
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: profileMenu });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
