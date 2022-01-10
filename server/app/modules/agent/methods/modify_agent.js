(() => {
    const agentRepository = require('../repository/agent.repository');
    const httpStatus = require('http-status')
    const { agentHelper, validationHelper } = require('../helper');


    module.exports = async (req, res, next) => {
        try {
            await agentHelper.setMetaData(req, res)
            let request = req.body
            for (const property in req.files) {
                request[property] = req.files[property][0].filename
            }

            const validationResponse = await validationHelper.modifyRequest(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).json({ status: httpStatus.BAD_REQUEST, message: validationResponse.message });
            }
            let updateObject = agentHelper.getUpdateObject(request)
            await agentRepository.update(updateObject, updateObject.uuid);
            return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: validationResponse.message });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
