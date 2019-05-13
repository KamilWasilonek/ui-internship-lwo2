export class Person {
  constructor(fullName) {
    this.fullName = fullName;
    fullName = fullName.split(' ');
    this._firstName = fullName[0];
    this._lastName = fullName[1];
  }

  getFirstName() {
    return (this._firstName = this.fullName.split(' ')[0]);
  }

  getLastName() {
    return (this._lastName = this.fullName.split(' ')[1]);
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(first) {
    this._firstName = first;
    this.fullName = this._firstName + ' ' + this._lastName;
  }

  setLastName(last) {
    this._lastName = last;
    this.fullName = this._firstName + ' ' + this._lastName;
  }

  setFullName(fullName) {
    this.fullName = fullName;
  }
}
