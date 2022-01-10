(() => {
    const profileRepository = require('../repository/pofile_menu.repository');
    const profileMenuRepository = require('..');

    const httpStatus = require('http-status')
    const { profileHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            const validationResponse = await validationHelper.createRequest(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: validationResponse.message });
            }
            let insertObject = profileHelper.getInserObject(request)
            
            await profileRepository.create(insertObject.profile);
            await profileRepository.create(insertObject.profile);

            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: validationResponse.message });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
