const Session = class Session{
  constructor() {
    this.sessionTable = new Map();
  }

  addSession(expireTime, userId) {
    const sessionId = this.createSessionId();
    this.sessionTable.set(sessionId, { expireTime: expireTime, userId: userId });
    return sessionId;
  }

  deleteSession (sessionId) {
    return this.sessionTable.delete(sessionId);
  }

  getSession(sessionId) {
    return this.sessionTable.get(sessionId);
  }

  createSessionId() {
    const possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    const sessionIdlength = 20;
    let sessionId = '';

    for (let i = 0; i < sessionIdlength; i++) {
      sessionId += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return sessionId;
  }

  showSessionTable() {
    console.log('sessionTable : ',this.sessionTable);
    return;
  }
};

module.exports = Session;