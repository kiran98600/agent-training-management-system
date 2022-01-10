(() => {
    const profileRepository = require('../repository/pofile.repository');
    const profileMenuRepository = require('../../profile_menus/repository/pofile_menu.repository');

    const httpStatus = require('http-status')
    const { profileHelper, validationHelper } = require('../helper');
    const { profileMenuHelper } = require('../../profile_menus/helper');

    const { dbHelper } = require('../../../helpers');

    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            const validationResponse = await validationHelper.createRequest(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: validationResponse.message });
            }
            // get insert object
            let insertObject = profileHelper.getInserObject(request)
            await profileRepository.create(insertObject);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: validationResponse.message });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
