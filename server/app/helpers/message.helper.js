(messageHelper => {
    var nodemailer = require('nodemailer');
    messageHelper.notify = async (notificationTypeList, request) => {
        try {
            for (let i = 0; i < notificationTypeList.length; i++) {
                switch (notificationTypeList[i]) {
                    // sms
                    case 'sms':
                        let smsBody = {
                            to: request.phone_number,
                            from: 'RelianceIns',
                            text: request.message
                        };
                        smsBody.to ? await messageHelper.sendSms(smsBody) : true;
                        break;
                    // email
                    case 'email':
                        let mailOptions = {
                            to: request.email,
                            subject: request.title,
                            text: request.message
                        };
                        mailOptions.to ? await messageHelper.sendEmail(mailOptions) : true;
                        break;
                }

            }
            return true;
        } catch (error) {
            throw error;
        }
    }

    messageHelper.sendEmail = async (mailOptions) => {
        const { emailHelper } = require('../helpers');
        return new Promise((resolve, reject) => {
            try {
                emailHelper.sendMail(mailOptions, async (error, info) => {
                    if (error) {
                        return reject(error);
                    } else {
                        return resolve(true);
                    }
                });
            } catch (error) {
                console.log('email error  ---------------- ', error);
                return reject(error);
            }
        });
    }

    messageHelper.sendSms = async (smsBody) => {
        const { smsHelper } = require('../helpers');
        return new Promise(async (resolve, reject) => {
            try {
                await smsHelper.sendSMS(smsBody)
                console.log('sucess ---------------- ');
                return resolve(true);
            } catch (error) {
                console.log('email error  ---------------- ', error);
                return reject(error);
            }
        });
    }


})(module.exports);
