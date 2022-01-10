(() => {
    const userRepository = require('../repository/pofile_menu.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [userDetail] = await userRepository.getUserDetail(request);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: userDetail });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
