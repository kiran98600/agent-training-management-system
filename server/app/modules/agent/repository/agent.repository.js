((agentRepository) => {
    const { dbHelper, messageHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')

    agentRepository.create = async (request) => {
        try {
            let query = `insert into agents set ?`
            let dbResponse = await dbHelper.query(
                query,
                [request]
            );
            await request.email ? messageHelper.notify(['email'], { email: request.email, title: 'agent registration', phone_number: request.mobile_no, message: `Dear ${request.full_name} you are registered successfully , we will notify you soon for your training` }) : true
            await dbHelper.commit();
            return dbResponse;
        } catch (error) {
            throw error
        }
    }

    agentRepository.update = async (request, uuid) => {
        try {
            let query = `update agents set ? where uuid = ?`
            return dbHelper.query(
                query,
                [request, uuid]
            );
        } catch (error) {
            throw error
        }
    }

    agentRepository.list = async (request) => {
        try {
            let query = `select  ag.uuid
                                ,ifnull(br.branch_name , 'Corporate Office') as branch_name
                                ,ag.full_name
                                ,ag.email       
                                ,ag.mobile_no  
                                ,case when (ag.pp_photo is null or ag.citizen is null or ag.academic_marksheet is null or ag.character_marksheet is null ) then 'incomplete ' else 'complete upload' end as document_upload_status 
                                ,case when (ag.is_fee_paid = 1) then 'paid ' else 'not paid' end as is_fee_paid
                                ,ag.created_date 
                                ,au.full_name as created_by 
                        from agents as ag
                        left join app_users as au on ag.created_by = au.id 
                        left join branches as br on br.branch = au.branch_id  
                        left join trainings as tr on tr.id = ag.training_id 
                        left join branch_regions as brgn on brgn.branch_region = br.branch_region
                        where 1 = 1`

            switch (request.meta.user_type) {
                case 2:
                    request.region && (query += ` AND au.branch_region = '${request.region}'`);
                    request.branch && (query += ` AND (au.branch_id = '${request.branch}')`);
                    (query += sqlString.format(` AND au.branch_region = ? `, [request.meta.branch_region]));
                    break;
                case 3:
                    request.region && (query += ` AND au.branch_region = '${request.region}'`);
                    request.branch && (query += ` AND (au.branch_id = '${request.branch}')`);
                    (query += sqlString.format(` AND au.branch_region = ? `, [request.meta.branch_region]));
                    (query += sqlString.format(` AND au.branch_id = ?  `, [request.meta.branch_id]));
                    break;
                default:
                    break;
            }
            if (request) {
                request.training && (query += sqlString.format(` AND ag.training_id = ? `, [request.training]));
                request.mobile_no && (query += sqlString.format(` AND ag.mobile_no = ? `, [request.mobile_no]));
                request.full_name && (query += sqlString.format(` AND ag.full_name like ? `, [('%' + request.full_name + '%')]));
            }

            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    agentRepository.ddlist = async () => {
        try {
            let query = `select id
                                ,full_name
                        from agents `
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    agentRepository.getDetail = async (request) => {
        try {
            try {
                let query = `
                select
                  ag.uuid
                , ag.id             
                , ag.full_name  
                , ifnull(br.branch_name , 'Corporate Office') as branch_name         
                , ag.dob            
                , ag.gender             
                , ag.fathers_name             
                , ag.province              
                , ag.district             
                , ag.municipality            
                , ag.address_tol          
                , ag.address_ward_no             
                , ag.mobile_no              
                , ag.email
                , ag.citizenship_no
                , ag.citizenship_issue_date
                , ag.citizenship_issue_date_bs
                , ag.education_qualification
                , ag.faculty
                , ag.current_occupation
                , ag.pan_no
                , ag.bank_account_number
                , ag.bank_name
                , ag.referring_staff_code
                , ag.referring_staff_name
                , ag.pp_photo
                , ag.citizen
                , ag.academic_marksheet
                , ag.character_marksheet
                , ag.training_id
                , tr.training_name
                , ag.status
                , prv.province_name
                , ds.district_name
                , ag.is_certificate_ready
                , ag.is_fee_paid
                from agents as ag
                left join trainings as tr on tr.id = ag.training_id
                left join province as prv on prv.id = ag.province
                left join district as ds on ds.id = ag.district
                left join app_users as au on ag.created_by = au.id 
                left join branches as br on br.branch = au.branch_id  
                where 1 = 1`
                request && request.uuid && (query += ` AND ag.uuid = '${request.uuid}'`);
                request && request.id && (query += ` AND ag.id = '${request.id}'`);
                request && request.mobile_no && (query += ` AND ag.mobile_no = '${request.mobile_no}'`);
                request && request.training_id && (query += ` AND ag.training_id = '${request.training_id}'`);
                query += ` order by br.branch_name asc`
                return dbHelper.query(
                    query,
                    []
                );
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    }
})(module.exports);