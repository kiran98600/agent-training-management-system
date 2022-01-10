(() => {
    module.exports = {
        create: require('../methods/create.js'),
        getList: require('../methods/get_list.js'),
        getDetail: require('../methods/get_detail.js'),
        modify: require('../methods/modify.js'),
        delete: require('../methods/create.js'),
        getPrivileges: require('../methods/get_privileges')
    }
})();
