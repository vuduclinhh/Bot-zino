module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐛𝐮𝐨̂̉𝐢 𝐬𝐚́𝐧𝐠 𝐬𝐨̛́𝐦" : getHours < 12 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐫𝐮̛𝐚" : getHours < 17 ? "𝐛𝐮𝐨̂̉𝐢 𝐜𝐡𝐢𝐞̂̀𝐮" : getHours < 23 ? "𝐛𝐮𝐨̂̉𝐢 𝐭𝐨̂́𝐢" : "đ𝐞̂𝐦 𝐤𝐡𝐮𝐲𝐚"}`
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
     if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝟐'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝟑'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝟒'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝟓'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝟔'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝟕'
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const uid = (event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝘁𝘂̛̣ 𝘁𝗮𝘆 𝗮̂́𝗻 𝗻𝘂́𝘁 𝗼𝘂𝘁 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺": "𝘃𝗶̀ 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝗻𝗲̂𝗻 𝗯𝗶̣ {author} đ𝗮́ 𝗸𝗵𝗼̉𝗶 𝗻𝗵𝗼́𝗺";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `leaveGif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "=== 𝗧𝗵𝗮̀𝗻𝗵 𝗩𝗶𝗲̂𝗻 𝗢𝘂𝘁 𝗡𝗵𝗼́𝗺 ===\n━━━━━━━━━━━━━━━━━━\n➝『🎊』𝗩𝗮̀𝗼 {buoi}\n➝『🧸』{name} {type}\n➝『🌐』𝗨𝗿𝗹 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗸𝗶𝗰𝗸:  \nhttps://www.facebook.com/{uidAuthor}\n➝『👇』𝗨𝗿𝗹 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗕𝗶̣ 𝗞𝗶𝗰𝗸:\nhttps://www.facebook.com/{uid}\n➝『🔎』𝗨𝗿𝗹 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: m.me/{uid}\n➝『👋』𝗧𝗮̣𝗺 𝗯𝗶𝗲̣̂𝘁: {name}\n━━━━━━━━━━━━━━━━━━\n→『🔔』𝗫𝗶𝗻 𝗖𝗵𝗮̀𝗼 𝗩𝗮̀ 𝗞𝗵𝗼̂𝗻𝗴 𝗛𝗲̣𝗻 𝗚𝗮̣̆𝗽 𝗟𝗮̣𝗶 𝗕𝗮̣𝗻...\n➝『🌚』𝗖𝗵𝘂́𝗰 𝗕𝗯𝗶 𝗦𝗼̛́𝗺 𝗧𝗶̀𝗺 Đ𝘂̛𝗼̛̣𝗰 𝗠𝗼̣̂𝘁 𝗚𝗿 𝗣𝗵𝘂̀ 𝗛𝗼̛̣𝗽 𝗛𝗼̛𝗻\n━━━━━━━━━━━━━━━━━━\n➝『⏰️』𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗼𝘂𝘁 𝗻𝗵𝗼́𝗺: {gio} || {thu}" : msg = data.customLeave;
   var nameAuthor = await Users.getNameUser(event.author)
	msg = msg.replace(/\{name}/g, name) .replace(/\{type}/g, type).replace(/\{buoi}/g, session).replace(/\{thu}/g, thu).replace(/\{gio}/g, gio).replace(/\{author}/g, nameAuthor).replace(/\{uidAuthor}/g, event.author).replace(/\{uid}/g, uid);

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.lenth != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
     }