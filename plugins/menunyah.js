import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, usedPrefix: _p }) => {

let Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

let loadd = [
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
    "✅"
  ]

let { key } = await conn.sendMessage(m.chat, {text: '⌛'})//Pengalih isu

for (let i = 0; i < loadd.length; i++) {
  await new Promise(resolve => setTimeout(resolve, 850));
await conn.sendMessage(m.chat, {text: loadd[i], edit: key })}
let rapikz = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, thumbnail: await conn.resize(await getBuffer(thumb),300,150), surface: 1, message: 'bot wa', orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let user = `@${m.sender.split('@')[0]}`
    
  
let tags = {}
const defaultMenu = {
  before: `*MENU BOTNYA🗿*
`.trimStart(),
  header: '❖━━━━━━[ *%category* ]━━━━━━❖\n╔═━───╍━╍╍┄',
  body: `╠➺ %cmd %islimit %isPremium `,
  footer: '╚═─━╍╍━╍╾',
  after: `BOT WA VERSION ${global.version}`,
}
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })
    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Kolkata' })
    time = time.replace(/[.]/g, ':')
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    
    let bjir = 'https://files.catbox.moe/bu8wwt.jpg'
    let totalreg = Object.keys(global.db.data.users).length
    let platform = os.platform()
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      name, date, time, platform, _p, totalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

 conn.sendMessage(m.chat, {
      video: { url: 'https://files.catbox.moe/ewpwo3.mp4' },
            mimetype: 'video/mp4',
            fileLength: 1000000,
            caption: Styles(text),
            gifPlayback: true,
            gifAttribution: 5,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    forwardingScore: 0,
                    title: 'ᴍ ᴇ ɴ ᴜ  ʙ ᴏ ᴛ',
                    thumbnailUrl: 'https://files.catbox.moe/pimrlz.jpg',
                    sourceUrl: 'https://s.id/rapikzhahay',
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    mentionedJid: [m.sender]
                     }}}, { quoted: m })
                     /*
                     await conn.sendMessage(
            m.chat, {
                audio: {
                    url: 'https://files.catbox.moe/b5npkg.opus',
                },
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
                    externalAdReply: {
                        title: 'Bot We Ahh',
                        body: 'YA GIMANA YA, YA BEGITUH',
                        mediaType: 1,
                        thumbnailUrl: 'https://files.catbox.moe/bu8wwt.jpg',
                        renderLangerThumbnail: true,
                    },
                },
            }, {
                quoted: m,
            },
        )
    } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
*/
await conn.sendFile(m.chat, "https://files.catbox.moe/b5npkg.opus", 'menu.mp3', null, m, true, {
 type: 'audioMessage',  
 ptt: true, contextInfo: { forwardingScore: 999, isForwarded: false, externalAdReply: {title: 'YAYAYA', body: "YA GIMANA YA, YA BEGITUH", sourceUrl: 'https://whatsapp.com/channel/0029VaoJb11LikgEpNpBty0e', thumbnail: await (await fetch("https://files.catbox.moe/bu8wwt.jpg")).buffer(),}}  
  }) 
    } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.command = /^(menu|help)$/i
handler.daftar = false

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

/*
await conn.sendMessage(m.chat, {
            caption: cap,
            video: {
                url: vid.media,
                mimetype: "video/mp4"
            }
        }, m)
    } else {        
        conn.sendMessage(
            m.chat, {
                audio: {
                    url: 'https://files.catbox.moe/ffuyiv.mp3',
                },
                mimetype: "audio/mpeg",
                ptt: true,
                contextInfo: {
                    externalAdReply: {
                        title: 'Bot We Ahh',
                        body: 'YAYAYA😹',
                        mediaType: 1,
                        thumbnailUrl: 'https://files.catbox.moe/29ngei.png',
                        renderLangerThumbnail: true,
                    },
                },
            }, {
                quoted: m,
            },
        );
    }
}
*/
