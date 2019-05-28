export class Person {
  constructor(fullName) {
    this.setFullName(fullName);
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
    this.setFirstName(fullName.split(' ')[0]);
    this.setLastName(fullName.split(' ')[1]);
  }
}
