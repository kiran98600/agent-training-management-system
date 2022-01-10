'use strict';

const express = require('express');
const router = express.Router();

(() => {

    router.use(express.json());
    router.use(express.urlencoded({ extended: false }))

    const authController = require('../modules/auth/route.js');
    router.use('/auth', authController);

    const authMiddleWare = require('../modules/auth/methods');
    router.use((req, res, next) => {
        return authMiddleWare.authorize(req, res, next);
    });

    const userController = require('../modules/user/route.js');
    router.use('/user', userController);

    const dashboardController = require('../modules/dashboard/route.js');
    router.use('/dashboard', dashboardController);

    const profileController = require('../modules/profiles/route.js');
    router.use('/profile', profileController);

    const agentController = require('../modules/agent/route.js');
    router.use('/agent', agentController);

    const trainingController = require('../modules/training/route.js');
    router.use('/training', trainingController);

    const dropDownController = require('../modules/dropdown/route.js');
    router.use('/drop-down', dropDownController);

    const participantsController = require('../modules/participants/route.js');
    router.use('/training-participant', participantsController);

    const certificateController = require('../modules/certificate/route.js');
    router.use('/training-certificate', certificateController);

    const reportController = require('../modules/report/route.js');
    router.use('/report', reportController);

    const notifyController = require('../modules/notification/route');
    router.use('/notify', notifyController);

    module.exports = router;
})();
