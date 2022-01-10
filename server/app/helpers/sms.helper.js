'use strict';
const HTTPRequest = require('request');
const method = "POST";

(smsHelper => {
  smsHelper.sendSMS = async (data) => {
    return new Promise((resolve, reject) => {
      try {
        const { SMS_SERVICE_URL, API_TOKEN } = process.env;
        data.token = API_TOKEN;
        var options = {
          url: `${SMS_SERVICE_URL}`,
          method,
          headers: {
            'Content-Type': 'application/json',
            // 'OrganisationCode': ORGANISATION_CODE,
            // 'Authorization': 'Basic ' + new Buffer.from(SMS_USERNAME + ":" + SMS_PASSWORD).toString(
            //   "base64"
            // )
          },
          body: JSON.stringify(data)
        };
        HTTPRequest(options, async (error, response, body) => {
          console.log('<<<<<<<<<<<<<<<<<<<', response.statusCode, response.statusMessage)
          return resolve({ success: (!error && response.statusCode == 200), message: JSON.parse(body)['responseDescription'] });
        });
      } catch (error) {
        throw error
      }
    })
  };

  smsHelper.isPhoneNumber = (cellValues) => {
    return cellValues && cellValues.v && cellValues.t == "n" && !isNaN(cellValues.w) && [10, 13, 14].includes(cellValues.w.length);
  }

  smsHelper.isDate = (cellValues) => {
    return cellValues && cellValues.w.split("/").length == 3;
  }

  smsHelper.isTime = (cellValues) => {
    return cellValues && cellValues.w.split(":").length > 2;
  }

  smsHelper.isMessage = (message, cellValues) => {
    return cellValues && !message && cellValues.t == "s" && cellValues.w == cellValues.v;
  }

  smsHelper.isFooter = (message, cellValues) => {
    return cellValues && message && cellValues.t == "s" && cellValues.w == cellValues.v && message != cellValues.v && message.length >= cellValues.w.length;
  }

  smsHelper.isSkip = (skipParams, cellValues) => {
    return skipParams.includes(cellValues.v);
  }

  smsHelper.isSendNow = (sendParams, cellValues) => {
    return sendParams.includes(cellValues.v);
  }

  smsHelper.allXLSXfieldsPresent = (req) => {
    return req.hasOwnProperty("date") && req.hasOwnProperty("message") && req.hasOwnProperty("phone_number") && req.hasOwnProperty("send_now");
  }

  smsHelper.isBannerUrl = (cellValues) => {
    if (!isNaN(cellValues.v)) return false;
    let splitValues = cellValues.v.split('.');
    return imageFormats.includes(splitValues[splitValues.length - 1]);
  }


})(module.exports);
