module.exports.config = {
  name: "🦉",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "cc",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
	const res = await axios.get(`https://caochungdat.me/docs/other/thinh`);
var thinh = res.data.url;
  const res1 = await axios.get(`https://caochungdat.me/docs/images/canh`);
  var img = res1.data.url;
	var callback = () => api.sendMessage({body:`𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: ${gio}\n◆━━━◆『𝑁𝑔𝑢𝑦𝑒𝑛 𝑇ℎ𝑎𝑛ℎ 𝐿𝑜𝑐』◆━━━◆\n𝐂𝐚̂𝐮 𝐓𝐡𝐢́𝐧𝐡:「 ${thinh} 」`,attachment: fs.createReadStream(__dirname + "/cache/333.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/333.png"), event.messageID);	
      return request(encodeURI(`${img}`)).pipe(fs.createWriteStream(__dirname+'/cache/333.png')).on('close',() => callback());
   };