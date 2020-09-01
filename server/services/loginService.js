const fs = require('fs');

const Session = require('../utils/session');

const session = new Session();

const validateUser = (userId, userPassword) => {
  const filePath = `${__dirname}/../mocks/registeredUsers.json`;
  const users = fs.readFileSync(filePath, 'utf8', (err) => {
    if (err) throw err;
  });

  const user = JSON.parse(users).Users.find(v => v.id === userId && v.password === userPassword);
  console.log('user', user);
  return !!user;
};

const addSession = (userId) => {
  try {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
  
    return session.addSession(date.toDateString(), userId);
  } catch {
    return console.log('Session을 추가할 수 없습니다');
  }
};

const deleteSession = (sessionId) => {
  try {
    return session.deleteSession(sessionId);
  } catch {
    return console.log('Sessoin을 삭제할 수 없습니다');
  }
};

module.exports = { validateUser, addSession, deleteSession };
