
'use-strict';

const { agentHelper } = require(".");

(agentHelper => {
    const uuidv4 = require("uuid/v4");
    agentHelper.getInserObject = (request) => {
        try {
            return {
                "uuid": uuidv4(),
                "full_name": request.full_name,
                "dob": request.dob,
                "gender": request.gender,
                "fathers_name": request.fathers_name,
                "province": request.province,
                "district": request.district,
                "municipality": request.municipality,
                "address_tol": request.address_tol,
                "address_ward_no": request.address_ward_no,
                "mobile_no": request.mobile_no,
                "email": request.email,
                "citizenship_no": request.citizenship_no,
                "citizenship_issue_date": request.citizenship_issue_date,
                "education_qualification": request.education_qualification,
                "faculty": request.faculty,
                "current_occupation": request.current_occupation,
                "pan_no": request.pan_no,
                "bank_account_number": request.bank_account_number,
                "bank_name": request.bank_name,
                "referring_staff_code": request.referring_staff_code,
                "referring_staff_name": request.referring_staff_name,
                "pp_photo": request.pp_photo,
                "citizen": request.citizen,
                "academic_marksheet": request.academic_marksheet,
                "character_marksheet": request.character_marksheet,
                "status": 1,
                "is_blocked": 0,
                "is_deleted": 0,
                "created_by": request.meta.user_id ? request.meta.user_id : null,
                "created_date": new Date().getTime(),
                "training_id": request.training_id,
                "is_fee_paid": request.is_fee_paid,
                "citizenship_issue_date_bs": request.citizenship_issue_date_bs
            }
        } catch (error) {
            throw error;
        }
    };

    agentHelper.getUpdateObject = (request, uuid) => {
        try {
            return {
                "uuid": request.uuid,
                "full_name": request.full_name,
                "dob": request.dob,
                "gender": request.gender,
                "fathers_name": request.fathers_name,
                "province": request.province,
                "district": request.district,
                "municipality": request.municipality,
                "address_tol": request.address_tol,
                "address_ward_no": request.address_ward_no,
                "mobile_no": request.mobile_no,
                "email": request.email,
                "citizenship_no": request.citizenship_no,
                "citizenship_issue_date": request.citizenship_issue_date,
                "education_qualification": request.education_qualification,
                "faculty": request.faculty,
                "current_occupation": request.current_occupation,
                "pan_no": request.pan_no,
                "bank_account_number": request.bank_account_number,
                "bank_name": request.bank_name,
                "referring_staff_code": request.referring_staff_code,
                "referring_staff_name": request.referring_staff_name,
                "pp_photo": request.pp_photo,
                "citizen": request.citizen,
                "academic_marksheet": request.academic_marksheet,
                "character_marksheet": request.character_marksheet,
                "status": 1,
                "updated_date": new Date().getTime(),
                "updated_by": request.meta.user_id ? request.meta.user_id : null,
                "training_id": request.training_id,
                "is_fee_paid": request.is_fee_paid,
                "citizenship_issue_date_bs": request.citizenship_issue_date_bs
            }
        } catch (error) {
            throw error;
        }
    };

    agentHelper.setMetaData = async (req) => {
        const authRepository = require('../../auth/repository/auth.repository')
        try {
            let { authorization } = req.headers
            const [isTokenAlreadyExists] = await authRepository.getLoginSession({ token: authorization })
            req.body.meta = {
                user_id: isTokenAlreadyExists[0].user_id,
                user_profile_id: isTokenAlreadyExists[0].profile_id,
                user_type: isTokenAlreadyExists[0].user_type,
                branch_region: isTokenAlreadyExists[0].branch_region,
                branch_id: isTokenAlreadyExists[0].branch_id
            }
            return true;
        } catch (err) {
            throw error
        }
    }
})(module.exports);