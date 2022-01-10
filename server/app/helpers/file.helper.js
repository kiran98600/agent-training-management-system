
'use strict';
((fileHelper) => {
    const multer = require("multer");
    const path = require("path");
    let upload = null;
    fileHelper.init = async () => {
        try {
            upload = multer({
                dest: path.join(process.cwd(), 'server/public/uploads'),
            });
            return upload
        } catch (error) {
            throw error
        }
    };

    fileHelper.upload = async (file) => {
        try {
            return upload.single(file);
        } catch (error) {
            throw error
        }
    }

})(module.exports);
