(() => {
    const userRepository = require('../repository/user.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [userDetail] = await userRepository.getUserDetail(request, 'view-detail');
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: userDetail[0] });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
