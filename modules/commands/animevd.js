module.exports.config = {
	name: "animevd",
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
axios.get('https://api-vip-ntt.nttvn.repl.co/vdanime').then(res => {
  let ext = res.data.url.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `━━━━━━━━━━━━━━━━━━
「𝗔𝗻𝗶𝗺𝘃𝗶𝗱」\n━━━━━━━━━━━━━━━━━━\n➝ 𝐕𝐢𝐝𝐞𝐨 𝐀𝐧𝐢𝐦𝐞 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧 𝐘𝐞̂𝐮 𝐂𝐚̂̀𝐮 𝐍𝐞̀\n➝ 𝐋𝐢𝐧𝐤 𝐯𝐢𝐝𝐞𝐨: ${res.data.data}\n➝ 𝐀𝐝𝐦𝐢𝐧: nguyen thanh loc 𒅒 𝐂𝐡𝐮́𝐜 𝐦𝐨̣𝐢 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐜𝐨́ 𝟏 𝐧𝐠𝐚̀𝐲 𝐭𝐨̂́𝐭 𝐥𝐚̀𝐧𝐡 !`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
        };	request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}