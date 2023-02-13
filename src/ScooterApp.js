const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      "Station 1": [],
      "Station 2": [],
      "Station 3": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("Already registered");
    } else if (age < 18) {
      throw new Error("Too young to register");
    } else {
      this.registeredUsers[username] = new User(username, password, age);
      console.log(`User ${username} has been registered`);
      return this.registeredUsers[username];
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect");
    } else if (user.password === password) {
      user.login();
      console.log(`User ${username} has been logged in`);
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("No such user is logged in");
    } else {
      user.logout();
      console.log(`User ${username} is logged out`);
    }
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    } else {
      const scooter = new Scooter();
      this.stations[station].push(scooter);
      scooter.station = station;
      console.log("Created new scooter");
      return scooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station");
    } else {
      for (const scooters of Object.values(this.stations)) {
        const index = scooters.indexOf(scooter);
        if (index !== -1) {
          scooters.splice(index, 1);
          break;
        }
      }
      this.stations[station].push(scooter);
      scooter.station = station;
      scooter.dock();
      console.log("Scooter is docked");
    }
  }

  rentScooter(scooter, user) {
    let scooterFound = false;
    for (const scooters of Object.values(this.stations)) {
      const index = scooters.indexOf(scooter);
      if (index !== -1) {
        scooters.splice(index, 1);
        scooterFound = true;
        break;
      }
    }
    if (!scooterFound) {
      throw new Error("Scooter already rented");
    } else {
      scooter.rent(user);
      console.log("Scooter is rented");
    }
  }

  print() {
    console.log("Registered Users:");
  }
}
  module.exports = ScooterApp
