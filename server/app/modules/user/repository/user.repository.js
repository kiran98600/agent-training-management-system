((userRepository) => {
    const { dbHelper } = require('../../../helpers')
    const { messageHelper, hashHelper } = require('../../../helpers');
    const sqlstring = require('sqlstring');

    userRepository.createUser = async (request) => {
        const randomPassword = await hashHelper.generatePassword();
        const createSalt = await hashHelper.createSalt();
        try {
            await dbHelper.beginTransaction();
            request.salt = createSalt;
            request.password = await hashHelper.computeHash(randomPassword, createSalt)
            let query = sqlstring.format(`insert into app_users set ?`, request)
            let dbResponse = await dbHelper.query(
                query,
                []
            );
            let message = `Dear User,\n You have been succcessfully registered for Training Management with below details. \n user-id: ${request.email} \n Password: ${randomPassword} \n Web address to Login : http://10.20.30.57:8081 \n Please change password after login.\n For any difficulties please contact IT Department.\n Thank You,\n IT Department. `
            await messageHelper.notify(['email', 'sms'], { email: request.email, title: 'user registration', phone_number: request.phone_number, message: message })
            await dbHelper.commit();
            return dbResponse

        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }

    userRepository.updateUser = async (request, condition) => {
        try {
            let query = sqlstring.format(`update app_users set ? where 1 = 1`, request)
            condition && condition.uuid && (query += ` AND uuid = '${condition.uuid}'`)
            condition && condition.id && (query += ` AND id = '${condition.id}'`)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    userRepository.getUserList = async (request) => {
        try {
            let query = `select au.uuid
                , au.id
                , au.full_name
                , au.email
                , pr.profile_name
                , au.phone_number
                , au.profile_id as profileId
                ,case when au.user_type = 1 then 'admin' when au.user_type = 2 then 'executive' when au.user_type = 3 then 'branch-admin' else 'invalid-admin' end as user_type_description
                ,case when au.status = 1 then 'active' else 'in-active' end as status
                , br.branch_name
                , brg.branch_region
                , brg.branch_region_name
                from app_users as au
                left join branches as br on au.branch_id = br.branch
                left join branch_regions as brg on brg.branch_region = au.branch_region
                left join profile as pr on au.profile_id = pr.id
                where user_type <> 999
                `
            request.region && (query += ` AND au.branch_region = '${request.region}'`);
            request.branch && (query += ` AND (au.branch_id = '${request.branch}' or au.branch_id is null or au.branch_id = 0)`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    userRepository.getUserDetail = async (request, detailFor) => {
        try {
            let query = ''
            switch (detailFor) {
                case 'view-detail':
                    query = `select au.uuid
                , pr.profile_name
                , au.id
                , au.full_name
                , au.email
                , au.phone_number
                , au.profile_id
                , au.user_type
                ,case when au.user_type = 1 then 'admin' when au.user_type = 2 then 'executive' when au.user_type = 3 then 'branch-admin' else 'invalid-admin' end as user_type_description
                , au.status
                , au.branch_region
                , brg.branch_region_name
                , br.branch_name
                , au.branch_id
                , br.branch_name
                ,case when au.status = 1 then 'active' else 'in-active' end as status_description
                    from app_users as au
                    left join branches as br on au.branch_id = br.branch
                    left join branch_regions as brg on brg.branch_region = au.branch_region
                    left join profile as pr on au.profile_id = pr.id
                    where 1 = 1 `
                    break;
                case 'login':
                    query = `select au.uuid
                , pr.profile_name
                , au.id
                , au.full_name
                , au.email
                , au.phone_number
                , au.profile_id
                , au.user_type
                , au.status
                , au.branch_id
                , au.password
                , au.salt
                , br.branch_name
                        from app_users as au
                        left join branches as br on au.branch_id = br.branch
                        left join profile as pr on au.profile_id = pr.id
                        where 1 = 1 `
                    break;
                default:
                    query = `select au.uuid
                , pr.profile_name
                , au.id
                , au.full_name
                , au.email
                , au.phone_number
                , 'profile-test' as profile
                ,case when  au.user_type = 1 then 'admin' when au.user_type = 2 then 'executive' when au.user_type = 3 then 'branch-admin' else 'super-admin' end as user_type_description
                , au.status
                , au.branch_id
                , br.branch_name
                    from app_users as au
                    left join branches as br on au.branch_id = br.branch
                    left join profile as pr on au.profile_id = pr.id
                    where 1 = 1 `
                    break;
            }

            request.uuid && (query += ` AND au.uuid = '${request.uuid}'`);
            request.id && (query += ` AND au.id = '${request.id}'`);
            request.email && (query += ` AND au.email = '${request.email}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }
})(module.exports);