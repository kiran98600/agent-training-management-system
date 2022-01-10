((participantRepository) => {
    const { dbHelper, messageHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    const agentRepository = require('../../agent/repository/agent.repository')
    const trainingRepository = require('../../training/repository/training.repository')

    participantRepository.create = async (request) => {
        try {
            await dbHelper.beginTransaction();
            let query = ""

            query = sqlString.format(`select agent_id from training_participants where training_id = ? `, request.training_id)
            let [existingAgents] = await dbHelper.query(
                query,
                []
            );

            query = sqlString.format(`delete from training_participants where training_id = ? `, request.training_id)
            await dbHelper.query(
                query,
                []
            );

            query = `INSERT INTO training_participants
                    (   training_id,
                        agent_id,
                        is_certificate_ready,
                        is_certificate_issued
                    ) VALUES `;
            for (let i = 0; i < request.insertObj.length; i++) {
                query += `(   
                    ${sqlString.escape(request.insertObj[i].training_id)},
                    ${sqlString.escape(request.insertObj[i].agent_id)},
                    ${0},
                    ${0}
                    )${i <= request.insertObj.length - 2 ? ', ' : ''}`;
            }

            await dbHelper.query(
                query,
                []
            );
            await dbHelper.commit();
            for (let i = 0; i < request.insertObj.length; i++) {
                let idArray = existingAgents.map(item => item.agent_id)
                if (!idArray.includes(request.insertObj[i].agent_id)) {
                    let [agentDetail] = await agentRepository.getDetail({ id: request.insertObj[i].agent_id })
                    let [trainingDetail] = await trainingRepository.getDetail({ id: request.insertObj[i].training_id })
                    await messageHelper.notify(['email', 'sms'], { email: agentDetail[0].email, title: 'Training Registration', phone_number: agentDetail[0].mobile_no, message: `Dear ${agentDetail[0].full_name}, You have been enrolled in the Agent Basic Training from ${trainingDetail[0].training_date}. Thank You, Reliance Life Insurance` })
                }
            }
            return true
        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }


    participantRepository.getList = async (request) => {
        try {

            let query = `SELECT tr.id ,tr.uuid, tr.training_name , COUNT(training_id) as joined , tr.max_participant_allowed as total
                         FROM trainings as tr
                            left join training_participants as tp on tr.id = tp.training_id 
                         GROUP by training_id`

            return dbHelper.query(
                query,
                [request]
            );
        } catch (error) {
            throw error
        }
    }

    participantRepository.getDetail = async (request) => {
        try {

            let query = sqlString.format(
                `SELECT
                    ag.id as agent_id
                    FROM training_participants as tp
                    left join trainings as tr on tr.id = tp.training_id 
                    left join agents as ag on ag.id = tp.agent_id
                where tr.uuid = ?`, request.uuid
            )
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    participantRepository.update = async (request) => {
        try {
            await dbHelper.beginTransaction();
            let query = ""

            query = sqlString.format(`select agent_id from training_participants where agent_id = ? `, request.agentids)
            let existingAgents = await dbHelper.query(
                query,
                []
            );

            query = sqlString.format(`delete from training_participants where agent_id = ? `, request.agentids)
            await dbHelper.query(
                query,
                []
            );

            query = `INSERT INTO training_participants
            (  exiexistingAgentsstingAgents
                training_id,
                agent_id

            ) VALUES `;
            for (let i = 0; i < request.length; i++) {
                query += `(   
            ${sqlString.escape(request[i].training_id)},
            ${sqlString.escape(request[i].agent_id)}
            )${i <= request.length - 2 ? ', ' : ''}`;
            }

            await dbHelper.query(
                query,
                []
            );

            for (let i = 0; i < request.length; i++) {
                existingAgents.contai
            }

            await dbHelper.commit();
            return true
        } catch (error) {
            await dbHelper.rollback();
            throw error
        }
    }



})(module.exports);