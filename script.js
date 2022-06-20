
class USS_HELLOWORLD {
    constructor() {
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7
    };
  
    attack() {
      let rndmAttack = Math.random()
      if (rndmAttack < this.accuracy) {
        AlienInvader.hull -= this.firepower;
        alert(`Your attack was successful! \n INCOMING ATTACK!`)
      } else {
        alert(`Your attack failed! \n INCOMING ATTACK!`)
      }
    }
  };
  
  const defender = new USS_HELLOWORLD();
  
  
  class AlienShip {
    constructor() {
      this.hull = Math.floor(Math.random() * (7 - 3) + 3)
      this.firepower = Math.floor(Math.random() * (5 - 2) + 2)
      this.accuracy = Math.random() * (.9 - .6) + .6
    }
    attack() {
      let rndmAlien = Math.random()
      if (rndmAlien < this.accuracy) {
        defender.hull -= this.firepower;
        alert(`Damage taken!`)
      } else {
        alert(`They missed!`)
      }
    }
  }
  
  const AlienInvader = new AlienShip()
  
  
  // GAMETIME
  const init = () => {
    alert('Welcome to Space Battle!');
    const response = prompt(` '1' to play or '2' to exit. Earth depends on you!`);
    if (response === '2') {
      alert(`Hope is lost!`)
    } else if (response === '1') {
      alert('Welcome, Captain!')
      armed()
    } else {
      alert(`Please choose '1' to play or '2' to exit`)
    }
  }
  
  const status = () => {
    alert(`USS HELLOWORLD \n HULL: ${defender.hull} \n FIREPOWER: ${defender.firepower} \n ACCURACY: ${defender.accuracy*100}%\n\nAlien#${invaderCount} \n HULL: ${AlienInvader.hull} \n FIREPOWER: ${AlienInvader.firepower} \n ACCURACY: ${Math.floor(AlienInvader.accuracy*100)}%`)
  }
  
  
  // Battle time
  invaderCount = 6;
  
  const armed = () => {
  
    status()
  
    while (invaderCount > 0) {
      if (AlienInvader.hull < 1) {
        invaderCount--
      }
  
      if (invaderCount > 0 && defender.hull > 0) {
        AlienInvader.hull = Math.floor(Math.random() * (7 - 3) + 3)
        AlienInvader.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        AlienInvader.accuracy = Math.random() * (.8 - .6) + .6
      } else if (invaderCount < 1 && defender.hull < 1) {
        return alert(`Draw!`)
      } else if (invaderCount < 1 && defender.hull > 0) {
        return alert(`The aliens have been defeated!`)
      } else {
        return alert(`The battle is lost!`)
      }
  
      const response = prompt(`Enter 'a' to initiate attack or 'p' to retreat`)
      if (response.toLowerCase() === 'p') {
        alert(`Wait! You forgot your keys!`)
        defender.hull = 0;
        defender.firepower = 0;
        defender.accuracy = 0;
        status()
      } else if (response.toLowerCase() === 'a') {
        engage()
      } else {
        alert(`Try again!`)
      }
  
    }
  
  };
  
   const engage = () => {
    defender.attack();
    AlienInvader.attack();
    armed();
  };
  
  init(); 