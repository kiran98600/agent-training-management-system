'use strict';

(() => {
  const multer = require('multer');
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/agent');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

  const express = require('express');
  const agentRouter = express.Router();;
  const agentController = require('./controller/agent.controller');

  agentRouter.get('/', agentController.getAgentList);
  agentRouter.get('/dropdown', agentController.getDropDown);
  agentRouter.post('/', upload.fields([{ name: 'pp_photo', maxCount: 1 }, { name: 'citizen', maxCount: 1 }, { name: 'academic_marksheet', maxCount: 1 }, { name: 'character_marksheet', maxCount: 1 }]), agentController.createAgent);
  agentRouter.get('/:uuid', agentController.getAgentDetail);
  agentRouter.post('/update', upload.fields([{ name: 'pp_photo', maxCount: 1 }, { name: 'citizen', maxCount: 1 }, { name: 'academic_marksheet', maxCount: 1 }, { name: 'character_marksheet', maxCount: 1 }]), agentController.modifyAgent);
  module.exports = agentRouter;
})();
