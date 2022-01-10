((profileRepository) => {
    const { dbHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    profileRepository.create = async (request) => {
        try {
            await dbHelper.beginTransaction();
            let query = sqlString.format(`insert into profile set ? `, [request.profile])
            let [profileCreateRsp] = await dbHelper.query(
                query
            );
            query = `INSERT INTO profile_menus
                     (  profile_id,
                        menu_id
                      ) VALUES `;
            for (let i = 0; i < request.profile_menus.length; i++) {
                query += `(   
                        ${sqlString.escape(profileCreateRsp.insertId)},
                        ${sqlString.escape(request.profile_menus[i])}
                        )${i <= request.profile_menus.length - 2 ? ', ' : ''}`;
            }
            await dbHelper.query(
                query
            );
            await dbHelper.commit();
            return true;
        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }

    profileRepository.update = async (request) => {
        try {
            try {
                await dbHelper.beginTransaction();
                let query = sqlString.format(`update profile set ? where id = ? `, [request.profile, request.profile_id])
                let [profileCreateRsp] = await dbHelper.query(
                    query
                );
                query = sqlString.format(`delete from profile_menus where profile_id = ? `, request.profile_id);

                await dbHelper.query(
                    query
                );

                query = `INSERT INTO profile_menus
                         (  profile_id,
                            menu_id
                          ) VALUES `;
                for (let i = 0; i < request.profile_menus.length; i++) {
                    query += `(   
                            ${sqlString.escape(request.profile_id)},
                            ${sqlString.escape(request.profile_menus[i])}
                            )${i <= request.profile_menus.length - 2 ? ', ' : ''}`;
                }
                await dbHelper.query(
                    query
                );
                await dbHelper.commit();
                return true;
            } catch (error) {
                await dbHelper.rollback();
                throw error
            }
        } catch (error) {
            throw error
        }
    }

    profileRepository.getList = async (request) => {
        try {

            let query = `select up.uuid   
                                ,up.id
                                ,up.profile_name
                                ,up.profile_description
                        from profile as up
                        where 1 = 1 
                        `
            request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request.profile_name && (query += ` AND up.profile_name = '${request.profile_name}'`);
            return dbHelper.query(
                query,
                []
            );


        } catch (error) {
            throw error
        }
    }


    profileRepository.detail = async (request) => {
        try {
            let query = `select 
                              up.id as profile_id   
                            from profile as up
                        where 1 = 1 
                        `
            request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request.profile_name && (query += ` AND up.profile_name = '${request.profile_name}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }



    profileRepository.getProfileDetail = async (request) => {
        try {

            let query = `select up.uuid   
                                ,up.id
                                ,up.profile_name
                                ,up.profile_description
                        from profile as up
                        where 1 = 1 
                        `
            request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request.profile_name && (query += ` AND up.id = '${request.user_profile_id}'`);
            return dbHelper.query(
                query,
                []
            );

        } catch (error) {
            throw error
        }
    }


    profileRepository.getDetail = async (request) => {
        try {
            let query = `select 
                              up.id as profile_id   
                             ,m.id
                             ,m.privilege_name  
                            ,mt.privilege_name as parent_menu
                            from profile as up
                            inner join profile_menus as pm on pm.profile_id = up.id
                            inner join menus as m on m.id = pm.menu_id
                            inner join menus as mt on mt.id = m.parent_id 
                        where 1 = 1 
                        `
            request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request.profile_name && (query += ` AND up.profile_name = '${request.profile_name}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    profileRepository.getProfileMenus = async (request) => {
        try {
            let query;
            switch (request.user_profile_id) {
                case -1:
                    query = `select  m.id 
                                    ,m.privilege_name 
                                    ,m.sub_menu_name 
                                    ,m.parent_id 
                                    ,mt.privilege_name as parent_menu_name
                                    ,m.is_action
                            from  menus as m
                            inner join menus as mt on mt.id = m.parent_id `
                    break;

                default:
                    query = `select up.id 
                                ,m.uuid 
                                ,m.id 
                                ,m.privilege_name 
                                ,m.sub_menu_name 
                                ,m.parent_id 
                                ,mt.privilege_name as parent_menu_name
                                ,m.is_action
                          from profile as up 
                        inner join profile_menus as pm on pm.profile_id = up.id
                        inner join menus as m on m.id = pm.menu_id 
                        inner join menus as mt on mt.id = m.parent_id 
                       `
                    request && request.user_profile_id && request.user_profile_id > 0 && (query += ` AND up.id = '${request.user_profile_id}'`);
            }
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    profileRepository.getMenus = async (request) => {
        try {
            let query = `select uuid 
                                ,id  
                                ,privilege_name
                        from menus where is_parent = 1`

            request && request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request && request.menu_ids && (query += sqlString.format(` AND up.menu_id in (?)`, request.menu_ids));
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


    profileRepository.getProfileDropDownList = async (request) => {
        try {
            let query = `select 
                              id ,
                              profile_name   
                            from profile as up
                        where 1 = 1 
                        `
            request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request.profile_name && (query += ` AND up.profile_name = '${request.profile_name}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }



    profileRepository.getPrivileges = async (request) => {
        try {
            let query = `select 
                             m.id
                            ,m.privilege_name  
                            ,mt.privilege_name as parent_menu
                            from menus as m
                            inner join menus as mt on mt.id = m.parent_id 
                        where 1 = 1 `

            request && request.uuid && (query += ` AND up.uuid = '${request.uuid}'`);
            request && request.menu_ids && (query += sqlString.format(` AND up.menu_id in (?)`, request.menu_ids));
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

})(module.exports);