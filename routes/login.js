const express = require('express');
const router = express.Router();

const { validateUser, addSession, deleteSession } = require('../services/loginService');

router.post('/', (req, res) => {
  const { userEmail, userPassword } = req.body;

  return validateUser(userEmail, userPassword) ?
    res.cookie('SID', addSession(req.session, userEmail))
      .status(200)
      .render('index', { isLogin: true })
    : res.status(404).send('로그인 실패');
});

router.delete('/', (req, res) => {
  deleteSession(req.session, req.cookies.SID);

  return res.clearCookie('SID')
    .status(200)
    .render('index', { isLogin: false });
});

module.exports = router;
