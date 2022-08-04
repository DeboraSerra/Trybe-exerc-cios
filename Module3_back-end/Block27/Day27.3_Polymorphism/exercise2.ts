import Person from './exercise1';

class Student extends Person {
  private _enrolment: string;
  private _tests: [number, number, number, number];
  private _papers: [number, number];
  constructor(mat: string, name: string, birthDate: Date, tests: [number, number, number, number], papers: [number, number] ) {
    super(name, birthDate);
    this._enrolment = mat;
    this._tests = tests;
    this._papers = papers;
  }
  get enrolment(): string { return this._enrolment };
  set enrolment(value: string) {
    if (value.length !== 16) throw new Error('Invalid enrolment');
    this._enrolment = value;
  }
  get tests(): number[] { return this._tests };
  get papers(): number[] { return this._papers };
  get sum(): number {
    const tests = this._tests.reduce((acc, curr) => acc + curr);
    const papers = this._papers.reduce((acc, curr) => acc + curr);
    return tests + papers;
  }
  get average(): number {
    const sum = this.sum;
    return sum / 6;
  }
  generateEnrolment = (): string => {
    const value = new Date().toLocaleString().replace(/\W/g, '');
    return `st${value}`;
  }
}

const student1 = new Student('1234', 'Jane Doe', new Date('1992/09/16'), [6, 7, 6, 7], [5, 6]);

console.log(student1.sum);
console.log(student1.average);
