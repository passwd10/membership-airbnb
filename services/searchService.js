const fs = require('fs');

const filePath = `${__dirname}/../mocks/rooms.json`;

const searchRooms = (place) => {
  const rooms = fs.readFileSync(filePath, 'utf8', (err) => {
    if (err) throw err;
  });

  return JSON.parse(rooms).filter(room => room.place === place);
};

module.exports = { searchRooms };