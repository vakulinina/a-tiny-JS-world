const man = {
   species: 'human',
   name: 'Charles',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: 'What up',
   friends: ['Luna']
};

const woman = {
   species: 'human',
   name: 'Raven',
   gender: 'female',
   legs: 2,
   hands: 2,
   saying: 'Hey!',
   friends: ['Anna']
};

const cat = {
   species: 'cat',
   name: 'Vincent',
   gender: 'male',
   legs: 2,
   hands: 0,
   saying: 'Meow',
   friends: ['Anna']
};

const dog = {
   species: 'dog',
   name: 'Luna',
   gender: 'female',
   legs: 2,
   hands: 0,
   saying: 'Woof-woof!',
   friends: ['Charles']
};

const catWoman = {
   species: 'catWoman',
   name: 'Anna',
   gender: 'male',
   legs: 2,
   hands: 2,
   saying: cat.saying,
   friends: ['Raven', 'Vincent']
};

let inhabitants = [man, woman, cat, dog, catWoman];

inhabitants.forEach(inhabitant => {
   print(Object.keys(inhabitant)
      .map(key => Array.isArray(inhabitant[key]) ? inhabitant[key].join(', ') : inhabitant[key])
      .join('; ')
   )
})
