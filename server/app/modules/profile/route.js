'use strict';

(() => {
  const express = require('express');
  const profileRoute = express.Router();
  const profileController = require('./controller/profile.controller');
  profileRoute.get('', profileController.getProfileLists);
  module.exports = profileRoute;
})();
