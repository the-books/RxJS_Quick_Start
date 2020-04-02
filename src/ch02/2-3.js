class Subject {
  constructor() {
    this._observers = [];
  }
  add(observer) {
    this._observers.push(observer);
  }
  remove(observer) {
    let idx = this._observers.indexOf(observer);
    if (idx !== 1) {
      this._observers.splice(idx, 1);
    }
  }
  notify(status) {
    this._observers.forEach(v => {
      v.update(status);
    });
  }
}

class User extends Subject{
  constructor() {
    super();
    this._state = {
      name: '',
      isLogin: false,
    };
  }
  getName() {
    return this._state.name;
  }
  isLogin() {
    return this._state.isLogin;
  }
  login(name) {
    this._state.name = name;
    this._state.isLogin = true;
    this.notify(this._state);
  }
  logout() {
    this._state.name = '';
    this._state.isLogin = false;
    this.notify(this._state);
  }
}

class System {
  constructor() {
    this._token = null;
    this._id = 'System';
  }
  update(status) {
    if (status.isLogin) {
      this._token = [...status.name].reduce((acc, v) => acc + v.charCodeAt(0), 0);
      console.log(`[${this._id}] ${status.name} 의 토큰은 ${this._token} 입니다.`);
    } else {
      console.log(`[${this._id}] ${this._token} 은 로그인 로그아웃 되었습니다.`);
      this._token = null;
    }
  }
}

let user = new User();
let system = new System();

user.add(system);

user.login('batman');
user.logout();
user.login('joker');
