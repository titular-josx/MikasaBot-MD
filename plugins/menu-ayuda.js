import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg
const pp = imagen1;
// let vn = './media/menu.mp3'
const img = './Menu2.jpg';

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "𝑪𝑨𝑵𝑨𝑳 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 𝑫𝑬 𝑴𝑰𝑲𝑨𝑺𝑨 𝑩𝑶𝑻",
            subtitle: "https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"𝑪𝑨𝑵𝑨𝑳 𝑶𝑭𝑰𝑪𝑰𝑨𝑳 https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".owner\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".allmenu\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuff\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuaudios\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".labiblia\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menuanime\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".menujuegos\",\"id\":\"message\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(menu|help|ayuda)$/i

export default handler
