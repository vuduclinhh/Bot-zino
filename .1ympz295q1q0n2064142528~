module.exports.config = {
    name: "ngu",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Lê Định",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 10,
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
    if (!fs.existsSync(dirMaterial + "ngủ.gif")) request("https://imgur.com/SU2EX41.gif").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `👋 Pai paii ${name} 👋\n❤ Chúc cậu ngủ ngon 🥰`,
                attachment: fs.createReadStream(__dirname + `/noprefix/ngủ.gif`)
            }
    if (event.body.toLowerCase() == "đi ngủ đây"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ thôi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ nha"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ đi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }