const crypto = require('crypto');

const salt = 'hello';

const encrypt = (password) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha512', (err) => {
    if (err) throw err;
  }).toString('hex');
};

module.exports = encrypt;