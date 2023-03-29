 const fs = require("fs");
module.exports.config = {
name: "yêu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "yeuduongconcac",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat yêu",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu")==0 || (event.body.indexOf("Yêu")==0)) {
		var msg = {
				body: "như ảnh :)))",
				attachment: fs.createReadStream(__dirname + `/noprefix/yêu.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}

