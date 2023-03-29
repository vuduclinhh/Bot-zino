const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "địt",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Diluc",
  description: "Địt người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/MPUrJwD.gif",
"https://i.imgur.com/z3b8mfh.gif",
"https://i.imgur.com/aWO81hg.gif",
"https://imgur.com/Sq5A3yi.gif",
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗔𝗻𝗵 𝗖𝗵𝗶̣𝗰𝗵 𝗦𝘂̛𝗼̛́𝗻𝗴 𝗟𝗼̂̀𝗻 𝗛𝗼𝗻𝗴 𝗕𝗮𝗲𝗲𝗲 🍒`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/ditnhau.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ditnhau.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/ditnhau.gif")).on("close",() => callback());
   }