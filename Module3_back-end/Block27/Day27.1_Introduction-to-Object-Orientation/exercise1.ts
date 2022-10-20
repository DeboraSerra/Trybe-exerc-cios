class Person {
  protected _name: string;
  protected _birthDate: Date;
  constructor (name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  };
  get name(): string { return this._name };
  set name(name: string) {
    if (name.length < 3) return;
    this._name = name;
  };
  get birthDate(): Date { return this._birthDate };
  set birthDate(date: Date) {
    const today = new Date();
    if (date > today) {
      throw new Error('Birth date can\'t be in the future');
    }
    const age = Math.floor((today.getTime() - date.getTime()) / (1000 * 3600 * 24) / 365.25);
    if (age > 120) throw new Error('Person would be too old');
    this._birthDate = date;
  }
}

export default Person;
