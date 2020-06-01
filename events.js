// 引入 events 模块
const events = require('events');
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter();

// eventEmitter.addListener(event,listener)
// eventEmitter.on(event,listener)
// eventEmitter.once(event,listener)
// eventEmitter.removeListener(event,listener)
// eventEmitter.removeAllListeners([event])
// eventEmitter.setMaxListeners(n)
// eventEmitter.listeners(event)
// eventEmitter.listenerCount(event)
// event.emit(event[,arg1[,...]])