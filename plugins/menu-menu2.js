import { getName } from './lib/functions.js'; // Asegúrate de que la ruta sea correcta
import { sendButton } from './lib/whatsapp.js'; // Asegúrate de que la ruta sea correcta

const handler = async (m, { conn, command, usedPrefix }) => {
  let image = 'https://telegra.ph/file/fe190c9ca575ab19161e9.jpg';
  let name = await getName(m.sender);
  let uptime = process.uptime() * 1000;
  let uptimeString;
  if (process.uptime) {
    process.uptime('uptime');
    uptimeString = await new Promise(resolve => {
      process.once('uptime', resolve);
      setTimeout(resolve, 1000);
    }) * 1000;
  }
  let clock = clockString(uptime);
  let message = `
🌸 𝘏𝘰𝘭𝘢! 𝘴𝘰𝘺 _Yumiko Bot 🌸
꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷*
🌸 𝘉𝘰𝘵 𝘦𝘯 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘰 🌸
🌸 𝘚𝘪𝘨𝘶𝘦𝘮𝘦 𝘦𝘯 𝘮𝘪 𝘤𝘢𝘯𝘢𝘭 🌸
`;
  await sendButton(m.chat, message, 'info', image, [['📚 Menu 📚', '.allmenu'], ['🫅 Creador 🫅', '.owner']], null, [['🌸 Canal 🌸', fgcanal]], m);
};

handler.help = ['menu4'];
handler.tags = ['info4'];
handler.command = /^(menu4?)$/i;
export default handler;

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}
