(() => {
    module.exports = {
        createUser: require('../methods/create_user.js'),
        getUserList: require('../methods/get_user_list.js'),
        getUserDetail: require('../methods/get_user_detail.js'),
        modifyAdmin: require('../methods/modify_user.js'),
        deleteAdmin: require('../methods/create_user.js'),
        changePassword: require('../methods/password_change.js'),
    }
})();
