module.exports.config = {
    name: "tikvideo",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "tdunguwu",
    description: "",
    commandCategory: "media",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
		"axios": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) =>   {
  try {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
let text = args.join(" ")
  if (!text) return api.sendMessage('⚡Vui nhập link video', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
 const link = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").split("|")[0];
const res = await axios.get
(`https://leanhtruong.edu.vn/api/tiktok?url=${link}`);
var url = res.data.data_nowatermark[1].url;
var title = res.data.title;
var author_video = res.data.author_video;
    var data_music = res.data.data_music.title;

	 var callback = () => api.sendMessage({body:`→ Quốc gia: VN
→ Tên kênh: ${author_video}\n
→ Tên nhạc: ${data_music}\n
→ Tiêu đề: ${title}`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("⚡Không thể xử lý yêu cầu của bạn!", event.threadID);
    }  
    }