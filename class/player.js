const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
    this.items = []
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    // Fill this in
    let stuff = this.currentRoom.items.pop();
    this.items.push(stuff)
    
}

dropItem(itemName) {
    
    // Fill this in
    let stuff = this.items.pop()
    this.currentRoom.items.push(stuff)
}

eatItem(itemName) {
    if (this.items[0] instanceof Food) {
        this.items.pop();
    }
    
    
}

getItemByName(name) {

    // Fill this in
    return this.items.find(elem =>  elem.name === name);
}
  hit(name) {

    // Fill this in
    
      return name
      
    

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};


