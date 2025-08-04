const crypto = require("crypto");

const encrypted = "fd309ccb8e7cd938b426567e5e05109f651fc21f1f9a1db650804e08719b942b40fb75fd2e1ffed585deda4e720d4f22";
const key = "d0ab40f142dc020676a989c9247534ae557b6341e7f35a71fed404155cde9353";
const iv = "1a0a2e2b97c396cd317402a2f15d3845";

const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key, "hex"), Buffer.from(iv, "hex"));
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted+=decipher.final("utf-8");

console.log(decrypted);

