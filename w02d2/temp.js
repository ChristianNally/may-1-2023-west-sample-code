
// const fs = require('fs');

// function doThingTenTimes(thing){
//   for (let xx = 0; xx < 10; xx++) {
//     thing();
//   }
// }


// const somethingToDo = () => {
//   console.log('something To Do!');
// };

// doThingTenTimes();


// 
// fs.readFile('/path/to/the/file.txt', 'utf8', (error, content) => {
//   if (error){
//     console.log('error', error);
//   } else {
//     console.log('content', content);
//   }
// });


// // Network API Call
// axios.get('http://example.com/contact.html', (response) => {
//   console.log(response);
// });


const intervalReference = setInterval(() => {
  console.log('Monkey Fuzz!');
}, 500);


setTimeout(() => {
  clearInterval(intervalReference);
}, 6000);

console.log('end of main thread');