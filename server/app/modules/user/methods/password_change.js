(() => {
    const userRepository = require('../repository/user.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            const validationResponse = await validationHelper.passwordchange(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: validationResponse.message });
            }
            let passChangeObj = await userHelper.changePasswordObj(request)
            await userRepository.updateUser(passChangeObj, { id: request.meta.user_id });
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: validationResponse.message });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
