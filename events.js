//Node.js has a built-in module, called "Events", where we can create-, fire-, and listen for- your own events.
//All event properties and methods are an instance of an EventEmitter object.

const events = require('events');
const eventEmitter = new events.EventEmitter();

// Event handler for 'doorOpen' event
const doorOpenHandler = function (doorType) {
    console.log(`The ${doorType} door is open.`);
};

// Assigning event handler
eventEmitter.on('doorOpen', doorOpenHandler);

// Emitting 'doorOpen' event with a specific door type ('front' in this case)
eventEmitter.emit('doorOpen', 'front');
// Output: The front door is open.
