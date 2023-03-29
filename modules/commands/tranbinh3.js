const fs = require("fs");
module.exports.config = {
	name: "đã quá pepsi ơi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Long LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lavi")==0 || (event.body.indexOf("Uống lavi")==0 || (event.body.indexOf("Pepsi")==0 || (event.body.indexOf("Uống pepsi")==0)))) {
		var msg = {
				body: "Mời các bạn uống lavi nha 😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/tranbinh3.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}