module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",//Update by ThanhAli
	description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`『 ${global.config.PREFIX} 』 • ${(!global.config.BOTNAME) ? "💤" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━\n► 𝐊𝐞̂́𝐭 𝐍𝐨̂́𝐢 𝐁𝐨𝐭 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ◄\n━━━━━━━━━━━━━━━━━━\n
➝『🌎』𝙏𝙝𝙞𝙚̂́𝙩 𝙇𝙖̣̂𝙥 𝙏𝙝𝙖̀𝙣𝙝 𝘾𝙤̂𝙣𝙜 𝘽𝙖̆𝙣𝙜 𝙉𝙝𝙤́𝙢 𝘾𝙪̉𝙖 𝘽𝙖̣𝙣 𝙑𝙪𝙞 𝙇𝙤̀𝙣𝙜 Đ𝙤̣𝙘 𝙉𝙝𝙪̛̃𝙣𝙜 𝙇𝙪̛𝙪 𝙔́ 𝙎𝙖𝙪 Đ𝙖̂𝙮
➝『📱』𝗗𝘂̀𝗻𝗴 !𝗠𝗲𝗻𝘂 𝗮𝗹𝗹 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗧𝗮̂́𝘁 𝗖𝗮̉ 𝗟𝗲̣̂𝗻𝗵 Đ𝗮𝗻𝗴 𝗖𝗼́ 𝗧𝗿𝗲̂𝗻 𝗕𝗼𝘁
➝『❌』Không chửi bot k spam bot sẽ auto ban!
➝『❗』𝗖𝗼́ 𝗩𝗮̂́𝗻 Đ𝗲̂̀ 𝗧𝗵𝗮̆́𝗰 𝗠𝗮̆́𝗰 𝗗𝘂̀𝗻𝗴 .𝗖𝗮𝗹𝗹𝗮𝗱 𝗞𝗲̀𝗺 𝗡𝗼̣̂𝗶 𝗗𝘂𝗻𝗴 Đ𝗲̂̉ 𝗚𝘂̛̉𝗶 Đ𝗲̂́𝗻 𝗔𝗱𝗺𝗶𝗻 🦖
➝『🔊』𝙏𝙧𝙖́𝙣𝙝 !𝘾𝙖𝙡𝙡𝙖𝙙 𝙉𝙝𝙖̃𝙢 Đ𝙚̂̉ 𝙏𝙧𝙖́𝙣𝙝 𝙏𝙞̀𝙣𝙝 𝙏𝙧𝙖̣𝙣𝙜 𝘼𝙙𝙢𝙞𝙣 𝘽𝙖𝙣𝙙 24𝙝
➝『😞』Admin Vẫn Chưa Có Người Yêu Đâu =))
➝『😘』Hạn chế sài lệnh không có trong bot
➝『😍』Bot trên đà hoàn thiện nhé !
➝『🥴』Chửi bot auto ban thì không quạo nhé! ngu thì chết khóc lóc éo gì
➝『🥲』Yêu Tất Cả Mọi Người
➝『🌹』𝗖𝗮́𝗺 𝗼̛𝗻 𝗕𝗮̣𝗻 Đ𝗮̃ 𝗧𝗶𝗻 𝗧𝘂̛𝗼̛̉𝗻𝗴 𝗩𝗮̀ 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 𝗕𝗼𝘁 𝗡𝗮̀𝘆 ❤𝘽𝙤𝙩 Đ𝙪̛𝙤̛̣𝙘 𝙏𝙝𝙪̛̣𝙘 𝙃𝙞𝙚̣̂𝙣 𝘽𝙤̛̉𝙞 𝘼𝙙𝙢𝙞𝙣 Nguyen Thanh Loc😍❤️
➝『📝』𝐂𝐡𝐮́𝐜 𝐌𝐨̣𝐢 𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐒𝐮̛̉ 𝐃𝐮̣𝐧𝐠 𝐁𝐨𝐭 𝐕𝐮𝐢 𝐕𝐞̉💕
➝『☎』𝐌𝐨̣𝐢 𝐓𝐡𝐚̆́𝐜 𝐌𝐚̆́𝐜 𝐕𝐮𝐢 𝐋𝐨̀𝐧𝐠 𝐢𝐧𝐛𝐨𝐱 𝐓𝐫𝐮̛̣𝐜 𝐓𝐢𝐞̂́𝐩 𝐂𝐡𝐨 𝐀𝐝𝐦𝐢𝐧
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝘼𝙙𝙢𝙞𝙣 𝙉𝙚̀: 𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/100083980911228 `, attachment: fs.createReadStream(__dirname + "/cache/botnoti/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐓𝐡𝐚̀𝐧𝐡 𝐕𝐢𝐞̂𝐧 𝐌𝐨̛́𝐢\n━━━━━━━━━━━━\n→ •[🎊]𝗫𝗶𝗻 𝗰𝗵𝗮̀𝗼 {name} 𝐭𝐨̛́𝐢 𝐯𝐨̛́𝐢 𝐧𝐡𝐨́𝐦 {threadName}\n→ [🌐] 𝗟𝗶𝗻𝗸 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 :\nhttps://www.facebook.com/{iduser}\n→ {type} 𝐥𝐚̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐭𝐡𝐮̛́ {soThanhVien} 𝐜𝐮̉𝐚 𝐧𝐡𝐨́𝐦\n→ [🌹]𝗕𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author}\n━━━━━━━━━━━━\n→ [⏰]𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: {time}\n→ 𝐇𝐚̃𝐲 𝐜𝐡𝐚̆𝐦 𝐜𝐡𝐢̉ 𝐭𝐮̛𝐨̛𝐧𝐠 𝐭𝐚́𝐜 đ𝐞̂̉ 𝐤𝐡𝐨̂𝐧𝐠 𝐛𝐢̣ đ𝐚́ 𝐤𝐡𝐨̉𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐞́ 💤": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "𝐍𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠 𝐭𝐮̛̣ 𝐯𝐚̀𝐨" : getData.name
			msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐛𝐚̣𝐧' : '𝐁𝐚̣𝐧')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
      }