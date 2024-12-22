import fetch from 'node-fetch'
import axios from 'axios'

async function ytv(url) {
    const response = await axios.post('https://dl.excdn.us.kg/video', { url }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    return response.data
}
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
let anu = await ytv(text)
let linknyah = anu.fileUrl
conn.sendFile(m.chat, linknyah, null, 'Nih vidnya kak', m)
}
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^(ytv|ytvideo|ytmp4)$/i
handler.limit = true
handler.register = true

export default handler
