'use strict';

(() => {
  const express = require('express');
  const dashboardRoute = express.Router();
  const dashboardController = require('./controller/dasbhoard.controller');
  dashboardRoute.get('', dashboardController.getDashboardData);
  module.exports = dashboardRoute;
})();
