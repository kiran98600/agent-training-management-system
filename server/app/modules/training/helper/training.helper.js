
'use-strict';
(trainingHelper => {
    const uuidv4 = require("uuid/v4");
    trainingHelper.getInserObject = (request) => {
        try {
            request.id = new Date().getTime();
            let insertObj = {
                "training_details": {
                    "uuid": uuidv4(),
                    "id": request.id,
                    "training_id": request.training_id,
                    "training_name": request.training_name,
                    "training_date_to": request.training_date_to,
                    "training_date_from": request.training_date_from,
                    "training_time": request.training_time,
                    "training_region": request.region_id,
                    "training_branch": request.branch_id ? request.branch_id : null,
                    "is_virtual_training": request.is_virtual_training,
                    "training_link": request.training_link,
                    "venue": request.venue,
                    "max_participant_allowed": request.max_participant_allowed,
                    "status": 1,
                    "is_blocked": 0,
                    "is_deleted": 0,
                    "created_by": request.meta.user_id ? request.meta.user_id : null,
                    "created_date": new Date().getTime(),
                },
                "trainer_info": []
            }
            for (let i = 0; i < request.trainer_info.length; i++) {
                let trainer_info_obj = {
                    "content": request.trainer_info[i].content,
                    "training_id": request.id,
                    "trainer_name": request.trainer_info[i].trainer_name,
                    "trainer_phone_number": request.trainer_info[i].trainer_phone_number,
                    "trainer_email": request.trainer_info[i].trainer_email,
                    "training_date": request.trainer_info[i].training_date ? request.trainer_info[i].training_date : null,
                    "training_time": request.trainer_info[i].training_time ? request.trainer_info[i].training_time : null,
                }
                insertObj.trainer_info.push(trainer_info_obj)
            }
            return insertObj;
        } catch (error) {
            throw error;
        }
    };

    trainingHelper.getUpdateObject = (request) => {
        try {
            let updateObject = {
                "training_details": {
                    "uuid": uuidv4(),
                    "training_id": request.training_id,
                    "training_name": request.training_name,
                    "training_date_to": request.training_date_to,
                    "training_date_from": request.training_date_from,
                    "training_time": request.training_time,
                    "training_region": request.region_id,
                    "training_branch": request.branch_id ? request.branch_id : null,
                    "is_virtual_training": request.is_virtual_training,
                    "training_link": request.training_link,
                    "venue": request.venue,
                    "max_participant_allowed": request.max_participant_allowed,
                    "status": 1,
                    "is_blocked": 0,
                    "is_deleted": 0,
                    "created_by": request.meta.user_id ? request.meta.user_id : null,
                    "created_date": new Date().getTime(),
                },
                "trainer_info": []
            }
            for (let i = 0; i < request.trainer_info.length; i++) {
                let trainer_info_obj = {
                    "content": request.trainer_info[i].content,
                    "training_id": request.id,
                    "trainer_name": request.trainer_info[i].trainer_name,
                    "trainer_phone_number": request.trainer_info[i].trainer_phone_number,
                    "trainer_email": request.trainer_info[i].trainer_email,
                    "training_date": request.trainer_info[i].training_date ? request.trainer_info[i].training_date : null,
                    "training_time": request.trainer_info[i].training_time ? request.trainer_info[i].training_time : null
                }
                updateObject.trainer_info.push(trainer_info_obj)
            }
            return updateObject;
        } catch (error) {
            throw error;
        }
    };


    trainingHelper.appendLeadingZeroes = (n) => {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }


    trainingHelper.getDateArrayBetween = (start, end) => {
        for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };

    trainingHelper.getAttendenceDate = (fromDate, toDate) => {
        try {
            var daylist = trainingHelper.getDateArrayBetween(new Date(fromDate), new Date(toDate));
            return daylist;
        } catch (error) {
            throw error;
        }
    };

    trainingHelper.replaceAll = (string, search, replace) => {
        try {
            return string.split(search).join(replace);
        } catch (error) {
            throw error;
        }
    };

    trainingHelper.getAttendanceObject = (request) => {
        try {
            let insertArrayObj = [];
            for (let i = 0; i < request.attendance_info.length; i++) {
                let insertObj = {
                    "agent_id": request.attendance_info[i].agent_id,
                    "training_id": request.training_id,
                    "training_date": request.date,
                    "is_present": request.attendance_info[i].is_present,
                    "is_video_on": request.attendance_info[i].is_video_on,
                }
                insertArrayObj.push(insertObj);
            }
            return insertArrayObj;
        } catch (error) {
            throw error;
        }
    };




})(module.exports);