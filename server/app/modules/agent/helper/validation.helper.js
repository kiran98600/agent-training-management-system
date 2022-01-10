
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const agentRepository = require('../repository/agent.repository')
    validationHelper.createRequest = async (request) => {
        try {

            // if (utilityHelper.isEmptyOrSpaces(request.full_name))
            //     return {
            //         status: false,
            //         message: 'name cannot be empty'
            //     }
            // if (utilityHelper.isEmptyOrSpaces(request.dob))
            //     return {
            //         status: false,
            //         message: 'dob cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.gender))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.fathers_name))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.province))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.district))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.municipality))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.address_tol))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.address_ward_no))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.mobile_no))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.email))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.citizenship_no))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.citizenship_issue_date))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.education_qualification))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.faculty))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.current_occupation))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.pan_no))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.bank_account_number))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.bank_name))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.pp_photo))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.citizen))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.academic_marksheet))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }


            // if (utilityHelper.isEmptyOrSpaces(request.character_marksheet))
            //     return {
            //         status: false,
            //         message: 'gender cannot be empty'
            //     }

            const [detailByPhoneTraining] = await agentRepository.getDetail({ mobile_no: request.mobile_no, training_id: request.training_id })
            if (detailByPhoneTraining && detailByPhoneTraining.length > 0)
                return {
                    status: false,
                    message: 'agent already exists'
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
            // if (utilityHelper.isEmptyOrSpaces(request.username))
            //     return {
            //         status: false,
            //         message: 'username cannot be empty'
            //     }

            // if (utilityHelper.isEmptyOrSpaces(request.email))
            //     return {
            //         status: false,
            //         message: 'email cannot be empty'
            //     }


            // const [detailByUuid] = await agentRepository.getUserDetail({ uuid: request.uuid })
            // if (detailByUuid && detailByUuid.length < 1 && (detailByUserName[0].uuid != request.uuid))
            //     return {
            //         status: false,
            //         message: 'user doesnt exists'
            //     }

            // const [detailByUserName] = await agentRepository.getUserDetail({ username: request.username })
            // if (detailByUserName && detailByUserName.length > 0 && (detailByUserName[0].uuid != request.uuid))
            //     return {
            //         status: false,
            //         message: 'username already exists'
            //     }

            // const [detailByUserEmail] = await agentRepository.getUserDetail({ email: request.email })
            // if (detailByUserEmail && detailByUserEmail.length > 0 && (detailByUserName[0].uuid != request.uuid))
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

})(module.exports);