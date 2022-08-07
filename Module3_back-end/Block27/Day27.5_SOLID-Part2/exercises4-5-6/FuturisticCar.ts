import { Drive, Fly, IVehicle } from './interfaces';

export default class FuturisticCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}

export class Car implements Drive {
  drive(): void { console.log('Drive a car'); }
}

export class AirPlane implements Fly {
  fly(): void { console.log('Flying a plane'); }
}
