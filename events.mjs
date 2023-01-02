import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("EventName", (listener) => {
    console.info(`hello ${listener}`)
})

emitter.emit("EventName", "Iqbal")