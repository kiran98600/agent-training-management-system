
'use strict';
((hashHelper) => {

  const crypto = require('crypto');
  const bcrypt = require('bcryptjs');
  const Promise = require('bluebird');

  hashHelper.computeHash = async (sourcePassword, salt) => {
    try {
      return bcrypt.hash(sourcePassword, salt)
    } catch (error) {
      throw error
    }
  };

  hashHelper.createSalt = () => {
    return bcrypt.genSalt(process.env.HASH_SALT_ROUNDS ? parseInt(process.env.HASH_SALT_ROUNDS) : 10);
  };

  hashHelper.comparePassword = (inputPwd, hash) => {
    return bcrypt.compare(inputPwd, hash)
  };

  hashHelper.generateRandomBytes = (length) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(length, (err, saltBuffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(saltBuffer.toString('hex').substring(0, length));
        }
      });
    });
  };
  hashHelper.generatePassword = () => {
    // Exclude Similar Characters:( e.g. i, l, 1, L, o, 0, O )
    // Exclude Ambiguous Characters:( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
    const numberChars = '123456789';
    const upperChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lowerChars = 'abcdefghikmnpqrstuvwxyz';
    const specialChar = '!@#$%*?';
    const allChars = numberChars + upperChars + lowerChars + specialChar;
    let randPasswordArray = Array(8);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = specialChar;
    randPasswordArray = randPasswordArray.fill(allChars, 4);
    return hashHelper.shuffleArray(randPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)] })).join('');
  }
  hashHelper.shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
})(module.exports);
