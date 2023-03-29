module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Admin",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100085411913189"];
  if (!permission.includes(event.senderID))
  return api.sendMessage("Đấm cho cái chứ out 😼", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('💌!!𝐃𝐚̃ 𝐫𝐨̃, 𝐭𝐡𝐮̛𝐚 𝐀𝐝𝐦𝐢𝐧!!💌', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}