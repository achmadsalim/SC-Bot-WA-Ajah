const { generateWAMessageContent, generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default;

const handler = async (m, { conn, command, text, usedPrefix }) => {
let name = m.pushName || conn.getName(m.sender);
let pan = INI OWNERKU KAK

const url = "https://telegra.ph/file/b8a7ca17b5925a920dea9.jpg"
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
                text: pan   },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                    body: { text: 
CHAT OWNERKU },
                    nativeFlowMessage: {
                      buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: {"display_text":" Chat Owner ","url":"https://wa.me/6281312651566","merchant_url":"https://wa.me/6281312651566"}
                  },
                      ],
                    },
                  },
                  
                  {
                    header: {
                      imageMessage: await image(url),
                      hasMediaAttachment: true,
                    },
                                        body: { text: 
NOMOR BOT KU },
                    nativeFlowMessage: {
                      buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: {"display_text":" Chat Bot","url":"https://wa.me/6281572920773","merchant_url":"https://wa.me/6281572920773"}
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
handler.command = /^(owner)$/i;
export default handler
