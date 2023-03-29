const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "send",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "TruongMini, mod by NHHB",
    description: "",
    commandCategory: "Tiện ích",
    usages: "[msg]",
    cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `[ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗨𝘀𝗲𝗿 ]\n𝗧𝗶𝗺𝗲: ${gio}\n\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${body}\n\n𝗧𝘂̛̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 ${name} 𝗧𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `[ 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗨𝘀𝗲𝗿 ]\n𝗧𝗶𝗺𝗲: ${gio}\n\n𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: ${body}\n\n𝗧𝘂̛̀ 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 ${name} 𝗧𝗿𝗼𝗻𝗴 𝗻𝗵𝗼́𝗺 ${(await Threads.getInfo(threadID)).threadName || "Unknow"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `[ 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ]\n𝗧𝗶𝗺𝗲: ${gio}\n\n𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: ${body}\n\n𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ${name} \n𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 Đ𝗲̂̉ 𝗚𝘂̛̉𝗶 𝗩𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}[ 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ]\n⏰𝗧ime:${gio}\n\n👤𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ${name}\n𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 Đ𝗲̂̉ 𝗚𝘂̛̉𝗶 𝗩𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("Please input message", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `[ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ]\n⏰𝗧𝗶𝗺𝗲: ${gio}\n\n💬𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: ${args.join(" ")}\n\n👤𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ${await Users.getNameUser(senderID)} \n𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 Đ𝗲̂̉ 𝗚𝘂̛̉𝗶 𝗩𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `[ 𝗧𝗵𝗼̂𝗻𝗴 𝗕𝗮́𝗼 𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ]\n⏰𝗧𝗶𝗺𝗲: ${gio}\n\n💬𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴: ${args.join(" ")}\n\n👤𝗧𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ${await Users.getNameUser(senderID)} \n𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 Đ𝗲̂̉ 𝗚𝘂̛̉𝗶 𝗩𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`𝗗𝗮̃ 𝗴𝘂̛̉𝗶 𝘁𝗼̛́𝗶 ${can} 𝗻𝗵𝗼́𝗺, 𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗵𝗲̂̉ 𝗴𝘂̛̉𝗶 𝘁𝗼̛́𝗶 ${canNot} 𝗻𝗵𝗼́𝗺`,threadID);
}