export class Person {
  constructor(fullName) {
    this.fullName = fullName;
    const dividedFullName = fullName.split(' ');
    this._firstName = dividedFullName[0];
    this._lastName = dividedFullName[1];
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
