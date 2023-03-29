const fs = require("fs");
module.exports.config = {
name: "tồi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "bạn tồi s2 0 ai s1",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat tồi",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("tồi")==0 || (event.body.indexOf("Tồi")==0)) {
		var msg = {
				body: "Bạn tồi s2 0 ai s1",
				attachment: fs.createReadStream(__dirname + `/noprefix/tồi.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

