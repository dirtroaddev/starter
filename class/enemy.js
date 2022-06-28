const {Character} = require('./character');
const {Room} = require("./room");
const {Player} = require("./player"); 
let room = new Room("Test Room", "A test room");

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
    
  }


  randomMove() {
    // Fill this in
    this.currentRoom = this.currentRoom.exits[this.currentRoom.getExits()[0]]
    this.cooldown = 3000;
    
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.player.health -= 10;
    this.cooldown = 3000;
   this.attackTarget = this.player;
  }

  applyDamage(amount) {
    // Fill this in
    this.health - amount;

    if (this.health <= 0) {
      this.die();
    }
    else {
      this.attackTarget = this.player;
      this.act();
  }
    console.log(this)
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};

let westRoom = new Room("West Room", "A room to the west of testRoom");
  room.connectRooms('w', westRoom);
  enemy = new Enemy('enemy', 'an ordinary character', room);
  
   console.log(enemy.applyDamage())
