"use strict";
class Student {
    constructor(mat, name, tests, papers) {
        this._matricula = mat;
        this._name = name;
        this._tests = tests;
        this._papers = papers;
    }
    get sum() {
        const tests = this._tests.reduce((acc, curr) => acc + curr);
        const papers = this._papers.reduce((acc, curr) => acc + curr);
        return tests + papers;
    }
    get average() {
        const sum = this.sum;
        return sum / 6;
    }
}
const student1 = new Student(1234, 'Jane Doe', [6, 7, 6, 7], [5, 6]);
console.log(student1.sum);
console.log(student1.average);
