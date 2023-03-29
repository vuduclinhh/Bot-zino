const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "thudam",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Raiden Ei",
  description: "Thủ Dâm Người Bạn Tag",
  commandCategory: "Lệnh 18+",
  usages: "[@tag]",
  cooldowns: 5,
  dependencies: {
        "fs": "",
        "axios": "",
		"request": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                if (args.join().indexOf('@') !== -1)
        var link = [
          "https://i.imgur.com/QOCIyBZ.gif",
             ];
   var callback = () => api.sendMessage({body:`𝗧𝗵𝗮̂̉𝗺 𝗗𝘂 𝗠𝗼̣̂𝘁 𝗠𝗶̀𝗻𝗵 𝗔̀ 𝗘𝗺 😳`
  ,attachment: fs.createReadStream(__dirname + "/cache/thudam.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/thudam.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/thudam.gif")).on("close",() => callback());
   };