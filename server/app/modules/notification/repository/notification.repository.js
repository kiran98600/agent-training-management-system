((userRepository) => {
    const { dbHelper, messageHelper } = require('../../../helpers')

    userRepository.notify = async (request) => {
        try {
            let query = `SELECT 
                          ag.uuid
                         ,tr.training_name
                         ,tr.training_date_from
                         ,tr.training_time
                         ,tr.is_virtual_training
                         ,tr.venue
                         ,tr.training_link
                         ,ag.full_name 
                         ,ag.email
                         ,ag.mobile_no
                         ,case when ag.is_certificate_ready = 1 then 'ready' else 'not ready' end  as is_certificate_ready
                         ,case when ag.pp_photo is null then 'not uploaded' else 'uploaded' end as pp_photo_upload_status
                         ,case when ag.citizen is null then 'not uploaded' else 'uploaded' end as citizenship_upload_status   
                         ,case when ag.academic_marksheet is null then 'not uploaded' else 'uploaded' end academic_marksheet_upload_status    
                         ,case when ag.character_marksheet is null then 'not uploaded' else 'uploaded' end character_marksheet_upload_status
                         ,case when ag.is_fee_paid = 1 then 'paid' else 'unpaid' end is_fee_paid
                         FROM trainings as tr
                         left join agents as ag on tr.id = ag.training_id 
                         left join branches as br on br.branch = tr.training_branch  
                         left join branch_regions as breg on br.branch_region = breg.branch_region   
                         where 1 = 1`
            request && request.training_id && (query += ` AND tr.id = '${request.training_id}'`)
            let [data] = await dbHelper.query(
                query,
                []
            );
            for (let i = 0; i < data.length; i++) {
                let message = '';
                await messageHelper.notify(['email', 'sms'], { email: data[i].email, title: 'training alert', phone_number: data[i].mobile_no, message: (request.content) ? request.content : '' })
            }

            return true

        } catch (error) {
            throw error
        }
    }

    userRepository.notifyTrainer = async (request) => {
        try {
            let query = `SELECT 
                          ttr.trainer_name
                         ,ttr.trainer_email
                         ,tr.training_link
                         ,ttr.training_date
                         ,tr.training_time
                         ,ttr.trainer_phone_number
                         ,tr.training_name
                         ,tr.venue
                         FROM trainings as tr
                         left join training_trainer as ttr on tr.id = ttr.training_id 
                         where 1 = 1`
            request && request.training_id && (query += ` AND tr.id = '${request.training_id}'`)
            let [data] = await dbHelper.query(
                query,
                []
            );
            for (let i = 0; i < data.length; i++) {
                let message = '';
                await messageHelper.notify(['email'], { email: data[i].trainer_email, title: 'training alert', phone_number: data[i].trainer_phone_number, message: request.content ? request.content : '' })
            }

            return true

        } catch (error) {
            throw error
        }
    }



})(module.exports);