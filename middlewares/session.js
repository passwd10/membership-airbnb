class Session {
  constructor() {
    this.sessionStorage = new Map();
  }

  addSession(userId) {
    const date = new Date();
    const sessionId = this.createSessionId();
    
    date.setMonth(date.getMonth() + 1);
    this.sessionStorage.set(sessionId, { expireTime: date, userId: userId });
    return sessionId;
  }

  deleteSession(sessionId) {
    return this.sessionStorage.delete(sessionId);
  }

  getSession(sessionId) {
    return this.sessionStorage.get(sessionId);
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

  showSessionStorage() {
    console.log('sessionStorage : ', this.sessionStorage);
    return; 
  }

  checkSession(sessionId) {
    const session = this.sessionStorage.get(sessionId);

    if (!session) {
      return false;
    }

    if (session.expireTime <= Date.now()) {
      this.deleteSession(sessionId);
      return false;
    }

    return true;
  }
}

const session = new Session();

const sessionMiddleware = (req, res, next) => {
  req.session = session;

  if (!session.checkSession(req.cookies.SID)) {
    res.clearCookie('SID');
  }
  next();
};

module.exports = sessionMiddleware;
