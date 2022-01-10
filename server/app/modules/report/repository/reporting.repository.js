const { request } = require('express');

((reportRepository) => {
    const { dbHelper } = require('../../../helpers')

    reportRepository.getTrainingParicipantSummary = async (request) => {
        try {
            let query = `SELECT tr.id 
                         , tr.uuid
                         , tr.training_name 
                         , tr.training_date_from 
                         , tr.training_date_to 
                         , br.branch_name 
                         , breg.branch_region_name 
                         , COUNT(ag.training_id) as joined 
                         , tr.max_participant_allowed as total 
                         FROM trainings as tr
                         left join agents as ag on tr.id = ag.training_id 
                         left join app_users as au on ag.created_by = au.id    
                         left join branches as br on br.branch = au.branch_id  
                         left join branch_regions as breg on br.branch_region = breg.branch_region   
                         where 1 = 1`
            request && request.branch && (query += ` AND au.branch_id = '${request.branch}'`)
            request && request.region && (query += ` AND tr.training_region = '${request.region}'`)

            query += ` GROUP by ag.training_id`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    reportRepository.getBranchWiseSummaryReport = async (request) => {
        try {
            let query = `SELECT tr.id 
                                , tr.training_name  
                                , br.branch_name
                                , tatt.training_date
                                , count(ag.id) total_agent,
                                sum(tatt.is_present) total_present
                        FROM trainings as tr
                        left join agents as ag on tr.id = ag.training_id 
                        left join app_users as au on ag.created_by = au.id 
                        left join training_attendance as tatt on tatt.agent_id = ag.id and tatt.training_id = tr.id
                        left join branches as br on br.branch = au.branch_id  
                        left join branch_regions as breg on br.branch_region = breg.branch_region   
                        where 1 = 1 `

            request && request.region && (query += ` AND breg.branch_region = '${request.region}'`)
            request && request.branch && (query += ` AND br.branch = '${request.branch}'`)
            request && request.training && (query += ` AND ag.training_id = '${request.training}'`)
            request && request.from_date && (query += ` AND date(tatt.training_date) >= date('${request.from_date}')`)
            request && request.to_date && (query += ` AND date(tatt.training_date) <= date('${request.to_date}')`)

            query += ` group by br.id , tatt.training_date 
                       order by id desc`

            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    reportRepository.getRegionWiseSummaryReport = async (request) => {
        try {
            let query = `SELECT tr.id ,
                                tr.training_name  ,
                                breg.branch_region_name, 
                                tatt.training_date,
                                count(ag.id) total_agent,
                                sum(tatt.is_present) total_present
                        FROM trainings as tr
                        left join agents as ag on tr.id = ag.training_id 
                        left join app_users as au on ag.created_by = au.id 
                        left join training_attendance as tatt on tatt.agent_id = ag.id and tatt.training_id = tr.id
                        left join branches as br on br.branch = au.branch_id  
                        left join branch_regions as breg on br.branch_region = breg.branch_region   
                        where  1 = 1 `

            request && request.region && (query += ` AND breg.branch_region = '${request.region}'`)
            request && request.branch && (query += ` AND br.branch = '${request.branch}'`)
            request && request.training && (query += ` AND ag.training_id = '${request.training}'`)
            request && request.from_date && (query += ` AND date(tatt.training_date) >= date('${request.from_date}')`)
            request && request.to_date && (query += ` AND date(tatt.training_date) <= date('${request.to_date}')`)
            query += ` group by breg.branch_region , tatt.training_date 
            order by id desc `
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    reportRepository.getTrainingParicipant = async (request) => {
        try {
            let query = `SELECT 
                          ag.id as agent_id
                         ,ag.uuid
                         ,ag.full_name 
                         ,ag.current_occupation
                         ,ag.mobile_no 
                         ,ag.email
                         ,ag.education_qualification	
                         ,ifnull(br.branch_name , 'Corporate Office') branch_name
                         ,ag.created_date	
                         ,au.full_name as created_by
                         ,case when ag.is_certificate_ready = 1 then 'ready' else 'not ready' end  as is_certificate_ready
                         ,case when ag.pp_photo is null then 'not uploaded' else 'uploaded' end as pp_photo_upload_status
                         ,case when ag.citizen is null then 'not uploaded' else 'uploaded' end as citizenship_upload_status   
                         ,case when ag.academic_marksheet is null then 'not uploaded' else 'uploaded' end academic_marksheet_upload_status    
                         ,case when ag.character_marksheet is null then 'not uploaded' else 'uploaded' end character_marksheet_upload_status
                         ,case when ag.is_fee_paid = 1 then 'paid' else 'unpaid' end is_fee_paid
                         FROM trainings as tr
                         left join agents as ag on tr.id = ag.training_id 
                         left join app_users as au on ag.created_by = au.id 
                         left join branches as br on br.branch = au.branch_id  
                         left join branch_regions as breg on br.branch_region = breg.branch_region   
                         where ag.full_name is not null`
            request && request.training && (query += ` AND ag.training_id = '${request.training}'`)
            request && request.training_id && (query += ` AND ag.training_id = '${request.training_id}'`);
            request && request.branch && (query += ` AND au.branch_id = '${request.branch}'`)
            request && request.region && (query += ` AND tr.training_region = '${request.region}'`)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    reportRepository.branchWiseAgentReport = async (request) => {
        try {
            let query = `SELECT 
                          ag.uuid
                         ,ag.id as agent_id
                         ,ag.full_name 
                         ,ag.email
                         ,ag.mobile_no
                         ,br.branch_name
                         ,tr.id as training_id
                         ,au.full_name as created_by
                         ,case when ag.is_certificate_ready = 1 then 'ready' else 'not ready' end  as is_certificate_ready
                         ,case when ag.pp_photo is null then 'not uploaded' else 'uploaded' end as pp_photo_upload_status
                         ,case when ag.citizen is null then 'not uploaded' else 'uploaded' end as citizenship_upload_status   
                         ,case when ag.academic_marksheet is null then 'not uploaded' else 'uploaded' end academic_marksheet_upload_status    
                         ,case when ag.character_marksheet is null then 'not uploaded' else 'uploaded' end character_marksheet_upload_status
                         ,case when ag.is_fee_paid = 1 then 'paid' else 'unpaid' end is_fee_paid
                         FROM trainings as tr
                         left join agents as ag on tr.id = ag.training_id 
                         left join app_users as au on tr.created_by = au.id 
                         left join branches as br on br.branch = tr.training_branch  
                         left join branch_regions as breg on br.branch_region = breg.branch_region   
                         where ag.full_name is not null`
            request && request.training_id && (query += ` AND tr.id = '${request.training_id}'`)
            request && request.branch_id && (query += ` AND au.branch_id = '${request.branch_id}'`)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    reportRepository.attendanceDetailReport = async (request) => {
        try {
            let query = `select  
                         ta.training_id
                        ,ta.training_date
                        ,ag.full_name
                        ,ta.agent_id
                        ,ta.is_present
                        ,ta.is_video_on
                        from training_attendance as ta
                    left join agents ag on ag.id = ta.agent_id    
                where 1 = 1
        `
            request.training_id && (query += ` AND ta.training_id = '${request.training_id}'`);
            request.training && (query += ` AND ta.training_id = '${request.training}'`);
            request.date && (query += ` AND ta.training_date = '${request.date}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    reportRepository.getAttendanceReport = async (request) => {
        try {
            let query = `SELECT 
                            ag.uuid
                        ,ag.id as agent_id
                        ,ag.full_name 
                        ,ag.email
                        ,ag.mobile_no
                        ,br.branch_name
                        ,tr.id as training_id
                        ,au.full_name as created_by
                        ,case when ag.is_certificate_ready = 1 then 'ready' else 'not ready' end  as is_certificate_ready
                        ,case when ag.pp_photo is null then 'not uploaded' else 'uploaded' end as pp_photo_upload_status
                        ,case when ag.citizen is null then 'not uploaded' else 'uploaded' end as citizenship_upload_status   
                        ,case when ag.academic_marksheet is null then 'not uploaded' else 'uploaded' end academic_marksheet_upload_status    
                        ,case when ag.character_marksheet is null then 'not uploaded' else 'uploaded' end character_marksheet_upload_status
                        ,case when ag.is_fee_paid = 1 then 'paid' else 'unpaid' end is_fee_paid
                        FROM trainings as tr
                        left join agents as ag on tr.id = ag.training_id 
                        left join app_users as au on tr.created_by = au.id 
                        left join branches as br on br.branch = tr.training_branch  
                        left join branch_regions as breg on br.branch_region = breg.branch_region   
                        where ag.full_name is not null
        `
            request.training_id && (query += ` AND ta.training_id = '${request.training_id}'`);
            request.training && (query += ` AND ta.training_id = '${request.training}'`);
            request.date && (query += ` AND ta.training_date = '${request.date}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

})(module.exports);