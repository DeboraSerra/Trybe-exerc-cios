class MyDate {
  private _day: number;
  private _month: number;
  private _year: number;
  private _date: string;
  constructor(day: number, month: number, year: number) {
    const validDay = day > 0 && day < 31;
    const validMonth = month > 0 && month < 12;
    const validYear = year > 1900;
    if (validDay && validMonth && validYear) {
      this._day = day;
      this._month = month;
      this._year = year;
    } else {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    }
    this._date = `${this._day}-${this._month}-${this._year}`;
  }
  get day() { return this._day };
  get month() { return this._month };
  get year() { return this._year };
  get date() { return `${this.day}-${this.month}-${this.year}` };
  set day(day: number) { if (day > 0 && day < 31) this._day = day };
  set month(month: number) { if (month > 0 && month < 12) this._month = month };
  set year(year: number) { if (year > 1900) this._year = year };
  get monthName() {
    const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    return months[this._month - 1];
  }
  get isLeapYear() { return this._year % 4 === 0; }
  public compare(date: MyDate) {
    if (new Date(date.date) > new Date(this.date)) return -1;
    if (new Date(date.date) > new Date(this.date)) return 1;
    return 0;
  }
  public format(format: string) {
    if (format.includes('/')) return this.date.replace('-', '/');
    if (format.includes('-')) {
      const newDate = this.date.split('-').reverse().join('-');
      return newDate;
    }
    if (format.includes('de')) {
      const nums = `${this.year}`.split('');
      const newYear = nums[2] + nums[3];
      return `${this.day} de ${this.monthName} de ${newYear}`;
    }
    if (format.includes(',')) return `${this.day}, ${this.monthName} de ${this.year}`;
  }
}

const date = new MyDate(16, 9, 1992);
console.log(date.date);
console.log(date.compare(new MyDate(1, 8, 2022)));
console.log(date.format('dd de M de aa'));
console.log(date.isLeapYear);
console.log(date.monthName);
