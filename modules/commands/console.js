module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "???",//Mod by H.Thanh
    description: "",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("LLLL");   
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Tên không tồn tại";
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Ảnh, video hoặc kí tự đặc biệt";
    var job = ["FF9900", "FFFF33", "33FFFF", "FF99FF", "FF3366", "FFFF66", "FF00FF", "66FF99", "00CCFF", "FF0099", "FF0066","008E97","F58220","38B6FF","7ED957"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
    var random1 = job[Math.floor(Math.random() * job.length)]
   var random2 = job[Math.floor(Math.random() * job.length)]
var random4 = job[Math.floor(Math.random() * job.length)]
    console.log(chalk.hex("#" + random)(` 𝐓ê𝐧 𝐍𝐡ó𝐦: ${nameBox}`) + " \n " + chalk.hex("#" + random1)(`𝐍𝐠ườ𝐢 𝐃ù𝐧𝐠: ${nameUser}`) + " \n " + chalk.hex("#" + random2)(`𝐍ộ𝐢 𝐃𝐮𝐧𝐠: ${msg}`) + `\n` + chalk.hex("#" + random4)(`[🌍]🌵───────────── 𝐌 𝐈 𝐍 𝐎  ─────────────🌵[🌍]`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
}