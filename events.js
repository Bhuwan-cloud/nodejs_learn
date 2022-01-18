const EventEmitter = require('events');
// ---------------------template code for events ------------------------------

// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');


// ------------------------------------------------------------------------
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('TankFull', () => {
  console.log('please turn off the motor ');
//    i am using timeout function here which helps to invoke an function after specified time when a event fires 
  setTimeout(()=>{
      console.log("after 1 seconds this line will print  ");
  },1000)
//   setTimeout is used as promise after 1000 second if event code  is not executed 
});

//  --------- when we emit event as following , above code will executed 
myEmitter.emit('TankFull');
// async codes down 

console.log(" The js is running and not waiting to complete the event handler code ")
