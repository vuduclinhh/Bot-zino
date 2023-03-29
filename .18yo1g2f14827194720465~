module.exports.config = {
	name: "cosplay",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nahida",
	description: "Xem ảnh gái xinh cosplay",
	commandCategory: "Random-IMG",
	usages: "cosplay",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apiuwuapi.ducdz999.repl.co/images/cosplay').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res.data.count;
	let callback = function () {
					api.sendMessage({
						body: `𝐂𝐨𝐬𝐩𝐥𝐚𝐲 𝐭𝐫𝐚̂́𝐭 𝐧𝐡𝐮̛ 𝐧𝐮̛𝐨̛́𝐜 𝐜𝐚̂́𝐭 𝐧𝐮𝐨̂𝐧𝐧𝐧 ><\n𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝗮̉𝗻𝗵: ${count}`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
}