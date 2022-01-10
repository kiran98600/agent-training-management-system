
'use-strict';
(reportHelper => {
    const uuidv4 = require("uuid/v4");
    reportHelper.getReportData = (agentData, attendanceDetails) => {
        let header1 = "sr no.,name,occupation,branch name,contact number,education qualification,signature,signature"
        let header2 = ",,,,,,day-1,day-2"
        let data = "1,kiran gurung,soft developer,abc,9860089422,bsccsit,P,P"
        return [header1, header2, data]
    };

})(module.exports);