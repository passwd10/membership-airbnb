const express = require('express');
const router = express.Router();

const { searchRooms } = require('../services/searchService');

router.get('/', (req, res) => {
  const { place, personnel } = req.query;
  const rooms = searchRooms(place, personnel);

  return res.render('pages/searchResult',
    {
      isLogin: !!req.session.getSession(req.cookies.SID),
      rooms: rooms,
      place: place,
      personnel: personnel,
    });
});

module.exports = router;
