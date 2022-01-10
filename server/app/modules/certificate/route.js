'use strict';

(() => {
  const express = require('express');
  const adminServiceRouter = express.Router();
  const participantsController = require('./controller/certificate.controller');

  adminServiceRouter.get('/', participantsController.getList);
  adminServiceRouter.post('/assign', participantsController.assign);
  adminServiceRouter.get('/:uuid', participantsController.getDetail);
  adminServiceRouter.get('/download/cer', participantsController.downloadCertificate);
  //adminServiceRouter.get('/generate-certificate', participantsController.getGe);
  module.exports = adminServiceRouter;
})();
