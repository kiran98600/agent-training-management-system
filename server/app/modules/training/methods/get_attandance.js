(() => {
    const trainingRepository = require('../repository/training.repository');
    const agentRepospitory = require('../../agent/repository/agent.repository');
    const trainingHelper = require('../helper/training.helper');
    const httpStatus = require('http-status')
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.query, ...req.body }
            let responseBody = {
                training_id: '',
                date: '',
                attendance_info: []
            }
            responseBody.training_id = request.training_id;
            responseBody.date = request.date;
            let [attendance_datail] = await trainingRepository.getTraininingAttendanceDetail(request)
            if (attendance_datail && attendance_datail.length > 0) {
                for (let i = 0; i < attendance_datail.length; i++) {
                    responseBody.attendance_info.push({
                        "agent_id": attendance_datail[i].agent_id,
                        "agent_name": attendance_datail[i].full_name,
                        "is_present": attendance_datail[i].is_present,
                        "is_video_on": attendance_datail[i].is_video_on,
                        "branch_name": attendance_datail[i].branch_name
                    })

                }
            } else {
                let [agentList] = await agentRepospitory.getDetail({ training_id: request.training_id });
                for (let j = 0; j < agentList.length; j++) {
                    responseBody.attendance_info.push({
                        "agent_id": agentList[j].id,
                        "agent_name": agentList[j].full_name,
                        "is_present": 0,
                        "is_video_on": 0,
                        "branch_name": agentList[j].branch_name
                    })
                }
            }

            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: responseBody });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})(); 
