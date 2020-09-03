const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { isLogin: !!req.session.getSession(req.cookies.SID) });
});

module.exports = router;
