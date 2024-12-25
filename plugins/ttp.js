// bahaya juga njir kalo viral awkwkowwowk
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh penggunaan: ${usedPrefix + command} Crot Crot`;
let stiker = await sticker(null, `https://btch.us.kg/ttp?text=${text}`, '', '')
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)  
} 

handler.help = ['ttp']
handler.tags = ['sticker']
handler.command = /^(ttp)$/i
handler.limit = 10 //biar gak spam
handler.register = true // biar daftar dlu
export default handler
