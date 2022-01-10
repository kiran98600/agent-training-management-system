
'use-strict';
(userHelper => {
    const uuidv4 = require("uuid/v4");
    userHelper.getInserObject = (request) => {
        try {
            return {
                "uuid": uuidv4(),
                "full_name": request.full_name,
                "email": request.email,
                "profile_id": request.profile_id,
                "user_type": request.user_type,
                "branch_region": request.branch_region ? request.branch_region : null,
                "branch_id": request.branch_id ? request.branch_id : null,
                "phone_number": request.phone_number,
                "status": 1,
                "is_blocked": "0",
                "created_by": request.meta.user_id ? request.meta.user_id : null,
                "created_date": new Date().getTime(),
            }
        } catch (error) {
            throw error;
        }
    };

    userHelper.getUpdateObject = (request, uuid) => {
        try {
            return {
                "full_name": request.full_name,
                "email": request.email,
                "profile_id": request.profile_id,
                "user_type": request.user_type,
                "branch_region": request.branch_region ? request.branch_region : null,
                "branch_id": request.branch_id ? request.branch_id : null,
                "phone_number": request.phone_number,
                "status": 1,
                "is_blocked": "0",
                "created_date": new Date().getTime(),
            }
        } catch (error) {
            throw error;
        }
    };

    userHelper.changePasswordObj = async (request) => {
        const { hashHelper } = require('../../../helpers');
        const createSalt = await hashHelper.createSalt();
        try {
            return {
                "password": await hashHelper.computeHash(request.password, createSalt),
                "salt": createSalt
            }
        } catch (error) {
            throw error;
        }
    };


})(module.exports);