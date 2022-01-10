'use strict';

(() => {
  const express = require('express');
  const smsRoute = express.Router();
  const notificationController = require('./controller/notification.controller');
  smsRoute.post('/training-participant', notificationController.notify);
  smsRoute.post('/training-trainer', notificationController.notifyTrainer);
  module.exports = smsRoute;
})();
