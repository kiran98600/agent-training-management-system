(() => {
    module.exports = async (req, res, next) => {
        const { hashHelper, jwtHelper } = require('../../../helpers')
        const profileRepository = require('../../profile/repository/profile.repository');
        const userRepository = require('../../user/repository/user.repository')
        const authRepository = require('../repository/auth.repository')
        try {
            let { body } = req
            let [userInfo] = await userRepository.getUserDetail({ email: body.email }, 'login');

            if (!userInfo || userInfo.length < 1) {
                // password retry attempts
                return res
                    .status(401)
                    .json({
                        message: 'username password doesnt matched',
                        data: {
                        }
                    });
            }

            const isAutheticUser = await hashHelper.comparePassword(body.password, userInfo[0].password);
            if (!isAutheticUser) {
                // password retry attempts
                return res
                    .status(401)
                    .json({
                        message: 'username password doesnt matched',
                        data: {
                        }
                    });
            }

            const tokenResponse = jwtHelper.generateJWTToken({ uuid: userInfo[0].uuid, profile_id: userInfo.profile_id });
            if (!tokenResponse || tokenResponse.success == false) {
                return res
                    .status(400)
                    .json({
                        status: 400,
                        message: 'user-name password incorrect',
                        data: {

                        }
                    });
            }

            const [isTokenAlreadyExists] = await authRepository.getLoginSession({ user_id: userInfo[0].id })
            if (isTokenAlreadyExists.length > 1)
                await authRepository.flushSession(userInfo[0].id)

            await authRepository.registerLoginSession({
                token: tokenResponse.token,
                ip: req.ip,
                user_id: userInfo[0].id,
                timestamp: new Date().getTime(),
            })

            return res
                .status(200)
                .json({
                    message: 'success',
                    data: {
                        token: tokenResponse.token
                    }
                });

        } catch (err) {
            return res
                .status(200)
                .json({
                    message: err.message,
                });
        }
    }
})();
