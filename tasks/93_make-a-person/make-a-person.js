export class Person {
  constructor(fullName) {
    this.fullName = fullName;
    fullName = fullName.split(' ');
    this._firstName = fullName[0];
    this._lastName = fullName[1];
  }

  getFirstName() {
    return this._firstName;
  }

  getLastName() {
    return this._lastName;
  }

  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  setFirstName(first) {
    this._firstName = first;
  }

  setLastName(last) {
    this._lastName = last;
  }

  setFullName(fullName) {
    this.fullName = fullName;
  }
}
