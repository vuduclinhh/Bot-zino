module.exports.config = {
	name: "vdanime",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Xem ảnh Wibu",
	commandCategory: "Random-IMG",
	usages: "wibu",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://Api-TaoTPk.trankhuong2022.repl.co/image/vdanime').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `━━━━━━━━━━━━━━━━━━
「𝗔𝗻𝗶𝗺𝘃𝗶𝗱」\n━━━━━━━━━━━━━━━━━━\n🕊𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐘𝐞̂𝐮 𝐂𝐚̂̀𝐮 𝐍𝐞̀\n💌𝐂𝐡𝐮́𝐜 𝐁𝐚̣𝐧 𝐌𝐨̣̂𝐭 𝐍𝐠𝐚̀𝐲 𝐌𝐨̛́𝐢 𝐕𝐮𝐢 𝐕𝐞̉`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
        };	request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}