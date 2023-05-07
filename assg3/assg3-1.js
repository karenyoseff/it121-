// Create eople object
const people = {
  friends: []
};

// Create friend objects
const f1 = {
  firstName: 'Bob',
  lastName: 'Moses',
  id: 21
};

const f2 = {
  firstName: 'Dua',
  lastName: 'Lipa',
  id: 22
};

const f3 = {
  firstName: 'Fred',
  lastName: 'Again',
  id: 23
};

// Add the friends to the array
people.friends.push(f1, f2, f3);

console.log(people);