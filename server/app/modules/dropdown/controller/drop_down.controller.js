(() => {
    module.exports = {
        province: require('../methods/get_province_dd.js'),
        district: require('../methods/get_district_dd'),
        region: require('../methods/get_region_dd.js'),
        branch: require('../methods/get_branch_dd.js'),
        training: require('../methods/get_training_dd.js'),
        agent: require('../methods/get_agent_dd.js'),
        attendanceDate: require('../methods/attendance.js')
    }
})();
