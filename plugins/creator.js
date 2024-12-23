const { generateWAMessageContent, generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default;

const handler = async (m, { conn, command, text, usedPrefix }) => {
let name = m.pushName || conn.getName(m.sender);
let duar = `INI OWNERKU KAK`
let botnyah = conn.user.jid.split`@`[0]
const url1 = "https://files.catbox.moe/mp6330.jpg"
const url2 = "https://files.catbox.moe/lbrrgo.jpg"
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: conn.waUploadToServer
  })
  return imageMessage
}


    let msg = generateWAMessageFromContent(
      m.chat,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: duar   },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url1),
                      hasMediaAttachment: true,
                    },
                    body: { text: 
`CHAT OWNERKU` },
                    nativeFlowMessage: {
                      buttons: [
                  {
                    "name": "cta_url",
            "buttonParamsJson": `{"display_text":"CHAT OWNER","url":"https://wa.me/${global.nomorown}","merchant_url":"https://wa.me/${global.nomorown}"}`
                  },
                      ],
                    },
                  },
                  
                  {
                    header: {
                      imageMessage: await image(url2),
                      hasMediaAttachment: true,
                    },
                                        body: { text: 
`NOMOR BOT KU` },
                    nativeFlowMessage: {
                      buttons: [
                  {
"name": "cta_url",
            "buttonParamsJson": `{"display_text":"CHAT BOT","url":"https://wa.me/${botnyah}","merchant_url":"https://wa.me/${botnyah}"}`
                  },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      {}
    )

    await conn.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id,
    });
    }

handler.help = ["owner"];
handler.tags = ["main"];
handler.command = /^(owner|creator)$/i;
export default handler
