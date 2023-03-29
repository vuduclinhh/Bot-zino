module.exports.config = {
	name: "off",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Des Bủh - Dựa trên demo của manhIT", /* vui lòng k sửa credit :) */
	description: "Tắt Bot",
	commandCategory: "Tiện ích",
	cooldowns: 0
        };
        
module.exports.run = async({event, api}) =>{

   const permission = ["100068940754681"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Tắt bot là ko bật lại được đâu!", event.threadID, event.messageID);

api.sendMessage("𝗕𝘆𝗲! 𝗵𝗲̣𝗻 𝗴𝗮̣̆𝗽 𝗹𝗮̣𝗶 𝗰𝗮́𝗰 𝗯𝗮̣𝗻",event.threadID, () =>process.exit(0))}