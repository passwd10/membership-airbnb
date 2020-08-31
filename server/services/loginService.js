const registeredUsers = require('../mocks/registeredUsers.json');

const Session = require('../utils/session');

const session = new Session();

const validateUser = (userId, userPassword) => {
  const user = registeredUsers.Users.find(v => v.id === userId && v.password === userPassword);

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
