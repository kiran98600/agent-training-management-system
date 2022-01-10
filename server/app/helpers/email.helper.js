var nodemailer = require('nodemailer');

(mailHelper => {

  mailHelper.createTransport = () => {
    const {
      SMTP_USERNAME,
      SMTP_PASSWORD,
      SMTP_HOST,
      SMTP_PORT,
    } = process.env;
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      //service: 'gmail',
      secure: false, // upgrade later with STARTTLS
      auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD
      }
    });
  }
  mailHelper.sendMail = (mailOptions, callback) => {
    try {
      mailOptions.from = process.env.MAIL_AUTH_USER;
      const connection = mailHelper.createTransport();
      connection.sendMail(mailOptions, function (error, info) {
        console.log('<<< error, info<<<<<<<<<<<<<<<', { error, info })
        return callback(error, info);
      });
    } catch (error) {
      console.log('<<< error<<<<<<<<<<<<<<<', { error })
      callback(error, {});
    }
  };
})(module.exports);
