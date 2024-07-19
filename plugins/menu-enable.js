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
            text: "> 🏴𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙈𝙄𝙆𝘼𝙎𝘼 𝘽𝙊𝙏 - 𝙈𝘿\n\n☑️𝑈𝑆𝐴 .𝐸𝑁𝐴𝐵𝐿𝐸 𝑃𝐴𝑅𝐴 𝐴𝐶𝑇𝐼𝑉𝐴𝑅 𝑈𝑁𝐴 𝐹𝑈𝑁𝐶𝐼𝑂𝑁.\n❌𝑈𝑆𝐴 .𝐷𝐼𝑆𝐴𝐵𝐿𝐸 𝑃𝐴𝑅𝐴 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝑅 𝑈𝑁𝐴 𝐹𝑈𝑁𝐶𝐼𝑂𝑁.\n\n⚙️ 𝗗𝗮𝗿 𝗯𝗶𝗲𝗻𝘃𝗲𝗻𝗶𝗱𝗮 𝗮𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼\n*» .enable/.disable welcome*\n\n⚙️ 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣\n*» .enable/.disable detect*\n\n⚙️ 𝘿𝙚𝙩𝙚𝙘𝙩𝙤𝙧 𝙙𝙚 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣2\n*» .enable/.disable detect2*\n\n⚙️ 𝗥𝗲𝗲𝗻𝘃𝗶𝗮 𝗶𝗺𝗴/𝘃𝗶𝗱𝗲𝗼 𝘁𝗲𝗺𝗽𝗼𝗿𝗶𝘇𝗮𝗱𝗼𝘀\n*» .enable/.disable antiviewonce*\n\n⚙️ 𝗥𝗲𝗲𝗻𝘃𝗶𝗮𝗿 𝗺𝗲𝗻𝘀𝗮𝗷𝗲𝘀 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀\n*» .enable/.disable antidelete*\n\n⚙️ 𝗘𝗻𝘃𝗶𝗮 𝗮𝘂𝗱𝗶𝗼𝘀 𝗽𝗼𝗿 𝗽𝗮𝗹𝗮𝗯𝗿𝗮𝘀 𝗰𝗹𝗮𝘃𝗲\n*» .enable/.disable audios*\n\n⚙️ 𝗕𝗼𝘁 𝗽𝘂𝗯𝗹𝗶𝗰𝗼\n*» .enable/.disable public*\n\n⚙️ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝗻𝘂𝗺𝗲𝗿𝗼𝘀 𝗮𝗿𝗮𝗯𝗲𝘀\n*» .enable/.disable antiarabes*\n\n⚙️ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝗻𝘂𝗺𝗲𝗿𝗼𝘀 𝗮𝗿𝗮𝗯𝗲𝘀2\n*» .enable/.disable antiarabes2*\n\n⚙️ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮 𝗮 𝘁𝗲𝘅𝘁𝗼𝘀 𝗺𝘂𝘆 𝗹𝗮𝗿𝗴𝗼𝘀\n*» .enable/.disable antitraba*\n\n⚙️ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝗲𝗻𝗹𝗮𝗰𝗲𝘀 𝗴𝗿𝘂𝗽𝗮𝗹𝗲𝘀\n*» .enable/.disable antilink*\n\n⚙️ 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘁𝗼𝗱𝗼𝘀 𝗹𝗼𝘀 𝗲𝗻𝗹𝗮𝗰𝗲𝘀\n*» .enable/.disable antilink2*\n\n⚙️ 𝗠𝗼𝗱𝗼 𝗵𝗼𝘁\n*» .enable/.disable modohorny*\n\n⚙️ 𝗥𝗲𝗮𝗰𝗰𝗶𝗼𝗻 𝗰𝗼𝗻 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀\n*» .enable/.disable stickers*\n\n⚙️ 𝗦𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗺𝗲𝗻𝘁𝗲\n*» .enable/.disable autolevelup*\n\n⚙️ 𝗖𝗿𝗲𝗮𝗿 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗼𝘀 (𝘮𝘢𝘯𝘥𝘢𝘳 𝘪𝘮𝘢𝘨𝘦𝘯)\n*» .enable/.disable autosticker*\n\n⚙️ 𝙍𝙚𝙖𝙘𝙘𝙞𝙤𝙣 𝙚𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨\n*» .enable/.disable reaction*\n\n⚙️ 𝘼𝙣𝙩𝙞 𝙩𝙤𝙭𝙞𝙘𝙤𝙨\n*» .enable/.disable antitoxic*\n\n⚙️ 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙖𝙪𝙙𝙞𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩\n*» .enable/.disable audios*\n\n⚙️ 𝘼𝙣𝙩𝙞 𝙣𝙪𝙢𝙚𝙧𝙤𝙨\n*» .enable/.disable antifake*\n\n⚙️ 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙧 𝙨𝙪𝙗 𝙗𝙤𝙩𝙨 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩\n*» .enable/.disable modejadibot*\n\n⚙️ 𝘼𝙘𝙩𝙞𝙫𝙖𝙧 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨\n*» .enable/.disable restrict*\n\n⚙️ 𝙇𝙚𝙚𝙧 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨\n*» .enable/.disable autoread*\n\n⚙️ 𝙉𝙤 𝙡𝙡𝙖𝙢𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩\n*» .enable/.disable antillamar*\n\n⚙️ 𝙉𝙤 𝙝𝙖𝙘𝙚𝙧 𝙨𝙥𝙖𝙢 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩\n*» .enable/.disable antispam*\n\n⚙️ 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙘𝙤𝙣𝙩𝙚𝙨𝙩𝙖𝙧𝙖 𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨\n*» .enable/.disable modoadmin*\n\n⚙️ 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨\n*» .enable/.disable pconly*\n\n⚙️ 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙝𝙖𝙗𝙡𝙖𝙧𝙖 𝙚𝙣 𝙘𝙝𝙖𝙩𝙨 𝙜𝙧𝙪𝙥𝙖𝙡𝙚𝙨\n*» .enable/.disable gconly*\n\n⚙️ 𝙉𝙤 𝙝𝙖𝙗𝙡𝙖𝙧 𝙖𝙡 𝙗𝙤𝙩 𝙚𝙣 𝙥𝙧𝙞𝙫𝙖𝙙𝙤\n*» .enable/.disable antiprivado*\n\n⚙️ 𝘾𝙝𝙖𝙩𝙜𝙥𝙩 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙤\n*» .enable/.disable modoia*"
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
                "buttonParamsJson": "{\"display_text\":\"𝑪𝑨𝑵𝑨𝑳 𝑶𝑭𝑰𝑪𝑰𝑨𝑳\nhttps://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable welcome\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable detect\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable detect2\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antiviewonce\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antidelete\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable audios\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable public\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antiarabes\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antiarabes2\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antitraba\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antilink\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"..enable antilink2\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable modohorny\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable stickers\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable autolevelup\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable autosticker\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable reaction\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antitoxic\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable audios\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antifake\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable modejadibot\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable restrict\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable autoread\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antillamar\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antispam\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable modoadmin\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable pconly\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable gconly\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable antiprivado\",\"id\":\"message\"}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".enable modoia\",\"id\":\"message\"}"
              }
           ],
          })
        })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(enable2|on2|disable2)$/i

export default handler
