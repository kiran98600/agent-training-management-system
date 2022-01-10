
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const userRepository = require('../repository/user.repository')
    validationHelper.createRequest = async (request) => {
        try {
            if (utilityHelper.isEmptyOrSpaces(request.full_name))
                return {
                    status: false,
                    message: 'name cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.email))
                return {
                    status: false,
                    message: 'email cannot be empty'
                }

            const [detailByUserEmail] = await userRepository.getUserDetail({ email: request.email })
            if (detailByUserEmail && detailByUserEmail.length > 0)
                return {
                    status: false,
                    message: 'email already exists'
                }

            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };

    validationHelper.modifyRequest = async (request) => {
        try {
            if (utilityHelper.isEmptyOrSpaces(request.full_name))
                return {
                    status: false,
                    message: 'name cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.email))
                return {
                    status: false,
                    message: 'email cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.phone_number))
                return {
                    status: false,
                    message: 'phone number cannot be empty'
                }


            const [detailByUuid] = await userRepository.getUserDetail({ uuid: request.uuid })
            if (detailByUuid && detailByUuid.length < 1)
                return {
                    status: false,
                    message: 'user doesnt exists'
                }


            const [detailByUserEmail] = await userRepository.getUserDetail({ email: request.email })
            if (detailByUserEmail && detailByUserEmail.length > 0 && (detailByUuid[0].uuid != request.uuid))
                return {
                    status: false,
                    message: 'email already exists'
                }

            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };


    validationHelper.passwordchange = async (request) => {
        const { hashHelper } = require('../../../helpers');
        const createSalt = await hashHelper.createSalt();
        try {
            if (utilityHelper.isEmptyOrSpaces(request.password))
                return {
                    status: false,
                    message: 'password cant be empty'
                }

            const [detailByUserName] = await userRepository.getUserDetail({ id: request.meta.user_id }, 'login')
            if (!detailByUserName || detailByUserName.length < 1)
                return {
                    status: false,
                    message: 'user doesnt exists'
                }

             request.old_password = await hashHelper.computeHash(request.old_password, detailByUserName[0].salt)
            if (detailByUserName[0].password != request.old_password)
                return {
                    status: false,
                    message: 'old password not matched'
                }

            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };

})(module.exports);