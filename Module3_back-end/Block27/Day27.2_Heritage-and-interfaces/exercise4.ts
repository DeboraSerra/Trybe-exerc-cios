class Subject {
  constructor(protected _name: string) { }
  get name(): string { return this._name };
  set name(value: string) {
    if (value.length >= 3) this._name = value;
  }
}

export default Subject;
