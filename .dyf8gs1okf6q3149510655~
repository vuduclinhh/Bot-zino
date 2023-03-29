const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "choiless",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Raiden Ei",
  description: "Chơi less người bạn tag",
  commandCategory: "Lệnh 18+",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [    
"https://i.imgur.com/u9qf3Ad.gif",
"https://i.imgur.com/FkDYOiB.gif",
"https://imgur.com/O28r4B2.gif",
"https://i.imgur.com/rVIdLc1.gif",
"https://i.imgur.com/VSLDDiR.gif",
"https://i.imgur.com/Y43CPKL.gif"
   ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
   var callback = () => api.sendMessage({body:`${tag}` + ` 𝗦𝘂̛𝗼̛́𝗻𝗴 𝗾𝘂𝗮́ 𝗬𝗮𝗺𝗮𝘁𝗲, 𝗶 𝗰𝘂̛ 𝗶 𝗰𝘂̛ 😖`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/choiless.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/choiless.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/choiless.gif")).on("close",() => callback());
   }