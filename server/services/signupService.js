const fs = require('fs');

const registeredUsers = require('../mocks/registeredUsers.json');
const encrypt = require('../utils/encrypt');

const validate = (category) => (userInfo) => {
  if(registeredUsers.Users.find(v => v[category] === userInfo)) {
    return false;
  }
  return true;
};

const validatePassword = (userPassword, userPasswordVerification) => {
  return userPassword === userPasswordVerification;
};

const signUpUser = (userEmail, userName, userPassword) => {
  const filePath = `${__dirname}/../mocks/registeredUsers.json`;
  const userInfo = {
    "email": userEmail,
    "name": userName,
    "password": encrypt(userPassword)
  };

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    users.Users.push(userInfo);
    const result = JSON.stringify(users);
    
    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) throw err;
    });
  });
};

module.exports = { validate, validatePassword, signUpUser };