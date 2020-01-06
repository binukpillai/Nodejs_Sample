

const EventEmitter = require ('events');
const emitter = new EventEmitter();

emitter.on('messagelogged',function(){

    console.log('Tracking Message');

});

emitter.emit('messagelogged');