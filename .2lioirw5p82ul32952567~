module.exports.config = {
	name:"tikgai",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Binee",
	description: "Random video tiktok gái",
	commandCategory: "Tiện Ích",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/gaixinhtiktok.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `𝗣𝗵𝗮̂𝘆 𝗕𝘂́𝗰 𝗘𝗺 𝗧𝗿𝗮̆𝗺 𝗡𝗴𝗮̀𝗻 𝗣𝗵𝗼̂ 𝗟𝗼̂ 🖤`,
						attachment: fs.createReadStream(__dirname + `/cache/top.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/top.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/top.${ext}`)).on("close", callback);
			})
}