'use strict';

(() => {
  const express = require('express');
  const adminServiceRouter = express.Router();
  const userController = require('./controller/user.controller');

  adminServiceRouter.get('', userController.getUserList);
  adminServiceRouter.post('', userController.createUser);
  adminServiceRouter.post('/change-password', userController.changePassword);
  adminServiceRouter.get('/:uuid', userController.getUserDetail);
  adminServiceRouter.put('/:uuid', userController.modifyAdmin);
  // adminServiceRouter.delete('/:uuid', userController.getAdminLists);
  module.exports = adminServiceRouter;
})();
