// // // const bool = false;
// // // console.log('typeof bool', typeof bool);

// const nul = null;
// const undef = undefined;
// console.log('typeof undef', typeof undef);
// const num = 5;
// const bigint = 9007199254740991n;
// const str = 'This is a string';
// const sym = Symbol('symbol');

// // console.log('console', console);

// // const voterOneName = 'Monkey';
// // const voterOneDidVote = true;
// // const voterOneAge = 33;

// // const voterTwoName = 'Fuzz';
// // const voterTwoDidVote = false;
// // const voterTwoBirthday = '1999-01-01';

// // const voterThreeName = 'Fuzzy';
// // const voterThreeDidVote = false;

// // let numVoters = 0;

// // if (voterOneDidVote) {
// //   numVoters = numVoters + 1;
// // }
// // if (voterTwoDidVote) {
// //   numVoters = numVoters + 1;
// // }
// // if (voterThreeDidVote) {
// //   numVoters = numVoters + 1;
// // }

// // //

// const voterOne = {
//   name: 'Monkey',
//   didVote: true,
//   birthday: '1999-01-01',
//   print: function (){
//     console.log(`${this.name} was born on ${this.birthday} and didVote: ${this.didVote}`);
//   }
// };

// for (let key in voterOne) {
//   console.log('key', key);
//   console.log('property value', voterOne[key]);
// }

// const voterTwo = {
//   name: 'Fuzz',
//   didVote: false,
//   birthday: '1999-01-02',
//   print: function (){
//     console.log(`${this.name} was born on ${this.birthday} and didVote: ${this.didVote}`);
//   }
// };

// const voterThree = {
//   name: 'Fuzzy',
//   didVote: true,
//   birthday: '1999-01-03',
//   print: function (){
//     console.log(`${this.name} was born on ${this.birthday} and didVote: ${this.didVote}`);
//   }
// };

// const listOfVoters = [voterOne, voterTwo, voterThree];

// let numberOfVoters = 0;
// for (let voter of listOfVoters){

//   const propertyName = 'didVote';
//   if (voter[propertyName]) {
//     numberOfVoters = numberOfVoters + 1;
//   }

//   voter.print();

//  }

// // console.log('numberOfVoters', numberOfVoters);


// // function addTen(num){
// //   const returnValue = 10 + num;
// //   num = num + 2;
// //   return returnValue;
// // }

// // const xx = 3;

// // console.log('xx before', xx);
// // const rv = addTen(xx);
// // console.log('rv', rv);
// // console.log('xx after', xx);




// // function addTwo(obj){
// //   const returnValue = 2 + obj.value;
// // obj.value = obj.value + 2;
// //   return returnValue;
// // }

// // const yy = {
// //   value: 3
// // };

// // console.log('yy before', yy);
// // const rv2 = addTwo(yy);
// // console.log('rv2', rv2);
// // console.log('yy after', yy);



// function addTwo(obj){
//   const returnValue = 2 + obj.value;
//   console.log(`returnValue`, returnValue);
//   return 333;
// }

// const myObj = {
//   value: 44,
//   monkeyfuzz: null
// };
// const rv3 = addTwo(myObj);
// console.log('rv3', rv3);
// console.log('myObj.monkeyfuzz', myObj.monkeyfuzz);

// if (myObj.monkeyfuzz === undefined) {
//   console.log('do the right thing');
// }


const array = ['value1','value2','value3','value4'];
const object = {k1: 'value1', k2: 'value2',k3: 'value3',k4: 'value4'};

for (let [key,value] of array){
  console.log('key', key);
  console.log('typeof key', typeof key);
  console.log('value', value);
  console.log('typeof value', typeof value);
}
