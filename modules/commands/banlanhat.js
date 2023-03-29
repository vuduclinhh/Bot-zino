const fs = require("fs");
module.exports.config = {
name: "Bạn là nhất",
	version: "1.0.1",
	description: "Bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
	cooldowns: 5,
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "banlanhat.mp4")) request("https://tinyurl.com/yesmty6e ").pipe(fs.createWriteStream(dirMaterial + "banlanhat.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if ((event.body.indexOf("nhất")==0) || (event.body.indexOf("Nhất bạn")==0) || (event.body.indexOf("Bạn là nhất")==0)) {
		var msg = {
				body: "Bạn Là Nhất Nhá",
		attachment: fs.createReadStream(__dirname + `/noprefix/banlanhat.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }