class User {
  // User code here
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    
  }
  static loggedIn = null;
  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    }
    else {
      throw new Error ("incorrect passoword");
    }
  }
  logout() {
    this.loggedIn = false;
  }

}

module.exports = User
