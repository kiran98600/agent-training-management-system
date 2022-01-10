const { filter } = require('bluebird');

((participantRepository) => {
    const { dbHelper, messageHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    const agentRepository = require('../../agent/repository/agent.repository')
    const trainingRepository = require('../../training/repository/training.repository')

    participantRepository.create = async (request) => {
        try {
            await dbHelper.beginTransaction();
            let query = ""

            for (let i = 0; i < request.insertObj.length; i++) {
                query = sqlString.format(`update agents set ? where id = ? and training_id = ?`, [request.insertObj[i], request.insertObj[i].id, request.insertObj[i].training_id]);
                await dbHelper.query(
                    query,
                    []
                );
                let [agentDetail] = await agentRepository.getDetail({ id: request.insertObj[i].agent_id, training_id: request.insertObj[i].training_id, })
                let [trainingDetail] = await trainingRepository.getDetail({ id: request.insertObj[i].training_id })
                if (agentDetail && agentDetail[0].is_certificate_ready != 1 && request.is_certificate_ready == 1) {
                    console.log('<<<<<<sms send <<<<<<<', agentDetail[0].email)
                    await messageHelper.notify(['email', 'sms'], { email: agentDetail[0].email, title: 'Certificate Alert', phone_number: agentDetail[0].mobile_no, message: `Dear ${agentDetail[0].full_name}, Your certificate for training ${trainingDetail[0].training_name} is ready please contact your nearest branch` })
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
            let query = `SELECT  ag.training_id , tr.max_participant_allowed as total_capacity ,tr.uuid, tr.training_name , tr.training_date_from ,count(ag.training_id) total_agent,sum(ag.is_certificate_ready) as certificate_ready FROM trainings as tr left join agents as ag on tr.id = ag.training_id
            where 1 = 1`
            request && request.branch_id && (query += ` AND tr.training_branch = '${request.branch_id}'`)
            request && request.region_id && (query += ` AND br.branch_region = '${request.region_id}'`)

            query += ` GROUP by ag.training_id`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    participantRepository.getDetail = async (request) => {
        try {

            let query = sqlString.format(
                `SELECT
                    ag.id as agent_id ,ag.full_name , ag.is_certificate_ready
                    FROM agents as ag
                    left join trainings as tr on tr.id = ag.training_id 
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

    participantRepository.getCertificateDetail = async (request) => {
        try {

            let query = sqlString.format(
                `SELECT ag.id 
                , cs.sequence_id
                , tr.id as training_pk_id
                , tr.training_id 
                , ifnull(br.branch_name , 'Corporate Office') as branch_name
                , ag.pp_photo 
                , ag.id as agent_id 
                , ag.full_name 
                , tr.training_date_from 
                , tr.training_date_to
                FROM agents as ag left join trainings as tr on tr.id = ag.training_id 
                left join app_users as au on au.id = ag.created_by 
                left join branches as br on br.branch = au.branch_id
                left join certificate_sequence as cs on cs.agent_id = ag.id and cs.training_id = tr.id
                where ag.training_id = ? and ag.id = ?`, [request.training_id, request.agent_id]
            )
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    participantRepository.updateSequence = async (sequenceRequest) => {
        try {
            let query = sqlString.format(
                `SELECT 
                  cs.sequence_id 
                , cs.training_id
                , cs.agent_id 
                FROM certificate_sequence as cs
                where cs.training_id = ? order by id desc`, [sequenceRequest.training_id]
            )
            let [dbresponse] = await dbHelper.query(
                query,
                []
            );
            if (dbresponse.length > 0) {
                sequenceRequest.sequence_id = (+(dbresponse[0].sequence_id) + 1)
            } else {
                sequenceRequest.sequence_id = 1
            }

            query = sqlString.format(`
           insert into certificate_sequence set ? `,
                sequenceRequest
            )
            await dbHelper.query(
                query,
                []
            );
            return { sequence_id: sequenceRequest.sequence_id }
        } catch (error) {
            throw error
        }
    }
})(module.exports);