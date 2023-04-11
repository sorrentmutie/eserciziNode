const EventEmitter = require('events').EventEmitter;

const emitter = new EventEmitter();
const emitter2 = new EventEmitter();
// emitter.on('mioEventoEmissione',   n => console.log(n * 3));
emitter.on('mioEventoEmissione',   n => setImmediate( () => console.log(n * 3) ));
emitter2.on('prova', valore => setTimeout( () => console.log(valore), 5000) );

emitter2.emit('prova', 'salvatore');
for(let i = 0; i < 10; i++) {
    console.log("i=" + i);
    emitter.emit('mioEventoEmissione', i);
}




