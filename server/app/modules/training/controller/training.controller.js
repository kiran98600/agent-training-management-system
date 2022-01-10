(() => {
    module.exports = {
        createTraining: require('../methods/create_training.js'),
        getTrainingList: require('../methods/get_training_list.js'),
        getTrainingDetail: require('../methods/get_training_detail.js'),
        modifyTraining: require('../methods/modify_training.js'),
        getDropDown: require('../methods/get_dropdown'),
        getAttendance: require('../methods/get_attandance'),
        attendance: require('../methods/attendance'),
    }
})();
