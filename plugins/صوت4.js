let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {

    const vn = './media/el7elm.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `el7elm.mp3`}, {quoted: m});
};

handler.help = ['notification']
handler.tags = ['notification']
handler.command = ['حلم'] 
handler.customPrefix = /^(حلم|الحلم)$/i;
handler.command = new RegExp;
export default handler