module.exports.config = {
	name: "sendnoti",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Địt Mẹ ?",
	description: "Gửi tin nhắn tới các nhóm(reply vào ảnh/video cần gửi kèm)!\nPhiên bản xịn hơn của sendnotiUwU",
	commandCategory: "Admin",
	usages: "Ryo Là Số 1",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"sendSuccess": "𝗚𝘂̛̉𝗶 𝗧𝗶𝗻 𝗧𝘂̛́𝗰 𝗧𝗼̛́𝗶 %1 𝗡𝗵𝗼́𝗺 𝗥𝗼̂̀𝗶 𝗘̂́𝘆",
		"sendFail": "𝗞𝗵𝗼̂𝗻𝗴 𝗧𝗵𝗲̂̉ 𝗚𝘂̛̉𝗶 𝗧𝗶𝗻 𝗧𝘂̛́𝗰 𝗧𝗼̛́𝗶 %1 𝗡𝗵𝗼́𝗺 𝗗𝗼 𝗕𝗼̣𝗻 𝗟𝗼̂̀𝗻 𝗞𝗶𝗰𝗸 𝗕𝗼𝘁"
	},
	"en": {
		"sendSuccess": "Sent message to %1 thread!",
		"sendFail": "[!] Can't send message to %1 thread"
	}
}

module.exports.run = async ({ api, event, args, getText, Users }) => {
  const permission = ["100047128875560"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("𝐁𝐚̣𝐧 𝐓𝐮𝐨̂̉𝐢 𝐂𝐨𝐧 𝐂𝐚̣̆𝐜 𝘿𝐨̀𝐢 𝐃𝐮̀𝐧𝐠 , 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐈𝐛𝐨𝐱 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧 𝘿𝙪̛𝙤̛𝙣𝙜 𝙏𝙖̂́𝙣 𝙋𝙝𝙖́𝙩 𝘿𝐞̂̉ 𝐍𝐡𝐚̣̂𝐧 𝐋𝐞̣̂𝐧𝐡  ", event.threadID, event.messageID);
  const name = await Users.getNameUser(event.senderID)
const moment = require("moment-timezone");
      var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");  
if (event.type == "message_reply") {
const request = global.nodemodule["request"];
const fs = require('fs')
const axios = require('axios')
			var getURL = await request.get(event.messageReply.attachments[0].url);
			
					var pathname = getURL.uri.pathname;
var ext = pathname.substring(pathname.lastIndexOf(".") + 1);
			
					var path = __dirname + `/cache/snoti`+`.${ext}`;


var abc = event.messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, { responseType: 'arraybuffer' })).data;

  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'));

	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage({body: `𖠌 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧☏︎\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${timeNow}\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠:
 ` + args.join(` `) + ``,attachment: fs.createReadStream(path) }, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID);

}
else {
	var allThread = global.data.allThreadID || [];
	var count = 1,
		cantSend = [];
	for (const idThread of allThread) {
		if (isNaN(parseInt(idThread)) || idThread == event.threadID) ""
		else {
			api.sendMessage(`»𖠌 𝐓𝐡𝐨̂𝐧𝐠 𝐁𝐚́𝐨 𝐀𝐝𝐦𝐢𝐧 ☏︎«\n𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${timeNow}\n𝐆𝐮̛̉𝐢 𝐭𝐮̛̀ 𝐀𝐝𝐦𝐢𝐧: ${name}\n𝐍𝐨̣̂𝐢 𝐝𝐮𝐧𝐠:
 ` + args.join(` `) + ``, idThread, (error, info) => {
				if (error) cantSend.push(idThread);
			});
			count++;
			await new Promise(resolve => setTimeout(resolve, 500));
		}
	}
	return api.sendMessage(getText("sendSuccess", count), event.threadID, () => (cantSend.length > 0 ) ? api.sendMessage(getText("sendFail", cantSend.length), event.threadID, event.messageID) : "", event.messageID); }
                 }