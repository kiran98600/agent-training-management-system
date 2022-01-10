(() => {
    module.exports = {
        getTrainingParicipantsSummary: require('../methods/get_training_participants_summary_report.js'),
        getTrainingParicipants: require('../methods/get_training_participants.js'),
        branchWiseAgentReport: require('../methods/branch_wise_agent_report.js'),
        summaryReportBranchWise: require('../methods/branch_wise_summary_report'),
        summaryReportRegionWise: require('../methods/region_wise_summar_report.js'),
        downloadAttendance: require('../methods/download_attendance_report.js')
    }
})();
