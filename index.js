const { Buffer } = require("buffer");

// Create a buffer with binary values for the message "Node.js is cool!"
const memoryContainer = Buffer.from([
  0b01001110, // N
  0b01101111, // o
  0b01100100, // d
  0b01100101, // e
  0b00101110, // .
  0b01101010, // j
  0b01110011, // s
  0b00100000, // (space)
  0b01101001, // i
  0b01110011, // s
  0b00100000, // (space)
  0b01100011, // c
  0b01101111, // o
  0b01101111, // o
  0b01101100, // l
  0b00100001  // !
]);

// Output the string representation of the buffer (will print "Node.js is cool!")
console.log(memoryContainer.toString("utf-8")); // "Node.js is cool!"

// Output the hexadecimal string representation of the buffer
console.log(memoryContainer.toString("hex")); // "4e6f64652e6a7320697320636f6f6c21"
