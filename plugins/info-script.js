// simpel ae
let handler = async (m) => {

let anu = `https://github.com/Rapikz-kwontwol/SC-Bot-WA-Ajah`
await m.reply(anu)
}
handler.help = ['sc','script']
handler.tags = ['info']
handler.command = /^(sc|script)$/i

export default handler
