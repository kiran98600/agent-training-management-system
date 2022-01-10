
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const profileRepository = require('../repository/pofile.repository')
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

            const [detailByUuid] = await profileRepository.detail({ uuid: request.uuid })
            if (detailByUuid && detailByUuid.length < 1)
                return {
                    status: false,
                    message: 'profile doesnt exists'
                }
            else
                request.profile_id = detailByUuid[0].profile_id;

            return {
                status: true,
                message: 'success'
            }


        } catch (error) {
            throw error;
        }
    };

})(module.exports);