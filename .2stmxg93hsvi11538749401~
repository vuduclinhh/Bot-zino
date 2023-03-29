module.exports.config = {
	name:"mlem",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "MAVERICK",
	description: "Random video tiktok gái",
	commandCategory: "MEDIA",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apivideo.leeetri.repl.co/tiktok/?apikey=yeubeka').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
                                                body: ``,
						attachment: fs.createReadStream(__dirname + `/cache/top.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/top.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/top.${ext}`)).on("close", callback);
			})
}
