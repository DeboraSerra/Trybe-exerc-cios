abstract class Person {
  constructor(protected _name: string, protected _birthDate: Date) { }
  get name(): string { return this._name };
  get birthDay(): Date { return this._birthDate };
  set name(name: string) {
    if (name.length > 3) this._name = name;
  }
  set birthDate(date: Date) {
    const today = new Date();
    if (date > today) throw new Error('Date is in the future');
    if (Person.age(date) > 120) throw new Error('Person would be too old');
    this._birthDate = date;
  }
  static age(value: Date): number {
    const diff = Math.abs(value.getTime() - new Date().getTime());
    const yearMs = (1000 * 3600 * 24) / 365.25;
    return Math.floor(diff / yearMs);
  }
}

export default Person;
