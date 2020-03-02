const events = require('events')
const eventEmitter = new events.eventEmitter() // 事件触发与事件监听器的封装

// eventEmitter.addListener(event,listener)
// eventEmitter.on(event,listener)
// eventEmitter.once(event,listener)
// eventEmitter.removeListener(event,listener)
// eventEmitter.removeAllListeners([event])
// eventEmitter.setMaxListeners(n)
// eventEmitter.listeners(event)
// eventEmitter.listenerCount(event)
// event.emit(event[,arg1[,...]])