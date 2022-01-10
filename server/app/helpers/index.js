(() => {
  module.exports = {
    dbHelper: require('./database.helper'),
    hashHelper: require('./hasher.helper'),
    jwtHelper: require('./jwt.helper'),
    utilityHelper: require('./utility.helper'),
    emailHelper: require('./email.helper'),
    messageHelper: require('./message.helper'),
    smsHelper: require('./sms.helper'),
    log: require('./log.helper')
  }
})();
