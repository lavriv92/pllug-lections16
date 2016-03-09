"use strict";

// import User from './user';
//
// let user = new User('Ivan', 'Lavriv');
//
// console.log(user.fullName);
//
// user.fullName = 'Test User1';
//
// console.log(user.firstName);
// console.log(user.lastName);

function a(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

a.apply(undefined, [1].concat([2, 3]));