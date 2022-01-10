(() => {
    module.exports = async (req, res, next) => {
        const { jwtHelper } = require('../../../helpers')
        const authRepository = require('../repository/auth.repository')
        try {
            let { authorization } = req.headers
            let tokenResponse = await jwtHelper.verifyJWTToken(authorization)
            if (!tokenResponse.success)
                return res
                    .status(400)
                    .json({
                        message: 'Unauthorzie Access',
                    });

            const [isTokenAlreadyExists] = await authRepository.getLoginSession({ token: authorization })
            if (isTokenAlreadyExists.length < 1) {
                return res
                    .status(400)
                    .json({
                        message: 'invalid token',
                        data: {
                        }
                    });
            }
            req.body.meta = {
                user_id: isTokenAlreadyExists[0].user_id,
                user_profile_id: isTokenAlreadyExists[0].profile_id,
                user_type: isTokenAlreadyExists[0].user_type,
                branch_region: isTokenAlreadyExists[0].branch_region,
                branch_id: isTokenAlreadyExists[0].branch_id
            }
            return next()
        } catch (err) {
            return res
                .status(400)
                .json({
                    message: err.message,
                });
        }
    }
})();
