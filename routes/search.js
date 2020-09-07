const express = require('express');
const router = express.Router();

const { searchRooms } = require('../services/searchService');

router.get('/', (req, res) => {
  const { place } = req.query;

  const rooms = searchRooms(place);

  return res.render('searchResult', { result: rooms });
});

module.exports = router;
