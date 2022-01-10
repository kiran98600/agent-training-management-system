
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const userRepository = require('../repository/dropdown.repository')
    validationHelper.createRequest = async (request) => {
        try {
            if (utilityHelper.isEmptyOrSpaces(request.full_name))
                return {
                    status: false,
                    message: 'name cannot be empty'
                }
            if (utilityHelper.isEmptyOrSpaces(request.username))
                return {
                    status: false,
                    message: 'username cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.email))
                return {
                    status: false,
                    message: 'email cannot be empty'
                }

            const [detailByUserName] = await userRepository.getUserDetail({ username: request.username })
            if (detailByUserName && detailByUserName.length > 0)
                return {
                    status: false,
                    message: 'username already exists'
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
            if (utilityHelper.isEmptyOrSpaces(request.username))
                return {
                    status: false,
                    message: 'username cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.email))
                return {
                    status: false,
                    message: 'email cannot be empty'
                }


            const [detailByUuid] = await userRepository.getUserDetail({ uuid: request.uuid })
            if (detailByUuid && detailByUuid.length < 1)
                return {
                    status: false,
                    message: 'user doesnt exists'
                }

            const [detailByUserName] = await userRepository.getUserDetail({ username: request.username })
            if (detailByUserName && detailByUserName.length > 0 && (detailByUserName[0].uuid != request.uuid))
                return {
                    status: false,
                    message: 'username already exists'
                }

            const [detailByUserEmail] = await userRepository.getUserDetail({ email: request.email })
            if (detailByUserEmail && detailByUserEmail.length > 0 && (detailByUserName[0].uuid != request.uuid))
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

})(module.exports);