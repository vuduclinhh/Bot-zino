module.exports.config = {
  name: "outall",
  version: "1.0.0", 
  hasPermssion: 3,
  credits: "Mirai",
  description: "out all box",
  commandCategory: "Hệ thống admin-bot",
  usages: "outall [Text]",
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {
  const permission = ["100068940754681"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Đừng sử dụng bậy bạ !", event.threadID, event.messageID);
  return api.getThreadList(100, null, ["INBOX"], (err, list) => {
    if (err) throw err;
    list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ?
      api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
    api.sendMessage('ᴆᴀ̃ ᴏᴜᴛ ᴀʟʟ ʙᴏx ᴛʜᴀ̀ɴʜ ᴄᴏ̂ɴɢ', event.threadID);
  });
}
