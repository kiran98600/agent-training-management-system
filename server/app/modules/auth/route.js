'use strict';

(() => {
  const express = require('express');
  const dashboardRoute = express.Router();
  const dashboardController = require('./controller/auth.controller');
  dashboardRoute.post('/login', dashboardController.userLogin);
  module.exports = dashboardRoute;
})();
