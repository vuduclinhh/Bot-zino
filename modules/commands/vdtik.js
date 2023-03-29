module.exports.config = {
    name: "vdtik",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tải xuống video từ tiktok không logo",
    commandCategory: "Phương tiện",
    usages: "[link]",
    cooldowns: 5
};
module.exports. run = async function({ api, event, args, Currencies, utils }) {
    const { threadID, messageID } = event;
    const { resolve } = require('path')
    const { createReadStream, unlinkSync } = require("fs-extra");

    const link = args.join(' ');
    if(!link) return api.sendMessage('Vui lòng nhập link cần tải!', threadID, messageID);

    const path = resolve(__dirname, 'cache', `tikvideo.mp4`);
    const data = await global.utils.getTiktok(link);
    if(data.status == undefined) return api.sendMessage('Không thể tải từ link này, vui lòng thử lại với một link khác', threadID, messageID);
    await global.utils.downloadFile(data.item.video.playAddr[0], path);
    return api.sendMessage({ 
        body: `[👤] Author: ${data.item.author.nickname}\n[👑] Mô tả: ${data.item.desc}\n[🎵] Nhạc nền: ${data.item.music.title}\n\n💿====DISME PROJECT====💿`,
        attachment: createReadStream(path)}, 
    threadID, () => unlinkSync(path), messageID);
}
