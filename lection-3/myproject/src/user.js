export default class User {
  constructor(firstName,  lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  }
}
