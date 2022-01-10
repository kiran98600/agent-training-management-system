
'use-strict';
(profileHelper => {
    const uuidv4 = require("uuid/v4");
    profileHelper.getInserObject = (request, profile_id) => {
        try {
            let returnObject = []
            for (let i = 0; i < request.profile_menus.length; i++) {
                returnObject.push({
                    profile_id: profile_id,
                    menu_id: request.profile_menus[i]
                })
            }
            return returnObject;
        } catch (error) {
            throw error;
        }
    };

    profileHelper.getUpdateObject = (request, uuid) => {
        try {
            return {
                "full_name": request.full_name,
                "username": request.username,
                "email": request.email,
                "profile_id": request.profile_id,
                "user_type": request.user_type,
                "branch_id": request.branch_id,
                "password": '$2b$12$JT3ueh7.kp9mafE92OYlee83M4jP7uxXyibyzyPo/rQTkkI/wkVKO',
                "salt": '$2b$12$JT3ueh7.kp9mafE92OYlee',
                "status": 1,
                "is_blocked": "0",
                // "created_by": request.meta.user_id ? request.meta.user_id : null,
                "created_date": new Date().getTime(),
            }
        } catch (error) {
            throw error;
        }
    };

})(module.exports);