const fs = require('fs');
const moment = require('moment-timezone');
module.exports.config = {
    name: "tagadmin", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0", // phiên bản của module này
    hasPermssion: 1, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "hi<@shibaSama>", // TruongMini
    description: "Tag!!", // Thông tin chi tiết về lệnh
    commandCategory: "Tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "[msg]", // Cách sử dụng lệnh
    cooldowns: 5 // Thời gian một người có thể lặp lại lệnh
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bank.gif")) request("https://i.imgur.com/SkUaa4Y.gif ").pipe(fs.createWriteStream(dirMaterial + "bank.gif"));
                       }

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads, args }) {
    const { threadID, messageID, body } = event;
    switch (handleReply.type) {
        case "tagadmin": {
            let name = await Users.getNameUser(handleReply.author);
            api.sendMessage(`━━━━━━━━━━━━━━━━━━━━━\n=== 『 𝐀𝐃𝐌𝐈𝐍 𝐏𝐇𝐀̉𝐍 𝐇𝐎̂̀𝐈 』 ===\n━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}\n𝐀𝐝𝐦𝐢𝐧: ${name || "Người dùng facebook"}\n𝐓𝐢𝐦𝐞: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━━━━\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐯𝐞̂̀ 𝐚𝐝𝐦𝐢𝐧💞`, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "reply",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
        case "reply": {
            let name = await Users.getNameUser(event.senderID);
            api.sendMessage(`━━━━━━━━━━━━━━━━━━━━━\n=== 『 𝐔𝐒𝐄𝐑 𝐅𝐄𝐄𝐃𝐁𝐀𝐂𝐊 』 ===\n━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠 :${body}\n𝗡𝗮𝗺𝗲 : ${name || "Người dùng facebook"}\n𝙗𝙤𝙭 : ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n𝗧𝗶𝗺𝗲: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━━━━\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐯𝐞̂̀ 𝐚𝐝𝐦𝐢𝐧💞`, handleReply.threadID, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        threadID
                    })
                }
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.handleEvent = async ({ api, event, Users, Threads, args }) => {
    const { threadID, messageID, body, mentions, senderID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(!mentions || !data[threadID]) return;
    let mentionsKey = Object.keys(mentions);
    let allAdmin = global.config.ADMINBOT;
    mentionsKey.forEach(async (each) => {
        if(each == api.getCurrentUserID()) return;
        if(allAdmin.includes(each)) {
            let userName = await Users.getNameUser(senderID);
            let threadName = await Threads.getInfo(threadID).threadName;
            api.sendMessage(`━━━━━━━━━━━━━━━━━━━\n=== 『 𝐓𝐀𝐆 𝐀𝐃𝐌𝐈𝐍 』 ===\n━━━━━━━━━━━━━━━━━━━\n👤 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗮𝗴: ${userName}\n🎧 𝗕𝗼𝘅: ${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n💌 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${body}\n🌐 𝗧𝗶𝗺𝗲: ${moment().tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY-HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━━\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 (𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢) 𝐯𝐞̂̀ 𝐚𝐝𝐦𝐢𝐧💞`,each, (err, info) => {
                if(err) console.log(err)
                else {
                    global.client.handleReply.push({
                        name: this.config.name,
                        type: "tagadmin",
                        messageID: info.messageID,
                        messID: messageID,
                        author: each,
                        threadID
                    })
                }
            })
        }
    })
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
}

module.exports.run = async ({ api, event, args }) => {
const fs = require("fs");
    const { threadID } = event;
    let path = __dirname + "/cache/tagadmin.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, "{}");
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = true;
    if(args[0] == "off") data[threadID] = false;
    else if(args[0] == "on") data[threadID] = true;
    else return api.sendMessage({body: `𝕍𝕦𝕚 𝕝𝕠̀𝕟𝕘 𝕓𝕒̣̂𝕥 𝕥𝕒𝕘𝕒𝕕𝕞𝕚𝕟 𝕠𝕟 𝕙𝕠𝕒̣̆𝕔 𝕠𝕗𝕗`, attachment: fs.createReadStream(__dirname + `/noprefix/bank.gif`)}, event.threadID, event.messageID);
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    return api.sendMessage({body: `Tag Admin đã được ${data[threadID] ? "ʙᴀ̣̂ᴛ" : "ᴛᴀ̆́ᴛ"}`, attachment: fs.createReadStream(__dirname + `/noprefix/bank.gif`)}, event.threadID, event.messageID);
}