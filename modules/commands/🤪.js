module.exports.config = {
  name: "🤪",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod by Văn Huy",
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

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
const res = await axios.get(`https://caochungdat.me/docs/other/thinh`);
var thinh = res.data.url;
const ress = await axios.get('https://caochungdat.me/docs/images/gaitrung');
var img =  ress.data.url;
        var path = __dirname + "/cache/1.png";
    let getimg = (await axios.get(`${img}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
return api.sendMessage({body:`→ 𝗧𝗶𝗺𝗲: ${gio}\n◆━━━◆『 Nguyen Thanh Loc 』 ◆━━━◆\n𝐂𝐚̂𝐮 𝐓𝐡𝐢́𝐧𝐡:『 ${thinh} 』\n\nNguyen Thanh Loc 🦉`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, event.messageID); 
}