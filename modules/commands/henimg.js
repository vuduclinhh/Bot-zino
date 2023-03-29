module.exports.config = {
	name: "henimg",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "yuru",
	description: "",
	commandCategory: "NSFW",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
  var data = await Currencies.getData(event.senderID);
  var money = data.money
  const moneyUser = (await Currencies.getData(event.senderID)).money;
  if (5000 > moneyUser) return api.sendMessage("Bạn cần 5000$ để xem ảnh?", event.threadID, event.messageID);const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
axios.get('http://API.duongcongnambsl.repl.co/hentaiimg').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
     Currencies.setData(event.senderID, options = {money: money - 5000})
	let callback = function () {
    api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/henimg.${ext}`)
  },event.threadID, (err, info) =>
        setTimeout(() => {
    api.unsendMessage(info.messageID) } , 60000))};
request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/henimg.${ext}`)).on("close", callback);
})}
                      