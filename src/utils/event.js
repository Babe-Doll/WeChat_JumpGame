class Event {
    constructor (sender){
        // sender 表示当前新建event的this指针
        this._sender = sender
        // listener的回调函数
        this._listeners = []

    }
    attach (callback) {
        this._listeners.push(callback)
    }
    notify (args) {
        for(let i=0; i< this._listeners.length; i++){
            this._listeners[i](sender, args)
        }
    }
}
export default new Event()