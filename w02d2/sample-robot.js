// "the event loop cannot start until the main thread has finished"

//                 'look', 500, getUp
const doAction = function(name, duration, next){
  console.log('starting:', name);

  setTimeout(() => {
    console.log('ending:', name);
    if (next) {
      next();
    }
  }, duration);

}

//
// look
//
const look = () => {
  doAction('look', 500, look);
};

//
// getUp
//
const getUp = () => {
  doAction('getUp', 3000, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 5000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 1000, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 2000, null);
};


// Make the Robot Start
look();
getUp();

console.log("End of the main thread.");
