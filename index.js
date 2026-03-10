index.js
package.json
logs.json
sock.ev.on("connection.update", ({ qr }) => {
if (qr) qrcode.generate(qr,{small:true})
})
