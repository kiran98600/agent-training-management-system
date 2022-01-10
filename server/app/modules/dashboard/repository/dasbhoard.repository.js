((dashboardRepository) => {
    const { dbHelper } = require('../../../helpers')
    dashboardRepository.getUsers = async () => {
        try {
            let query = `select uuid   
                                ,id
                                ,full_name
                                ,email
                                ,admin_profile_id as admin_profile
                                ,user_type
                                ,status
                        from app_users`
            return dbHelper.query(
                query,
                []
            );
        } catch (error) {
            throw error
        }
    }

    dashboardRepository.getData = async (condition) => {
        try {
            let count_query = `select count(*) `
            let list_query = ` select reg.branch_region_name , COUNT(ag.id) `
            let base_query = ` FROM branch_regions as reg
                               left join trainings as tr on tr.training_region = reg.id
                               left join agents as ag on ag.training_id = tr.id
                               where date(tr.training_date_to) ${condition} current_date()
                               group by tr.training_region                         
                                       `
            count_query += base_query
            list_query += base_query
            let [list_result] = await dbHelper.query(
                list_query,
                []
            );
            let [count_result] = await dbHelper.query(
                count_query,
                []
            );
            return {
                list_result,
                count_result
            }
        } catch (error) {
            throw error
        }
    }

    dashboardRepository.getDashboardData = async () => {
        try {
            let data = {
                "charts": [
                    {
                        "label": "Total Participants till date",
                        "totalValue": 600,
                        "list": [
                        ]
                    },
                    {
                        "label": "Total Participants present today",
                        "totalValue": 600,
                        "list": [
                        ]
                    },
                    {
                        "label": "Total ongoing training Participants",
                        "totalValue": 600,
                        "list": [
                        ]
                    }
                ],
                "totals": []
            }
            let [past, present, future] = await Promise.all([dashboardRepository.getData('<'), dashboardRepository.getData('>'), dashboardRepository.getData('=')])
            for (let i = 0; i < present.list_result.length; i++) {
                data.charts[0].list.push({
                    "name": present.list_result[i].branch_region_name,
                    "value": 34
                })
            }
            for (let i = 0; i < present.list_result.length; i++) {
                data.charts[1].list.push({
                    "name": present.list_result[i].branch_region_name,
                    "value": 34
                })
            }
            for (let i = 0; i < present.list_result.length; i++) {
                data.charts[2].list.push({
                    "name": present.list_result[i].branch_region_name,
                    "value": 34
                })
            }
            return data;
        } catch (error) {
            throw error
        }
    }

})(module.exports);