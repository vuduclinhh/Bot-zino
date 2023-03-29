module.exports.config = {
	name: "concac",
		version: "9.9.9",
		hasPermssion: 0,
		credits: "ttoan ",
		description: "concac",
		commandCategory: "noprefix",
		usages: "noprefix",
		cooldowns: 5,
	};
	module.exports.handleEvent = function({ api, event }) {
		const fs = global.nodemodule["fs-extra"];
		var { threadID, messageID } = event;
		if (event.body.indexOf("con cặc")==0 || (event.body.indexOf("con cặc")==0)) {
			var msg = {
					body: "dám moi con cặc ra không mà nói?",
				}
        api.sendMessage(msg, threadID, messageID);
				return api.changeNickname(`tao chính là thằng súc vật  🤡`, event.threadID, event.senderID);
			}
		}
		module.exports.run = function({ api, event, client, global }) {
	
	}