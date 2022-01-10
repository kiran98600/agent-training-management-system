(() => {
    const profileRepository = require('../repository/pofile.repository');
    const httpStatus = require('http-status')
    const { validationHelper } = require('../helper');
    const { utilityHelper } = require('../../../helpers');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let profileDetail = { profileMenu: {} };
            let [profileDetailRes] = await profileRepository.getProfileDetail(request)
            profileDetail.uuid = profileDetailRes[0].uuid
            profileDetail.profile_name = profileDetailRes[0].profile_name
            profileDetail.profile_description = profileDetailRes[0].profile_description
            let [profileMenu] = await profileRepository.getDetail(request);
            profileDetail.profileMenu = utilityHelper.groupBy(profileMenu, 'parent_menu')
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: profileDetail });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
