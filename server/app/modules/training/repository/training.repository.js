((trainingRepository) => {
    const { dbHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    trainingRepository.createTraining = async (request) => {
        try {
            let { trainer_info, training_details } = request
            let query = ""

            await dbHelper.beginTransaction();
            query = sqlString.format(`insert into trainings set ?`, training_details)
            let dbResponse = await dbHelper.query(
                query,
                []
            );

            for (let i = 0; i < request.trainer_info.length; i++) {
                query = sqlString.format(`insert into training_trainer set ?`, [request.trainer_info[i]])
                await dbHelper.query(
                    query,
                    []
                );
            }
            await dbHelper.commit();
            return true
        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }

    trainingRepository.update = async (request, condition) => {
        try {
            let { trainer_info, training_details } = request
            let query = ""
            await dbHelper.beginTransaction();
            query = sqlString.format(`update trainings set ? where uuid = ?`, [training_details, condition.uuid])
            await dbHelper.query(
                query,
                []
            );

            query = sqlString.format(`delete from training_trainer where training_id = ?`, [condition.id])
            await dbHelper.query(
                query,
                []
            );

            for (let i = 0; i < request.trainer_info.length; i++) {
                query = sqlString.format(`insert into training_trainer set ?`, [request.trainer_info[i]])
                await dbHelper.query(
                    query,
                    []
                );
            }
            await dbHelper.commit();
            return true

        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }

    trainingRepository.getTrainingList = async (request) => {
        try {
            let query = `select  tr.uuid   
                                ,tr.training_name
                                ,tr.training_date_to
                                ,tr.training_date_from
                                ,tr.training_time
                                ,tr.is_virtual_training
                                ,tr.training_link
                                ,tr.venue
                                ,tr.max_participant_allowed
                        from trainings as tr where 1 = 1 
                        `
            request.region && (query += ` AND tr.training_region = '${request.region}'`);
            request.branch && (query += ` AND (tr.training_branch = '${request.branch}' or tr.training_branch is null or tr.training_branch = 0)`);
            query += ` order by tr.created_date desc`

            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    trainingRepository.getDropDown = async () => {
        try {
            let query = `select  tr.id   
                                ,tr.training_name
                                ,tr.trainer_name
                        from trainings as tr
                        `
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    trainingRepository.getDetail = async (request) => {
        try {
            let query = `select  tr.uuid   
                ,tr.id
                ,tr.training_name
                ,tr.training_id 
                ,tr.training_date_to
                ,tr.training_date_from
                ,tr.training_branch
                ,tr.training_date_to
                ,tr.training_date_from 
                ,tr.training_time
                ,tr.training_branch 
                ,tr.is_virtual_training
                ,tr.training_branch as branch_id  
                ,tr.training_region as region_id
                ,tbr.branch_region_name  
                ,br.branch_name  
                ,tr.training_link
                ,tr.venue
                ,tr.max_participant_allowed
                from trainings as tr
                left join branch_regions as tbr on tr.training_region = tbr.branch_region
                left join branches as br on tr.training_branch = br.branch
                where 1 = 1
                `
            request.uuid && (query += ` AND tr.uuid = '${request.uuid}'`);
            request.id && (query += ` AND tr.id = '${request.id}'`);
            request.training_id && (query += ` AND tr.training_id = '${request.training_id}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    trainingRepository.getTraininingTrainerDetail = async (request) => {
        try {
            let query = `select  
                 tr.content
                ,tr.trainer_name
                ,tr.training_date
                ,tr.training_time
                ,tr.trainer_email
                ,tr.trainer_phone_number
                from training_trainer as tr
                where 1 = 1
                `
            request.uuid && (query += ` AND tr.uuid = '${request.uuid}'`);
            request.training_id && (query += ` AND tr.training_id = '${request.training_id}'`);
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    trainingRepository.getTraininingAttendanceDetail = async (request) => {
        try {
            let query = `select  
                             ta.training_id
                            ,ta.training_date
                            ,ifnull(br.branch_name , 'Corporate Office') as branch_name
                            ,ag.full_name
                            ,ta.agent_id
                            ,ta.is_present
                            ,ta.is_video_on
                            from training_attendance as ta
                        left join trainings tr on tr.id = ta.training_id      
                        left join agents ag on ag.id = ta.agent_id  
                        left join app_users as au on ag.created_by = au.id 
                        left join branches as br on br.branch = au.branch_id  
                        where 1 = 1
                `
            request.training_id && (query += ` AND ta.training_id = '${request.training_id}'`);
            request.training && (query += ` AND ta.training_id = '${request.training}'`);
            request.region && (query += ` AND tr.training_region = '${request.region}'`);
            request.region_id && (query += ` AND tr.training_region = '${request.region_id}'`);
            request.branch && (query += ` AND tr.training_branch = '${request.branch}'`);
            request.branch_id && (query += ` AND tr.training_branch = '${request.branch_id}'`);
            request.date && (query += ` AND ta.training_date = '${request.date}'`);

            query += ` order by br.branch_name asc`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    trainingRepository.attendance = async (insertObj, request) => {
        try {
            let [attendanceInfo] = await trainingRepository.getTraininingAttendanceDetail(request)
            if (attendanceInfo.length > 0) {
                query = sqlString.format(`delete from training_attendance where training_id = ? and training_date = ? `, [request.training_id, request.date])
                await dbHelper.query(
                    query,
                    []
                );
            }
            for (let i = 0; i < insertObj.length; i++) {
                query = sqlString.format(`insert into training_attendance set ?`, [insertObj[i]])
                await dbHelper.query(
                    query,
                    []
                );
            }
            await dbHelper.commit();
            return true
        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }

})(module.exports);