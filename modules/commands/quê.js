const fs = require("fs");
module.exports.config = {
name: "quê",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "ôi quá quê ",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat quê",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("quê")==0 || (event.body.indexOf("Quê")==0)) {
		var msg = {
				body: "Ôi con sông quê :)))",
				attachment: fs.createReadStream(__dirname + `/noprefix/quê.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

