index.js
package.json
logs.json
const qrcode = require("qrcode-terminal")
sock.ev.on("connection.update", ({ qr }) => {
if (qr) qrcode.generate(qr,{small:true})
})
