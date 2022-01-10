(() => {
    const profileRepository = require('../repository/pofile.repository');
    const httpStatus = require('http-status')
    const { profileHelper, validationHelper } = require('../helper');
    module.exports = async (req, res, next) => {
        try {
            let request = { ...req.params, ...req.body }
            // validation 
            const validationResponse = await validationHelper.modifyRequest(request);
            if (validationResponse.status == false) {
                return res.status(httpStatus.BAD_REQUEST).
                    json({
                        status: httpStatus.BAD_REQUEST,
                        message: validationResponse.message
                    });
            }
            // initiating user update object 
            let updateObj = profileHelper.getUpdateObject(request)
            // executing update operation  
            await profileRepository.update(updateObj);
            return res.status(httpStatus.OK)
                .json({
                    status: httpStatus.OK,
                    message: 'success'
                });

        } catch (err) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR)
                .json({
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                    message: err.message
                });
        }
    }
})();
