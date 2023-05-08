// implement a function called sayHello that takes the name of the saluted and 
// returns what would be said.
const sayHello = (personPlaceThing) => {
  const output = `Hello, ${personPlaceThing}`;
  return output;
};

const sayGoodbye = (personPlaceThing) => {
  const output = `Goodbye, ${personPlaceThing}`;
  return output;
};

console.log('this is the last line');

// make the functions exportable
module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};
