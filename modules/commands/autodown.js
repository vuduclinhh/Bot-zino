const configCommand = {
    name: 'autodown',
    version: '1.1.1',
    hasPermssion: 2,
    credits: 'DC-Nam',
    description: 'Tự động tải xuống khi phát hiện liên kết video tiktok',
    commandCategory: 'Tiện ích',
    usages: '[]',
    cooldowns: 3
},
axios = require('axios'),
reqStreamURL = async url => (await axios.get(url, {
    responseType: 'stream'
})).data,
statusAuto = {};
async function noprefix(arg) {

    if (!statusAuto[arg.event.threadID] || arg.event.senderID == arg.api.getCurrentUserID()) return;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID),
    arr = arg.event.args,
    regEx_tiktok = /https:\/\/((vt)\.)?(tiktok)\.com\//;
    if(arg.event.type == 'message_reply') arr.push(...arg.event.messageReply.args);
    for (const el of arr) {
        /* TỰ ĐỘNG TẢI VIDEO TIKTOK */
        if (regEx_tiktok.test(el)) {
          const data = (await axios.post(`https://www.tikwm.com/api/`, {
                url: el
            })).data.data;

            out({
               body: `==== 𝗧𝗜𝗞𝗧𝗢𝗞 𝗩𝗜𝗗𝗘𝗢 ====\n━━━━━━━━━━━━━━━━━━\n→ Tiêu Đề: ${data.title}.\n→ Lượt Thích: ${data.digg_count}.\n→ Lượt Bình Luận: ${data.comment_count}\n→ Lượt Chia Sẻ: ${data.share_count}\n→ Lượt Tải: ${data.download_count}\n\n====== ${time} ======` ,attachment: await reqStreamURL(data.play)}); // Video không logo thì sửa "wmplay" -> "play";
        };
        /* END */
    };
};
function runCommand(arg) {
    const out = (a, b, c, d) => arg.api.sendMessage(a, b?b: arg.event.threadID, c?c: null, d?d: arg.event.messageID);
    try {
        s = statusAuto[arg.event.threadID] = !!statusAuto[arg.event.threadID]?false: true;
        out((s?'Bật': 'Tắt')+' '+configCommand.name);
    }catch(e) {
        out(e);
    };
};

module.exports = {
    config: configCommand,
    run: runCommand,
    handleEvent: noprefix
}