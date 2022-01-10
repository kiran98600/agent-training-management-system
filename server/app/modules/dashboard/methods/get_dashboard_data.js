(() => {
    module.exports = async (req, res, next) => {
        const { utilityHelper } = require('../../../helpers')
        const profileRepository = require('../../profiles/repository/pofile.repository');
        const userRepository = require('../../user/repository/user.repository')
        const branchRepository = require('../../branches/repository/branches.repository')
        const dashboardRepository = require('../repository/dasbhoard.repository')
        try {
            let dropDowns = {};
            let [menuData] = await profileRepository.getProfileMenus(req.body.meta);
            const menu_name = [...new Set(menuData.map(item => item.parent_menu_name))];
            let user_privilege = []
            for (let i = 0; i < menu_name.length; i++) {
                let menuDetail = {
                    privilege_name: menu_name[i],
                    sub_menu: []
                }
                let sub_menu = menuData.filter(subMenu => subMenu.parent_menu_name == menu_name[i] && !subMenu.is_action);
                for (let j = 0; j < sub_menu.length; j++) {
                    let subMenuDetail = {
                        privilege_name: sub_menu[j].privilege_name,
                        action_list: []
                    }
                    let action_list = menuData.filter(action => action.sub_menu_name == sub_menu[j].privilege_name);
                    for (let k = 0; k < action_list.length; k++) {
                        let actionListObj = {
                            privilege_name: action_list[k].privilege_name
                        }
                        subMenuDetail.action_list.push(actionListObj)
                    }
                    menuDetail.sub_menu.push(subMenuDetail)
                }
                user_privilege.push(menuDetail);
            }

            const [profileData] = await userRepository.getUserDetail({ id: req.body.meta.user_id });
            const [ddBranches] = await branchRepository.getBranchDropDownList({});
            const [ddProfile] = await profileRepository.getProfileDropDownList({});
            // const [ddUserType] = []
            //  const dashboard = await dashboardRepository.getDashboardData({});
            dropDowns.branches = ddBranches;
            dropDowns.profiles = ddProfile;
            dropDowns.user_types = [{
                "user_type": 1,
                "user_type_description": "Admin"
            },
            {
                "user_type": 2,
                "user_type_description": "Executive"
            },
            {
                "user_type": 3,
                "user_type_description": "Branch"
            }];
            return res.json({
                status: 200,
                message: 'success',
                data: {
                    menus: user_privilege,
                    profile: profileData[0],
                    //   dashboards: dashboard.charts,
                    dashboard: {
                        "charts": [
                            {
                                "label": "Total Participants till date",
                                "totalValue": 600,
                                "list": [
                                    {
                                        "name": "Region 1",
                                        "value": 34
                                    },
                                    {
                                        "name": "Region 2",
                                        "value": 56
                                    },
                                    {
                                        "name": "Region 3",
                                        "value": 74
                                    },
                                    {
                                        "name": "Region 4",
                                        "value": 23
                                    },
                                    {
                                        "name": "Region 5",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 6",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 7",
                                        "value": 75
                                    },
                                    {
                                        "name": "Region 8",
                                        "value": 89
                                    },
                                    {
                                        "name": "Region 9",
                                        "value": 159
                                    }
                                ]
                            },
                            {
                                "label": "Total Participants present today",
                                "totalValue": 449,
                                "list": [
                                    {
                                        "name": "Region 1",
                                        "value": 43
                                    },
                                    {
                                        "name": "Region 2",
                                        "value": 32
                                    },
                                    {
                                        "name": "Region 3",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 4",
                                        "value": 65
                                    },
                                    {
                                        "name": "Region 5",
                                        "value": 76
                                    },
                                    {
                                        "name": "Region 6",
                                        "value": 23
                                    },
                                    {
                                        "name": "Region 7",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 8",
                                        "value": 75
                                    },
                                    {
                                        "name": "Region 9",
                                        "value": 45
                                    }
                                ]
                            },
                            {
                                "label": "Total ongoing training Participants",
                                "totalValue": 700,
                                "list": [
                                    {
                                        "name": "Region 1",
                                        "value": 134
                                    },
                                    {
                                        "name": "Region 2",
                                        "value": 56
                                    },
                                    {
                                        "name": "Region 3",
                                        "value": 74
                                    },
                                    {
                                        "name": "Region 4",
                                        "value": 23
                                    },
                                    {
                                        "name": "Region 5",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 6",
                                        "value": 45
                                    },
                                    {
                                        "name": "Region 7",
                                        "value": 75
                                    },
                                    {
                                        "name": "Region 8",
                                        "value": 89
                                    },
                                    {
                                        "name": "Region 9",
                                        "value": 159
                                    }
                                ]
                            }
                        ],
                        "totals": [
                            {
                                "label": "Total Participant with Video On Today",
                                "value": 245
                            },
                            {
                                "label": "Total Certificate Generated",
                                "value": 3455
                            },
                            {
                                "label": "Total Training conducted till date",
                                "value": 100
                            }
                        ]
                    },
                    drop_downs: dropDowns
                }
            });

        } catch (err) {
            res.status(502)
                .json({
                    message: err.message
                });
        }
    }
})();
