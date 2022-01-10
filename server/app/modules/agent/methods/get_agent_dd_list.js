(() => {
    const agentRepository = require('../repository/agent.repository');
    const httpStatus = require('http-status')
    const { userHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = req.body
            let [agentList] = await agentRepository.ddlist(request);
             return res.status(httpStatus.OK).json({ status: httpStatus.OK, message: 'success', data: agentList });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: httpStatus.INTERNAL_SERVER_ERROR, message: err.message });
        }
    }
})();
