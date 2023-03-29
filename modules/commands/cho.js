module.exports.config = {
	name: "cho",
		version: "9.9.9",
		hasPermssion: 0,
		credits: "Nhí Badboiz",
		description: "cho",
		commandCategory: "noprefix",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("chó")==0 || (event.body.indexOf("Chó")==0)) {
			var msg = {
					body: "sủa cl gì zãy",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`tao chính là thằng chó rách 🤡`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}