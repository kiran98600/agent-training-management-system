(() => {
    module.exports = {
        assign: require('../methods/assign.js'),
        getList: require('../methods/get_list.js'),
        getDetail: require('../methods/get_detail.js'),
        modifyAdmin: require('../methods/modify_user.js'),
        downloadCertificate: require('../methods/download_certificate.js'),
        // deleteAdmin: require('../methods/create.js'),
    }
})();
