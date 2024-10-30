import axios from 'axios';

async function mp4(url) {
  try {
    const response = await fetch("https://api.zeemo.ai/hy-caption-front/api/v1/video-download/yt-dlp-video-info", {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accept': "*/*",
        'User-Agent': 'Postify/1.0.0'
      },
      body: JSON.stringify({
        url: url,
        videoSource: 3
      })
    });

    const data = await response.json();
    return {
      status: true,
      creator: "@Bang_syaii",
      title: data.data.videoName,
      url: data.data.sourceVideoUrl,
      media: data.data.downloadUrl
    };
  } catch (error) {
    return {
      status: false,
      msg: "Data tidak dapat di temukan !"
    };
  }
}

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    
    let url = text;

    if (!url && m.quoted) {
        // Mencari URL di teks pesan yang di-reply
        let quotedText = m.quoted.text || m.quoted.url;
        let extractedUrl = quotedText ? quotedText.match(urlRegex) : null;
        if (extractedUrl) {
            url = extractedUrl[0];
        }
    }

    if (!url) throw `*📝 Example:* ${usedPrefix + command} *[YouTube URL]* atau reply dengan URL`;

    conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    try {
        let download = await mp4(url);
        let caption = `${download.title}`;
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
        await conn.sendMessage(m.chat, {
            video: {
                url: download.media,
            },
            caption: caption,
        }, {
            quoted: m,
        });

    } catch (e) {
        throw `❌ Error: ${e.message || e}`;
    }
};

handler.help = ["ytmp4", "ytv"];
handler.tags = ["downloader"];
handler.command = /^(ytmp4|ytv)$/i;
handler.exp = 0;
handler.register = true;
handler.limit = true;

export default handler;
