export interface Drive {
  drive(): void;
}

export interface Fly {
  fly(): void;
}

export interface IVehicle extends Drive, Fly { }
