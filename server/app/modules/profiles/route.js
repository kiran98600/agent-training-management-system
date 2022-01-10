'use strict';

(() => {
  const express = require('express');
  const profileRouter = express.Router();
  const profileController = require('./controller/profile.controller');
  profileRouter.get('/privileges', profileController.getPrivileges);
  profileRouter.post('', profileController.create);
  profileRouter.get('', profileController.getList);
  profileRouter.get('/:uuid', profileController.getDetail);
  profileRouter.put('/:uuid', profileController.modify);
  // profileRouter.delete('/:uuid', profileController.getAdminLists);
  module.exports = profileRouter;
})();
