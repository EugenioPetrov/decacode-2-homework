const User = require('./user.class');
const Admin = require('./admin.class');

const userTest = new User('Anna', 'Ivanova');
const adminTest = new Admin('Ivan', 'Petrov');

userTest.login();
adminTest.login();

console.log(userTest);
console.log(adminTest);