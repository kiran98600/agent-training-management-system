
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const trainingRepository = require('../repository/training.repository')
    validationHelper.createRequest = async (request) => {
        try {
            if (utilityHelper.isEmptyOrSpaces(request.training_name))
                return {
                    status: false,
                    message: 'training_name cannot be empty'
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

            // if (utilityHelper.isEmptyOrSpaces(request.training_time))
            //     return {
            //         status: false,
            //         message: 'training_time cannot be empty'
            //     }

            // const [detailByTrainingId] = await trainingRepository.getDetail({ training_id: request.training_id })
            // if (detailByTrainingId && detailByTrainingId.length > 0)
            //     return {
            //         status: false,
            //         message: 'training id already exists'
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

            const [detailByTrainingUuid] = await trainingRepository.getDetail({ uuid: request.uuid })
            if (detailByTrainingUuid && detailByTrainingUuid.length < 1)
                return {
                    status: false,
                    message: 'training doesnt exists'
                }

            request.id = detailByTrainingUuid[0].id;
            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };

    validationHelper.attendanceRequest = async (request) => {
        try {
            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };



})(module.exports);