'use strict';

(() => {
  const express = require('express');
  const adminServiceRouter = express.Router();
  const dropDownController = require('./controller/drop_down.controller');

  adminServiceRouter.get('/province', dropDownController.province);
  adminServiceRouter.get('/district/:id', dropDownController.district);

  adminServiceRouter.get('/region', dropDownController.region);
  adminServiceRouter.get('/branch/:id', dropDownController.branch);

  adminServiceRouter.get('/training', dropDownController.training);
  adminServiceRouter.get('/agent', dropDownController.agent);


  adminServiceRouter.get('/attendance-date', dropDownController.attendanceDate);

  module.exports = adminServiceRouter;
})();
