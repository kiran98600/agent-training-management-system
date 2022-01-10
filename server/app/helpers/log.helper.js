
'use-strict';
const mysql = require('mysql2/promise');
(log => {
    let logger = null;
    log.init = async () => {
        try {
            var options_default = {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                table: 'sys_logs_default'
            };
            if (!logger) {
                logger = new (winston.Logger)({
                    transports: [
                        new winston_mysql(options_default)
                    ]
                });
            }
            return logger;
        } catch (err) {
            throw err;
        }
    };

    log.info = (query, ...args) => {
        try {
            logger.info('first log', { message: msg });
        } catch (error) {
            throw error;
        }
    };

})(module.exports);