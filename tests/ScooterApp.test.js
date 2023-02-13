const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe("ScooterApp", () => {
    let app;
  
    beforeEach(() => {
        scooterApp = new ScooterApp();
        scooterApp.registerUser('user1', 'password1', 21);
        scooterApp.createScooter('Station 1');
      });
    
// register user
describe("registerUser", () => {
    test("should register a new user", () => {
      const user = app.registerUser("john", "password", 25);
      expect(app.registeredUsers.john).toEqual(user);
    });

    test("should throw an error if the user is already registered", () => {
      app.registerUser("john", "password", 25);
      expect(() => {
        app.registerUser("john", "password", 25);
      }).toThrow("Already registered");
    });

    test("should throw an error if the age is less than 18", () => {
      expect(() => {
        app.registerUser("john", "password", 15);
      }).toThrow("Too young to register");
    });
  });
// log in
describe("loginUser", () => {
    test("should log in the user with the correct username and password", () => {
      app.registerUser("john", "password", 25);
      app.loginUser("john", "password");
      expect(app.registeredUsers.john.loggedIn).toBe(true);
    });

    test("should throw an error if the username or password is incorrect", () => {
      app.registerUser("john", "password", 25);
      expect(() => {
        app.loginUser("john", "wrongpassword");
      }).toThrow("Username or password is incorrect");
    });

    test("should throw an error if the user is not registered", () => {
      expect(() => {
        app.loginUser("john", "password");
      }).toThrow("Username or password is incorrect");
    });
// log out
describe("logoutUser", () => {
    test("should log out the user", () => {
      app.registerUser("john", "password", 25);
      app.loginUser("john", "password");
      app.logoutUser("john");
      expect(app.registeredUsers.john.loggedIn).toBe(false);
    });

    test("should throw an error if the user is not logged in", () => {
      app.registerUser("john", "password", 25);
      expect(() => {
        app.logoutUser("john");
      }).toThrow("No such user is logged in");
    });
  });

// rent scooter
describe('rentScooter', () => {
    let scooterApp;
    test('throws error if scooter is already rented', () => {
        const user = scooterApp.registeredUsers['user1'];
        const scooter = scooterApp.stations['Station 1'][0];
        scooterApp.rentScooter(scooter, user);
    
        expect(() => {
          scooterApp.rentScooter(scooter, user);
        }).toThrowError("Scooter already rented");
      });
    
      test('successfully rents scooter', () => {
        const user = scooterApp.registeredUsers['user1'];
        const scooter = scooterApp.stations['Station 1'][0];
    
        scooterApp.rentScooter(scooter, user);
        expect(scooter.user).toEqual(user);
        expect(scooterApp.stations['Station 1']).toHaveLength(0);
      });
    });







describe("createScooter", () => {
    test("should create a new scooter in the specified station", () => {
      const scooter = app.createScooter("Station 1");
      expect(app.stations["Station 1"]).toContain(scooter);
    });

    test("should throw an error if the station does not exist", () => {
      expect(() => {
        app.createScooter("Station 4");
      }).toThrow("No such station");
    });
  });
  // dock scooter
  describe("dock scooter test", () =>{
    test("wrong station", () => {
        expect(() => {
            app.dockScooter("station 4");
        }).toThrow("No such station")
    })
    test("right station", () => {
        expect(app.stations["Station 1"]).toContain(scooter);
        })
    })
  })


});

