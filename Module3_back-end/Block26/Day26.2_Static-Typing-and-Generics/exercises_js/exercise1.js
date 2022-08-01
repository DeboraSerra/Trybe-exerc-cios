"use strict";
var color;
(function (color) {
    color["black"] = "black";
    color["white"] = "white";
    color["red"] = "red";
    color["silver"] = "silver";
})(color || (color = {}));
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "driver's door";
    Doors["RIDE"] = "ride's door";
    Doors["BEHIND_DRIVER"] = "door behind the driver";
    Doors["BEHIND_RIDE"] = "door behind the ride";
})(Doors || (Doors = {}));
var Direction;
(function (Direction) {
    Direction["RIGHT"] = "right";
    Direction["LEFT"] = "left";
})(Direction || (Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this.honk = () => 'Honk!';
        this.openDoor = (door) => `open ${door}`;
        this.closeDoor = (door) => `close ${door}`;
        this.turnOn = () => 'Turn on the car';
        this.turnOff = () => 'turn off the car';
        this.speedUp = () => 'Increase speed';
        this.speedDown = () => 'Decrease seed';
        this.stop = () => 'stop the car';
        this.turn = (direction) => `Turn ${direction}`;
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
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
