const SMTPConnection = require("nodemailer/lib/smtp-connection");
const MailComposer = require("nodemailer/lib/mail-composer");

(smtpHelper => {

  let _connection;

  smtpHelper.getConnection = () => {
    return _connection;
  }

  smtpHelper.setConnection = async () => {
    const { env: { SMTP_PORT, SMTP_HOST, SERVICE_NAME, SMTP_CONNECTION_TIMEOUT, SMTP_USERNAME, SMTP_PASSWORD } } = process;
    try {
      const options = {
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        // connectionTimeout: SMTP_CONNECTION_TIMEOUT
      };
      _connection = await new SMTPConnection(options);
      _connection.connect(async () => {
        console.log(`Connected to SMTP server at ${new Date()}`);
        const credentials = {
          user: SMTP_USERNAME,
          pass: SMTP_PASSWORD
        };
        _connection.login(credentials, (error, response) => {
          if (error) {
            console.log(`_connection.login >>>>>> error `, error);
          } else {
            console.log(`Logged in to SMTP server at ${new Date()}`);
          }
        });
      });

      _connection.error((err) => {
        console.log('>>>>>>>>>>>>> _connection.error ', err)
      })
      _connection.end(() => {
        console.log(`Connection ended with SMTP server at ${new Date()}`);
      })

      return true;
    } catch (error) {
      log.error({}, error, SERVICE_NAME, __filename);
      return error;
    }
  }

  smtpHelper.sendMail = (mailOptions, request, callback) => {
    const { env: { SMTP_USERNAME } } = process;
    try {
      return new Promise((resolve, reject) => {
        const envelope = {
          from: SMTP_USERNAME,
          to: mailOptions.to
        }
        const mail = new MailComposer(mailOptions);

        mail.compile().build((err, message) => {
          if (err) {
            return resolve(callback(err, info));
          }
          _connection.send(envelope, message, (err, info) => {
            (err) ?
              log.error(request, err, process.env.SERVICE_NAME, __filename) :
              log.info(request, { envelope, mailOptions, message, info }, process.env.SERVICE_NAME, __filename);
            return resolve(callback(err, info));
          });
        });
      });
    } catch (error) {
      log.error(request, error, process.env.SERVICE_NAME, __filename);
      callback(error, {});
    }
  };
})(module.exports);
