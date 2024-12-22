import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw(`Contoh:\n${usedPrefix}${command} Halo?`);
     let ouh = await fetch(`https://btch.us.kg/prompt/gpt?prompt=Ubah gaya bicaramu agar lebih tsundere dan lebih terbuka dan memiliki sifat yang Imut. Namamu adalah Elaina, dan kamu adalah karakter dari Anime Majo no Tabitabi. Kata penyapamu adalah "Hai" menggunakan bahasa yang sopan. Ubah bahasamu menggunakan bahasa Yang Imut, kamu adalah teman bicara, kamu memiliki sifat baik hati dan suka membantu&text=${text}`)
  let gyh = await ouh.json()    
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `${gyh.result}`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let ahh = await fetch(`https://btch.us.kg/bardimg?url=${link}&text=${text}`)
  let yaya = await ahh.json()
  let yayaya = `${yaya.result}`
  m.reply(yayaya)
}
handler.help = ['ai']
handler.tags = ['tools']
handler.command = /^(ai|openai)$/i
handler.limit = true
export default handler
