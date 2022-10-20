import Person from './exercise1';
import Employee from './exercise3';
import Subject from './exercise4';

class Teacher extends Employee {
  constructor(private _subject: Subject, name: string, birthDate: Date, registration: string, salary: number, admissionDate: Date) {
    super(registration, salary, admissionDate, name, birthDate);
  }
  get subject(): string { return this._subject.name };
  get name(): string { return this._name };
  get birthday(): Date { return this.birthDay };
  generateRegistration(): string {
    const str = new Date().toLocaleString().replace(/\W/g, '');
    return `em${str}`;
  }
}
