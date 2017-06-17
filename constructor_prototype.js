// User Constructor
function User(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;  
}

// Adding PrortoType Variable to Constructor
User.prototype.emailDomain = '@facebook.com';

// Adding ProtoType Function to Constructor
User.prototype.getEmail = function(){
  return this.firstName + this.lastName + this.emailDomain;
}

// Creating Instance of Constructor
let user1 = new User('rahul', 'teja', 23, 'male');
let user2 = new User('Bhargav', 'teja', 26 , 'male');
console.log(user1);
console.log(user2);

// Using Prototype Function for Instace of Constructor.
console.log(user1.getEmail());
console.log(user2.getEmail());
