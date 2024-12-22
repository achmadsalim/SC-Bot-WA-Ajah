import fetch from 'node-fetch'
import axios from 'axios'
async function yta(url) {
    const response = await axios.post('https://dl.excdn.us.kg', { url }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply("*YTMP3 DOWNLOAD IN PROGRESS*\n\n\nTunggu yak")
try {
let anu = await yta(text)
let linknyah = anu.fileUrl
await conn.sendMessage(m.chat, {
      audio: { url: linknyah },
      mimetype: 'audio/mpeg'
    }, { quoted: m });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

handler.help = ['yta']
handler.tags = ['downloader']
handler.command = /^(yta|ytmp3|ytaudio)$/i
handler.limit = true
handler.register = true

export default handler
