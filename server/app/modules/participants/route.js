'use strict';

(() => {
  const express = require('express');
  const adminServiceRouter = express.Router();
  const participantsController = require('./controller/participant.controller');

  adminServiceRouter.post('/assign', participantsController.assign);
  adminServiceRouter.get('/', participantsController.getList);
  // adminServiceRouter.post('', participantsController.createUser);
  adminServiceRouter.get('/:uuid', participantsController.getDetail);
  adminServiceRouter.get('/download/:uuid', participantsController.downloadCertificate);
  // adminServiceRouter.put('/:uuid', participantsController.modifyAdmin);
  // adminServiceRouter.delete('/:uuid', userController.getAdminLists);
  module.exports = adminServiceRouter;
})();
