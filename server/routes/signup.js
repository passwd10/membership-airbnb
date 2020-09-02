const express = require('express');
const router = express.Router();

const { validate, validatePassword, signUpUser } = require('../services/signupService');

router.post('/', (req, res) => {
  const { userEmail, userName, userPassword, userPasswordVerification } = req.body;

  const isValidateEmail = validate('email')(userEmail);
  const isValidatePassword = validatePassword(userPassword, userPasswordVerification);

  if (!isValidateEmail) {
    return res.status(404).send('존재하는 아이디입니다');
  }
  if (!isValidatePassword) {
    return res.status(404).send('비밀번호가 일치하지 않습니다.');
  }

  signUpUser(userEmail, userName, userPassword);
  return res.status(200).render('index', { isLogin: false });
});


module.exports = router;

