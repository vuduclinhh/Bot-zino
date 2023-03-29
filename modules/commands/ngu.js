module.exports.config = {
    name: "ngủ",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "bye.gif")) request("https://files.catbox.moe/nvgdmr.gif").pipe(fs.createWriteStream(dirMaterial + "bye.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `[ 𝐆𝐨𝐨𝐝 𝐁𝐲𝐞 ]
🌸𝐏𝐚𝐢𝐢 𝐏𝐚𝐢𝐢𝐢 ${name} 💤💤
🌱𝐂𝐡𝐮́𝐜 𝐁𝐛𝐢 ${name} 𝐍𝐠𝐮̉ 𝐍𝐠𝐨𝐧🛌`,
                attachment: fs.createReadStream(__dirname + `/noprefix/bye.gif`)
            }
    if (event.body.toLowerCase() == "đi ngủ đây"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ nha"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
