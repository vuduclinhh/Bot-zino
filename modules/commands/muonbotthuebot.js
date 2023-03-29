/*
» Có lỗi LH FB: fb.com/levy.nam.2k5
*/
module.exports.config = {
    name: "muonbotthuebot",
    version: "1.1.1",
    hasPermssion: 2,
    credits: "N1002",
    description: "Gửi tin nhắn đến tấy cả nhóm và reply để phản hồi",
    commandCategory: "Hệ thống",
    usages: "text",
    cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "chỉ có tệp" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`!! 𝐁𝐚̣𝐧 𝐂𝐡𝐮̛𝐚 𝐍𝐡𝐚̣̂𝐩 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠`, tid, mid);
    var msg = `🔔====𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢====🔔\n━━━━━━━━━━━━━━━━━━\n💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸\n➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟎𝐤/𝘁𝗵\n➝ Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶\n➝ 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻\n━━━━━━━━━━━━━━━━━━\n⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️\n➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟰𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻\n➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶\n━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`✅ 𝐆𝐮̛̉𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 ${r} 𝐧𝐡𝐨́𝐦`, tid, mid)).catch(async(err) => api.sendMessage(`❌ 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐠𝐮̛̉𝐢 𝐭𝐡𝐨̂𝐧𝐠 𝐛𝐚́𝐨 𝐭𝐨̛́𝐢 ${err} 𝐧𝐡𝐨́𝐦`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `📩 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐮̛̀ 𝐔𝐬𝐞𝐫: ${(await Users.getData(sid)).name}\n🎀 𝐍𝐡𝐨́𝐦: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏱ 𝐓𝐢𝐦𝐞: ${fullTime()}\n\n📝 𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: ${atm == "nofile" ? body : "𝐂𝐡𝐢̉ 𝐜𝐨́ 𝐭𝐞̣̂𝐩 𝐭𝐨̛́𝐢 𝐛𝐚̣𝐧"}\n\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐧𝐞̂́𝐮 𝐦𝐮𝐨̂́𝐧 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐨̛́𝐢 𝐔𝐬𝐞𝐫 💬\n➩ 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐆𝐮̛̉𝐢: https://www.facebook.com/${event.senderID}${event.senderID}`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`📨 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 𝐀𝐝𝐦𝐢𝐧 ${(await Users.getData(h.author)).name} và ${+r1-1} 𝐀𝐝𝐦𝐢𝐧 𝐤𝐡𝐚́𝐜`, tid, mid)).catch(async(err) => api.sendMessage(`❌ 𝐊𝐡𝐨̂𝐧𝐠 𝐭𝐡𝐞̂̉ 𝐩𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐨̛́𝐢 ${err} 𝐀𝐝𝐦𝐢𝐧`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `📩 𝐏𝐡𝐚̉𝐧 𝐇𝐨̂̀𝐢 𝐓𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧 ${(await Users.getData(sid)).name}\n⏱ 𝐓𝐢𝐦𝐞: ${fullTime()}\n\n📝 𝐍𝐨̣̂𝐢 𝐃𝐮𝐧𝐠: ${atm == "nofile" ? body : "𝐂𝐡𝐢̉ 𝐂𝐨́ 𝐓𝐞̣̂𝐩 𝐓𝐨̛́𝐢 𝐁𝐚̣𝐧"}\n\n» » 𝐑𝐞𝐩𝐥𝐲 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐍𝐚̀𝐲 𝐍𝐞̂́𝐮 𝐌𝐮𝐨̂́𝐧 𝐏𝐡𝐚̉𝐧 𝐇𝐨̂̀𝐢 𝐕𝐞̂̀ 𝐀𝐝𝐦𝐢𝐧 💬\n➩ 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐆𝐮̛̉𝐢: https://www.facebook.com/${event.senderID}`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`📨 📨 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐭𝐨̛́𝐢 𝐔𝐬𝐞𝐫 ${(await Users.getData(h.idUser)).name} 𝐭𝐚̣𝐢 𝐧𝐡𝐨́𝐦 ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};