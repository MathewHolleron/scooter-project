const User = require('../src/User')

// User tests here
describe("tests", () => {

    // test username

    test("should be able to log in with the correct password", () => {
      const user = new User("username", "password", 18);
      expect(user.loggedIn).toBe(false);
      // test login

      user.login("password");
      expect(user.loggedIn).toBe(true);
    });
  
    // test password

    test("should throw an error when logging in with the incorrect password", () => {
      const user = new User("username", "password", 18);
      expect(() => {
        user.login("incorrect password");
      }).toThrow("Incorrect password");
    });
  
    // test logout

    test("should be able to log out", () => {
      const user = new User("username", "password", 18);
      user.login("password");
      expect(user.loggedIn).toBe(true);
      user.logout();
      expect(user.loggedIn).toBe(false);
    });
  
// test age
    //in scooter app tests


});


    








