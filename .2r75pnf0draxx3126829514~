module.exports.config = {
	name: "fb", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "version", // phiên bản của module này
	hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Namuwu", // Công nhận module sở hữu là ai
	description: "Như dưới", // Thông tin chi tiết về lệnh
	commandCategory: "Tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {
	}, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};
module.exports.run = async function ({ event, api, args, Users, Threads }) {
  const axios = global.nodemodule['axios'];  
  const fs = global.nodemodule["fs-extra"];
  const key = "mzk_4D81TP718PBH77B5IVZ" // reg tai manhict.tech
  const tst = (await Threads.getData(String(event.threadID))).data || {};
  const p = (tst.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const n1 = this.config.name
    if (args.length == 0) return api.sendMessage(`=== 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ===\n\n${p}${n1} (𝗹/𝗹𝗶𝗻𝗸) => lấy link fb người mình or người reply\n${p}${n1} (𝘂/𝗶𝗱𝘂) => lấy id mình or reply tn\n${p}${n1} (𝗴/𝗴𝗲𝘁𝗶𝗱) => lấy id từ link fb\n${p}${n1} (𝘁/𝗶𝗱𝘁) => lấy id nhóm chat của bạn`, event.threadID, event.messageID);
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
  else uid = event.senderID;
    if (args[0] == "link" || args[0] == "l") {
return api.sendMessage(`https://www.facebook.com/profile.php?id=${uid}`, event.threadID, event.messageID);
}
//else if (Object.keys(event.mentions).length == 1) {
    //var mention = Object.keys(mentions)[0];
//return api.sendMessage({body:`${mentions[mention].replace(/\@/g, "")}`}, threadID, messageID);

    if (args[0] == "idu" || args[0] == "u") {
return api.sendMessage(uid, event.threadID, event.messageID);
}
    if (args[0] == "idt" || args[0] == "t") {
  api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
}
let linkfb = args[1]
const res = await axios.get(`https://manhict.tech/finduid?url=${linkfb}&apikey=${key}`);
var gidf = res.data.id;
    if (args[0] == "getid" || args[0] == "g") {
return api.sendMessage(`${gidf}`,event.threadID, event.messageID);
    }
  //let linkvideo = args[1]
//const res = await axios.get(`https://manhict.tech/fbvideo/v2?url=${linkvideo}&apikey=mzk_4D81TP718PBH77B5IVZ`);
//var vieo = res.data.data.medias.url;
 //if (args[0] == "getvideo" || args[0] == "v") {
//return api.sendMessage(``,event.threadID, event.messageID);
     // }
}