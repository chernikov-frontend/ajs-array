export default class ArrayBufferConverter {
    constructor() {
        this.data;
    }
    
    load(buffer) {
        this.data = buffer;
    }
    
    toString() {
        return JSON.stringify([...new Uint16Array(this.data)]);
    }
}


export function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
    })(data);
}


// const buf = new ArrayBufferConverter();
// buf.load(getBuffer())
// console.log(buf.toString())
//result
// [123,34,100,97,116,97,34,58,123,34,117,115,101,114,34,58,123,34,105,100,34,58,49,44,34,110,97,109,101,34,58,34,72,105,116,109,97,110,34,44,34,108,101,118,101,108,34,58,49,48,125,125,125]