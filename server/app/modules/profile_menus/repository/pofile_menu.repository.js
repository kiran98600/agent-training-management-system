((profileMenuRepository) => {
    const { dbHelper } = require('../../../helpers')
    const sqlString = require('sqlstring')
    profileMenuRepository.create = async (request) => {
        try {
            let query = `INSERT INTO profile_menus
            (
              branch_id,
              branch_desc

            ) VALUES `;
            for (let i = 0; i < request.length; i++) {
                query += `(   
            ${sqlString.escape(uuid())},
            ${sqlString.escape(request[i].branchId)},
            )${i <= request.length - 2 ? ', ' : ''}`;
            }

            return dbHelper.query(
                query
            );
        } catch (error) {
            throw error
        }
    }

})(module.exports);