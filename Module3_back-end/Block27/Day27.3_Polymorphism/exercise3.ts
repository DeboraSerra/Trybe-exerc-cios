import Person from './exercise1';

abstract class Employee extends Person {
  constructor(protected _registration: string, protected _salary: number, protected _admissionDate: Date, name: string, birthDate: Date) {
    super(name, birthDate);
  }
  get registration(): string { return this._registration };
  set registration(value: string) {
    if (value.length >= 16) this._registration = value;
  }
  set salary(value: number) {
    if (value > 0) this._salary = value;
  }
  set admissionDate(value: Date) {
    const today = new Date();
    if (value > today) throw new Error('Date is in the future');
    this._admissionDate = value;
  }
  get salary(): number { return this._salary };
  get admissionDate(): Date { return this._admissionDate };
  protected abstract generateRegistration(): string
}

export default Employee;
