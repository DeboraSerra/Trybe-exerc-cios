import Person from './exercise1';
import Employee from './exercise3';
import Subject from './exercise4';

class Teacher extends Person implements Employee {
  constructor(private _subject: Subject, name: string, birthDate: Date, private _registration: string, private _salary: number, private _admissionDate: Date) {
    super(name, birthDate);
  }
  get subject(): string { return this._subject.name };
  get name(): string { return this._name };
  get birthday(): Date { return this.birthDay };
  get registration(): string { return this._registration };
  set registration(value: string) {
    if (value.length >= 16) this._registration = value;
  }
  get salary(): number { return this._salary };
  set salary(value: number) {
    if (value > 0) this._salary = value;
  }
  get admissionDate(): Date { return this._admissionDate };
  set admissionDate(value: Date) {
    const today = new Date();
    if (value > today) throw new Error('Date is in the future');
    this._admissionDate = value;
  }
  generateRegistration(): string {
    const str = new Date().toLocaleString().replace(/\W/g, '');
    return `em${str}`;
  }
}
