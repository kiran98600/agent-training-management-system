
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const profileRepository = require('../repository/pofile_menu.repository')
    validationHelper.createRequest = async (request) => {
        try {

            if (utilityHelper.isEmptyOrSpaces(request.profile_name))
                return {
                    status: false,
                    message: 'profile name cannot be empty'
                }
            if (utilityHelper.isEmptyOrSpaces(request.profile_description))
                return {
                    status: false,
                    message: 'profile description cannot be empty'
                }

            if (!request.profile_menus || (request.profile_menus.length < 1))
                return {
                    status: false,
                    message: 'profile must have one menu assigned'
                }

            const [detailByName] = await profileRepository.getDetail({ profile_name: request.profile_name })
            if (detailByName && detailByName.length > 0)
                return {
                    status: false,
                    message: 'profile already exists'
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


            const [detailByUuid] = await profileRepository.getUserDetail({ uuid: request.uuid })
            if (detailByUuid && detailByUuid.length < 1 && (detailByUserName[0].uuid != request.uuid))
                return {
                    status: false,
                    message: 'user doesnt exists'
                }

            const [detailByUserName] = await profileRepository.getUserDetail({ username: request.username })
            if (detailByUserName && detailByUserName.length > 0 && (detailByUserName[0].uuid != request.uuid))
                return {
                    status: false,
                    message: 'username already exists'
                }

            const [detailByUserEmail] = await profileRepository.getUserDetail({ email: request.email })
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