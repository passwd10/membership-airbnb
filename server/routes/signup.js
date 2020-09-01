const express = require('express');
const router = express.Router();

const { validate, validatePassword, signUpUser } = require('../services/signupService');

router.get('/', (req, res) => {
  res.render('signup', { title: '회원가입' });
});

router.post('/', (req, res) => {
  const { userId, userNickname, userPassword, userPasswordVerification } = req.body;

  const isValidateId = validate('id')(userId);
  const isValidateNickname = validate('nickname')(userNickname);
  const isValidatePassword = validatePassword(userPassword, userPasswordVerification);

  if (!isValidateId) {
    return res.status(404).send('존재하는 아이디입니다');
  }
  if (!isValidateNickname) {
    return res.status(404).send('존재하는 닉네임입니다.');
  }
  if (!isValidatePassword) {
    return res.status(404).send('비밀번호가 일치하지 않습니다.');
  }

  signUpUser(userId, userNickname, userPassword);
  return res.status(200).render('index', { isLogin: false });
});


module.exports = router;

