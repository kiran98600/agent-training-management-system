
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const userRepository = require('../repository/reporting.repository')
    validationHelper.createRequest = async (request) => {
        try {
            if (utilityHelper.isEmptyOrSpaces(request.training_name))
                return {
                    status: false,
                    message: 'training_name cannot be empty'
                }
            if (utilityHelper.isEmptyOrSpaces(request.trainer_name))
                return {
                    status: false,
                    message: 'trainer_name cannot be empty'
                }


            if (utilityHelper.isEmptyOrSpaces(request.venue))
                return {
                    status: false,
                    message: 'venue cannot be empty'
                }


            if (utilityHelper.isEmptyOrSpaces(request.max_participant_allowed))
                return {
                    status: false,
                    message: 'max_participant_allowed cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.training_date_to))
                return {
                    status: false,
                    message: 'training_date_to cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.training_date_from))
                return {
                    status: false,
                    message: 'training_date_from cannot be empty'
                }

            if (utilityHelper.isEmptyOrSpaces(request.training_time))
                return {
                    status: false,
                    message: 'training_time cannot be empty'
                }

      
            // const [detailByUserEmail] = await userRepository.getUserDetail({ email: request.email })
            // if (detailByUserEmail && detailByUserEmail.length > 0)
            //     return {
            //         status: false,
            //         message: 'email already exists'
            //     }

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
            if (utilityHelper.isEmptyOrSpaces(request.uuid))
                return {
                    status: false,
                    message: 'request not found'
                }


            if (utilityHelper.isEmptyOrSpaces(request.training_name))
                return {
                    status: false,
                    message: 'training_name cannot be empty'
                }
            if (utilityHelper.isEmptyOrSpaces(request.trainer_name))
                return {
                    status: false,
                    message: 'trainer_name cannot be empty'
                }


            if (utilityHelper.isEmptyOrSpaces(request.venue))
                return {
                    status: false,
                    message: 'venue cannot be empty'
                }


            if (utilityHelper.isEmptyOrSpaces(request.max_participant_allowed))
                return {
                    status: false,
                    message: 'max_participant_allowed cannot be empty'
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