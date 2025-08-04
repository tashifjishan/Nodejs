const fs = require("fs");
let crypto = require("crypto");

let key = crypto.randomBytes(32);
let iv = crypto.randomBytes(16);

let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update("The quick brown fox jumps over the lazy dog!", "utf-8", "hex");
encrypted+=cipher.final("hex");

fs.writeFileSync("encrypted.txt", encrypted);
console.log(key.toString("hex"));
console.log(iv.toString("hex"));



