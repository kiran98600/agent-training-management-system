((branchRepository) => {
    const { dbHelper } = require('../../../helpers')
    branchRepository.getBranchDropDownList = async (filter) => {
        try {
            let query = `select uuid , branch as branch_id, branch_name , branch_region
                         from branches`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

})(module.exports);