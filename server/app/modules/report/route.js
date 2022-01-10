'use strict';

(() => {
  const express = require('express');
  const trainingServiceRouter = express.Router();
  const trainingController = require('./controller/report.controller');

  trainingServiceRouter.get('/training-participant-summary', trainingController.getTrainingParicipantsSummary);
  trainingServiceRouter.get('/training-participant', trainingController.getTrainingParicipants);
  trainingServiceRouter.get('/agent-report-branch', trainingController.branchWiseAgentReport);
  trainingServiceRouter.get('/training-participant/branch-wise', trainingController.summaryReportBranchWise);
  trainingServiceRouter.get('/training-participant/region-wise', trainingController.summaryReportRegionWise);
  trainingServiceRouter.get('/attendance/download', trainingController.downloadAttendance);


  // trainingServiceRouter.delete('/:uuid', userController.getAdminLists);
  module.exports = trainingServiceRouter;
})();
