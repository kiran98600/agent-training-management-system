((dropDownRepository) => {
    const { dbHelper } = require('../../../helpers')
    const sqlstring = require('sqlstring')
    dropDownRepository.getProvinceDdList = async (request) => {
        try {
            let query = `select uuid , id , province_name from province `
            return dbHelper.query(
                query,
                [request]
            );
        } catch (error) {
            throw error
        }
    }

    dropDownRepository.getDistrictDdList = async (request) => {
        try {
            let query = `select ds.id , ds.district_name from district as ds 
                         inner join province as pr on pr.id = ds.province_id
                         where pr.id = ?`
            return dbHelper.query(
                query,
                [request.id]
            );
        } catch (error) {
            throw error
        }
    }

    dropDownRepository.getRegionDdList = async (request) => {
        try {
            try {
                let query = `select uuid , branch_region, branch_region_name 
                             from branch_regions where 1 = 1`
                request && request.meta && request.meta.user_type == 2 && (query += ` and branch_region =  ${request.meta.branch_region} `)
                request && request.meta && request.meta.user_type == 3 && (query += ` and branch_region =  ${request.meta.branch_region} `)
                return dbHelper.query(
                    query,
                    []
                );
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    }


    dropDownRepository.getBranchDdList = async (request) => {
        try {
            let query = `select br.uuid , br.branch as branch_id, br.branch_name , br.branch_region
                         from branches as br
                         inner join branch_regions as brg on brg.branch_region = br.branch_region
                         where brg.id = ${sqlstring.escape(request.id)}`
            request && request.meta && request.meta.user_type == 2 && (query += ` and brg.branch_region =  ${sqlstring.escape(request.meta.branch_region)} `)
            request && request.meta && request.meta.user_type == 3 && (query += ` and brg.branch_region = ${sqlstring.escape(request.meta.branch_region)} and br.branch = ${sqlstring.escape(request.meta.branch_id)} `)
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }


    dropDownRepository.traningDdList = async (request) => {
        try {
            try {
                let query = ''
                switch (request.meta.user_type) {
                    case 2:
                    case 3:
                        query = `select  tr.id   
                                        ,tr.training_name
                                from trainings as tr
                                left join branches as br on br.branch = tr.training_branch 
                                left join branch_regions as brgn on brgn.branch_region = br.branch_region
                                where tr.training_region = ${request.meta.branch_region} `
                        request && request.branch_region && (query += ` and tr.training_region =  ${sqlstring.escape(request.branch_region)} `)
                        request && request.region_id && (query += ` and tr.training_region =  ${sqlstring.escape(request.region_id)} `)
                        request && request.branch_id && (query += ` and (tr.training_branch =  ${sqlstring.escape(request.branch_id)} or tr.training_branch is null or tr.training_branch = 0 )`)
                        request && request.type && (request.type == 'filtered') && (query += ` and date(tr.training_date_to) >= CURDATE() `)

                        break;
                    default:
                        query = `select  tr.id   
                                        ,tr.training_name
                                from trainings as tr
                                left join branches as br on br.branch = tr.training_branch 
                                left join branch_regions as brgn on brgn.branch_region = br.branch_region
                                where 1  = 1
                             `
                        request && request.region_id && (query += ` and tr.training_region =  ${sqlstring.escape(request.region_id)} `)
                        request && request.branch_id && (query += ` and (tr.training_branch =  ${sqlstring.escape(request.branch_id)} or tr.training_branch is null or tr.training_branch = 0 )`)
                        break;
                }
                return dbHelper.query(
                    query,
                    []
                );
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    }


    dropDownRepository.agentDdList = async (request) => {
        try {
            try {
                let query = ''
                switch (request.meta.user_type) {
                    case 2:
                    case 3:
                        query = `select ag.id
                        ,ag.full_name
                        from agents as ag
                        inner join trainings as tr on ag.training_id = tr.id
                        where ag.is_certificate_ready = 1 
                        `
                        break;
                    default:
                        query =
                            `select ag.id
                            ,ag.full_name
                            from agents as ag
                            inner join trainings as tr on ag.training_id = tr.id
                            where 1 = 1`
                }
                request && request.training_id && (query += ` and tr.id =  ${sqlstring.escape(request.training_id)} `)
                return dbHelper.query(
                    query,
                    []
                );
            } catch (error) {
                throw error
            }
        } catch (error) {
            throw error
        }
    }


})(module.exports);