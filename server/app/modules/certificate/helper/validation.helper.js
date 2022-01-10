
'use-strict';
(validationHelper => {
    const { utilityHelper } = require('../../../helpers')
    const userRepository = require('../repository/certificate.repository')
    validationHelper.createRequest = async (request) => {
        try {
            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };

    validationHelper.updateRequest = async (request) => {
        try {
            return {
                status: true,
                message: 'success'
            }

        } catch (error) {
            throw error;
        }
    };

})(module.exports);