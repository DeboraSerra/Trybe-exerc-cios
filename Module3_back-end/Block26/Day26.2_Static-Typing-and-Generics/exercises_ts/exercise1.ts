enum color {
  black = 'black',
  white = 'white',
  red = 'red',
  silver = 'silver',
}

enum Doors {
  DRIVER = 'driver\'s door',
  RIDE = 'ride\'s door',
  BEHIND_DRIVER = 'door behind the driver',
  BEHIND_RIDE = 'door behind the ride',
}

enum Direction {
  RIGHT = 'right',
  LEFT = 'left',
}

interface Car {
  _brand: string;
  _color: color;
  _doors: number;
}

class Car {
  constructor(brand: string, color: color, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }
  honk = () => 'Honk!';
  openDoor = (door: Doors) => `open ${door}`;
  closeDoor = (door: Doors) => `close ${door}`;
  turnOn = () => 'Turn on the car';
  turnOff = () => 'turn off the car';
  speedUp = () => 'Increase speed';
  speedDown = () => 'Decrease seed';
  stop = () => 'stop the car';
  turn = (direction: Direction) => `Turn ${direction}`;
}

const car = new Car('ford', color.red, 4);
console.log(car);
console.log({ brand: car._brand, color: car._color, doors: car._doors });
console.log(car.openDoor(Doors.DRIVER));
console.log(car.closeDoor(Doors.DRIVER));
console.log(car.turnOn());
console.log(car.speedUp());
console.log(car.turn(Direction.RIGHT));
console.log(car.speedDown());
console.log(car.honk());
console.log(car.stop());
