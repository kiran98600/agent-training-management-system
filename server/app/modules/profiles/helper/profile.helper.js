
'use-strict';
(profileHelper => {
    const uuidv4 = require("uuid/v4");
    profileHelper.getInserObject = (request) => {
        try {
            return {
                profile: {
                    uuid: uuidv4(),
                    profile_name: request.profile_name,
                    profile_description: request.profile_description

                },
                profile_menus: request.profile_menus
            }
        } catch (error) {
            throw error;
        }
    };

    profileHelper.getUpdateObject = (request) => {
        try {
            return {
                profile_id: request.profile_id,
                profile: {
                    profile_name: request.profile_name,
                    profile_description: request.profile_description

                },
                profile_menus: request.profile_menus
            }
        } catch (error) {
            throw error;
        }
    };

})(module.exports);