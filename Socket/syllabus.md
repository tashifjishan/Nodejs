# What are streams?
Streams in Node.js are objects that let you read data from a source or write data to a destination in a continuous fashion — like handling data chunk-by-chunk instead of loading everything into memory at once.

## 📘 Types of Streams
- Readable – For reading data (e.g., fs.createReadStream)
- Writable – For writing data (e.g., fs.createWriteStream)
- Duplex – Both readable and writable (e.g., TCP sockets)
- Transform – A duplex stream that modifies data as it's written/read (e.g., zlib.createGzip)

## ✅ Why Use Streams?
- Efficient memory usage (especially with large files)
- Handles backpressure automatically
- Built-in in Node.js core modules

## 📌 Common Events:
- 'data' – Emitted when a chunk is available
- 'end' – No more data to read
- 'error' – Error occurred
- 'finish' – All data written