((profileRepository) => {
    const { dbHelper } = require('../../../helpers')
    profileRepository.getMenus = async () => {
        try {
            let query = `select uuid 
                                ,id  
                                ,privilege_name
                        from menus where is_parent = 1`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }
    profileRepository.getSubMenus = async (parent_id) => {
        try {
            let query = `select uuid 
                                ,id  
                                ,privilege_name
                        from menus where is_parent = 0 and is_menu = 1 and parent_id = ?`
            return dbHelper.query(
                query,
                [parent_id]
            );
        } catch (error) {
            throw error
        }
    }

    profileRepository.getActions = async (sub_menu_name) => {
        try {
            let query = `select uuid 
                                ,id  
                                ,privilege_name
                        from menus where is_parent = 0 and is_action = 1 and sub_menu_name = ?`
            return dbHelper.query(
                query,
                [sub_menu_name]
            );
        } catch (error) {
            throw error
        }
    }

})(module.exports);