import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya Mana?`
m.reply(wait)
let anu = await fetch(`https://api.betabotz.eu.org/api/download/yt?url=${text}&apikey=btzziaulhaq`)
let apayah = await anu.json()    
let linknyah = apayah.result.mp4
conn.sendFile(m.chat, linknyah, null, 'Nih vidnya kak', m)
}
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^(ytv|ytvideo|ytmp4)$/i
handler.limit = true
handler.register = true
export default handler
