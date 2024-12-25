// Play YouTube By Mana Ku tw
// screp : https://whatsapp.com/channel/0029VavOkL00lwgmRLmffH1i/159
import axios from "axios";
import yts from "yt-search";
import fetch from 'node-fetch';

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

const ddownr = {
  download: async (url, format) => {
    if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
      throw new Error('Format tidak didukung, cek daftar format yang tersedia.');
    }

    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      const response = await axios.request(config);

      if (response.data && response.data.success) {
        const { id, title, info } = response.data;
        const { image } = info;
        const downloadUrl = await ddownr.cekProgress(id);

        return {
          id: id,
          image: image,
          title: title,
          downloadUrl: downloadUrl
        };
      } else {
        throw new Error('Gagal mengambil detail video.');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
  cekProgress: async (id) => {
    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      while (true) {
        const response = await axios.request(config);

        if (response.data && response.data.success && response.data.progress === 1000) {
          return response.data.download_url;
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};
function formats(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return views.toString();
}

const handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Masukkan Judul / Link Dari YouTube!';
  try {
    let data = (await yts(text)).all
    let hasil = data[~~(Math.random() * data.length)]
    if (!hasil) throw 'Video/Audio Tidak Ditemukan';
    if (hasil.seconds >= 7200) {
      return conn.reply(m.chat, 'Video lebih dari 2 jam!', m);
    } else {
      let audioUrl;
      try {
        audioUrl = await ddownr.download(hasil.url, "mp3")
      } catch (e) {
        conn.reply(m.chat, 'Tunggu sebentar...', m);
        audioUrl = await ddownr.download(video.url, "mp3");
      }

      let caption = '';
      caption += `∘ Judul : ${hasil.title}\n`;
      caption += `∘ Ext : Search\n`;
      caption += `∘ ID : ${hasil.videoId}\n`;
      caption += `∘ Durasi : ${hasil.timestamp}\n`;
      caption += `∘ Penonton : ${hasil.views}\n`;
      caption += `∘ Diunggah : ${hasil.ago}\n`;
      caption += `∘ Penulis : ${hasil.author.name}\n`;
      caption += `∘ Channel : ${hasil.author.url}\n`;
      caption += `∘ Url : ${hasil.url}\n`;
      caption += `∘ Deskripsi : ${hasil.description}\n`;
      caption += `∘ Thumbnail : ${hasil.image}`;

      await conn.relayMessage(m.chat, {
        extendedTextMessage: {
          text: caption,
          contextInfo: {
            externalAdReply: {
              title: hasil.title,
              mediaType: 1,
              previewType: 0,
              renderLargerThumbnail: true,
              thumbnailUrl: hasil.image,
              sourceUrl: audioUrl.downloadUrl
            }
          },
          mentions: [m.sender]
        }
      }, {});

      await conn.sendMessage(m.chat, {
        audio: {
          url: audioUrl.downloadUrl
        },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: hasil.title,
            body: "",
            thumbnailUrl: hasil.image,
            sourceUrl: audioUrl.downloadUrl,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true
          }
        }
      }, {
        quoted: m
      });
    }
  } catch (e) {
    conn.reply(m.chat, `*Error:* ` + e.message, m);
  }
};

handler.command = handler.help = ['play2', 'song2'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;

export default handler;
