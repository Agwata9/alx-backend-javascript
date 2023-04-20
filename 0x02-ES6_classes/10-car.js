const CLONE_CAR = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [CLONE_CAR]() {
    const clonedCar = new Car(this._brand, this._motor, this._color);
    return clonedCar;
  }

  cloneCar() {
    return this[CLONE_CAR]();
  }
}
