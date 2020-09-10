const fs = require('fs');

const filePath = `${__dirname}/../mocks/rooms.json`;

const searchRooms = (place, personnel) => {
  const rooms = fs.readFileSync(filePath, 'utf8', (err) => {
    if (err) { throw err; }
  });

  return JSON.parse(rooms).filter(room => {
    const maxPersonnel = room.description1.split(' · ')[0].match(/\d/g)[0];
    if (Number(personnel) <= Number(maxPersonnel) && room.place === place) {
      return room;
    }
  });
};

module.exports = { searchRooms };