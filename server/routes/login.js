const { validateUser, addSession, deleteSession } = require('../services/loginService');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', { title: '로그인' });
});

router.post('/', (req, res) => {
  const { userEmail, userPassword } = req.body;
  console.log('들어옴', userEmail)
  return validateUser(userEmail, userPassword) ?
  res.cookie('SID', addSession(req.session, userEmail))
    .status(200)
    .render('index', { isLogin: true })
  : res.status(404).send('로그인 실패');
});

router.delete('/', (req, res) => {
  deleteSession(req.session, req.cookies.SID);

  res.clearCookie('SID')
    .status(200)
    .render('index', { isLogin: false });
});

module.exports = router;
