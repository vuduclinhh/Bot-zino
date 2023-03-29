module.exports.config = {
    name: "t10",
    version: "1.1.12",
    hasPermssion: 0,
    credits: "",
    description: "",
    commandCategory: "media",
    usages: "",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
 switch (args[0].toLowerCase()) {
    case "video":
       const link = args[1];
  try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
const res = await axios.get(`https://api-caochungdat.bokdepzai.repl.co/tiktok/download?url=${link}`);
var url = res.data.data.play;
       var callback = () => api.sendMessage({body:`Tên kênh:${res.data.data.author.nickname}\nTym:${res.data.data.digg_count}\nCmt:${res.data.data.comment_count}`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }  
      break;
     
    case "music":
      try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
    const link = args[1];
const res = await axios.get(`https://api-caochungdat.bokdepzai.repl.co/tiktok/download?url=${link}`);
var url = res.data.data.music;
       var callback = () => api.sendMessage({body:`nhạc nè hehe\n${res.data.data.music_info.title}`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp3')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
      break;
  default:
     break;
}
}