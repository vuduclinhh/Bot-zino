module.exports.config = {
    name: "rs",
    version: "2.0.2",
    hasPermssion: 3,
    credits: "Mirai Team mod by Jukie",
    description: "Khởi động lai bot",
    commandCategory: "Hệ thống admin-bot",
    usages: "restart",
    cooldowns: 5,
    dependencies: { }
}
 
module.exports.run = async function({ api, args, Users, event}) {
const { threadID, messageID } = event;
  let name = await Users.getNameUser(event.senderID)
const permission = ["100068940754681", ""];
	if (!permission.includes(event.senderID)) return api.sendMessage("Reset bot cc, để lập kỉ lục uptime 999 giờ", event.threadID, event.messageID);
if(args.length == 0) api.sendMessage(`💟Chào cậu chủ: ${name}\n🔰Cậu chủ vui lòng chờ trong giây lát, hệ thông bot sẽ khởi động lại sau 10s`,event.threadID, () =>process.exit(1))
}  
  /*
else{    
let time = args.join(" ");
setTimeout(() =>
api.sendMessage(`🔮Bot sẽ khỏi động lại sau: ${gio}s\n⏰Bây giờ là: ${gio}:${phut}:${giay} `, threadID), 0)
setTimeout(() =>
api.sendMessage("⌛Đang bắt đầu quá trình khỏi động lại",event.threadID, () =>process.exit(1)), 1000*`${time}`);
}
}
*/