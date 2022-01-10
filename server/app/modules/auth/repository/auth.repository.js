((authRepository) => {
    const { dbHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    authRepository.getUsers = async () => {
        try {
            let query = `select uuid   
                                ,id
                                ,full_name
                                ,email
                                ,admin_profile_id as admin_profile
                                ,user_type
                                ,status
                        from app_users`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    authRepository.registerLoginSession = async (request) => {
        try {
            let query = sqlString.format(`insert into user_loggedin_sessions set ? `, request)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    authRepository.flushSession = async (user_id) => {
        try {
            let query = sqlString.format(`delete from user_loggedin_sessions where user_id = ? `, user_id)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    authRepository.updateLoginSession = async (request, id) => {
        try {
            let query = sqlString.format(`update user_loggedin_sessions set ?  where user_id = ? `, [request, id])
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    authRepository.getLoginSession = async (request) => {
        try {
            let query = sqlString.format(`select uls.user_id , au.profile_id , au.branch_region , au.branch_id , au.user_type  from user_loggedin_sessions as uls
                                          left join app_users au on au.id = uls.user_id 
                                          where 1=1
                                           `)
            request.token && (query += ` AND uls.token = '${request.token}'`);
            request.user_id && (query += ` AND uls.user_id = '${request.user_id}'`);

            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    authRepository.loginArchieve = async (request) => {
        try {
            let query = sqlString.format(`insert into user_loggedin_sessions set ? `, request)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }




})(module.exports);