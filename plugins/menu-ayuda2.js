import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

var handler = async (m, { conn, usedPrefix }) => {
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        buttonsMessage: proto.Message.ButtonsMessage.create({
          contentText: "Selecciona una opción del menú:",
          footerText: "> 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝘈𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n> 𝙑𝙚𝙧𝙨𝙞𝙤𝙣:  _3.3.1_\n> 𝙄𝙜: @𝘶𝘴𝘹𝘳_𝘢𝘯𝘨𝘦𝘭𝘪𝘵𝘰\n> 𝙒𝙖: wa.me/59897246324\n> 𝘚𝘪 𝘩𝘢𝘺 𝘢𝘭𝘨𝘶𝘯 𝘦𝘳𝘳𝘰𝘳 𝘳𝘦𝘱𝘰𝘳𝘵𝘦𝘭𝘰 𝘢𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 #𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝘱𝘢𝘳𝘢 𝘴𝘰𝘭𝘶𝘤𝘪𝘰𝘯𝘢𝘳𝘭𝘰\n\n> GRACIAS 🫶🏻",
          buttons: [
            { buttonId: '.allmenu', buttonText: { displayText: 'All Menu' }, type: 1 },
            { buttonId: '.menuff', buttonText: { displayText: 'Menu FF' }, type: 1 },
            { buttonId: '.menuaudios', buttonText: { displayText: 'Menu Audios' }, type: 1 },
            { buttonId: '.labiblia', buttonText: { displayText: 'La Biblia' }, type: 1 },
            { buttonId: '.menuanime', buttonText: { displayText: 'Menu Anime' }, type: 1 },
            { buttonId: '.menujuegos', buttonText: { displayText: 'Menu Juegos' }, type: 1 }
          ],
          headerType: 1
        })
      }
    }
  }, {});

  await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
}

handler.command = /^(menu2|help2|ayuda2)$/i;

export default handler;
