(() => {
    const profileRepository = require('../repository/pofile_menu.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            let [userList] = await profileRepository.getList(request);
             return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: userList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
