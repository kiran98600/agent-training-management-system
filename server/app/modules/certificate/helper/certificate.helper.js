
'use-strict';
(certificateHelper => {
    const uuidv4 = require("uuid/v4");
    certificateHelper.getInserObject = (request) => {
        try {
            let returnObject = {
                training_id: request.training_id,
                insertObj: []
            }
            for (let i = 0; i < request.agentCertificate.length; i++) {
                returnObject.insertObj.push({
                    training_id: request.training_id,
                    id: request.agentCertificate[i].agent_id,
                    is_certificate_ready: request.agentCertificate[i].is_certificate_ready
                })
            }
            return returnObject;
        } catch (error) {
            throw error;
        }
    };

    certificateHelper.getUpdateObject = (request) => {
        try {
            let returnObject = []
            for (let i = 0; i < request.agents.length; i++) {
                returnObject.push({
                    training_id: request.training_id,
                    agent_id: request.agents[i]
                })
            }
            return returnObject;
        } catch (error) {
            throw error;
        }
    };


    certificateHelper.generateCertificate = async () => {
        var fs = require('fs');
        var pdf = require('html-pdf');
        var path = require('path');
        var htmfileLocaltion = path.join(process.cwd(), '/uploads/certificate/certificate.html')
        var html = fs.readFileSync(htmfileLocaltion, 'utf8');
        return new Promise((resolve, reject) => {
            try {
                pdf.create(html).toBuffer(function (err, buffer) {
                    return resolve(buffer)
                });
            } catch (error) {
                return reject(error);
            }
        })
    };

})(module.exports);