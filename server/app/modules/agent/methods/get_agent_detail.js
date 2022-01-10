(() => {
    const agentRepository = require('../repository/agent.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            let [agentDetail] = await agentRepository.getDetail(request);
             agentDetail[0].image_base_url = process.env.IMAGE_BASE_URL;
            return res.status(httpStatus.OK).json({ status: httpStatus.NOT_FOUND, message: 'agent not found', data: agentDetail[0] });
        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
