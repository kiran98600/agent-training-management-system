'use strict';

(() => {
  const express = require('express');
  const trainingServiceRouter = express.Router();
  const trainingController = require('./controller/training.controller');

  trainingServiceRouter.get('/attendance', trainingController.getAttendance);
  trainingServiceRouter.post('/attendance', trainingController.attendance);

  trainingServiceRouter.get('', trainingController.getTrainingList);
  trainingServiceRouter.get('/drop-down', trainingController.getDropDown);
  trainingServiceRouter.post('', trainingController.createTraining);
  trainingServiceRouter.get('/:uuid', trainingController.getTrainingDetail);
  trainingServiceRouter.put('/:uuid', trainingController.modifyTraining);
  // trainingServiceRouter.delete('/:uuid', trainingController.getAdminLists);
  module.exports = trainingServiceRouter;
})();
