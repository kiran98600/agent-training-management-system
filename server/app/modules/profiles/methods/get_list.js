(() => {
    const profileRepository = require('../repository/pofile.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            let [profileList] = await profileRepository.getList(request);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: profileList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
