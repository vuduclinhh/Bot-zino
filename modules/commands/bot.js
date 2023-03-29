/**
 * @author MintDaL
 * @warn Do not edit code or edit credits
 */

module.exports.config = {
  name: "bot",
  version: "1.2.6",
  hasPermssion: 0,
  credits: "MintDaL",
  description: "Một số thông tin về bot",
  commandCategory: "Dành cho người dùng",
  hide:true,
  usages: "",
  cooldowns: 5,
};


module.exports.run = async function ({ api, event, args, Users, permssion, getText ,Threads}) {
  const content = args.slice(1, args.length);
  const { threadID, messageID, mentions } = event;
  const { configPath } = global.client;
  const { ADMINBOT } = global.config;
   const { NDH } = global.config;
  const { userName } = global.data;
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  const { writeFileSync } = global.nodemodule["fs-extra"];
  const mention = Object.keys(mentions);
  delete require.cache[require.resolve(configPath)];
  var config = require(configPath);
  const listAdmin = ADMINBOT || config.ADMINBOT || [];
  const listNDH = NDH || config.NDH ||  [];
  {
    const PREFIX = config.PREFIX;
    const namebot = config.BOTNAME;
    const { commands } = global.client;
    const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    const dateNow = Date.now();
    const time = process.uptime(),
	      	hours = Math.floor(time / (60 * 60)),
		      minutes = Math.floor((time % (60 * 60)) / 60),
		      seconds = Math.floor(time % 60);
    const data = [
      "Bot cân spam nhưng không có gì đáng để bạn spam."
    ];
    var link = [
"https://i.postimg.cc/ZRKrjt6D/310740144-645653717181922-5951677938562419653-n.jpg",
"https://i.postimg.cc/268KWtyC/310120606-1601256243637464-2305063589868227466-n.jpg",
"https://i.postimg.cc/hjLVS4cj/278545702-477445387467431-3736939676141071541-n.jpg",
"https://i.postimg.cc/8CsyP60C/310714483-792033178771964-5194138997655209251-n.jpg"
    ];
    
    var i = 1;
    var msg = [];
    const moment = require("moment-timezone");
    const date = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
    for (const idAdmin of listAdmin) {
      if (parseInt(idAdmin)) {
        const name = await Users.getNameUser(idAdmin);
        msg.push(`${i++}/ ${name} - ${idAdmin}`);
      }
    }
    var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}/ ${name1} - ${idNDH}`);
                }
            }
    var callback = () => 
      api.sendMessage({ body: `====「 ${namebot} 」====\n» Prefix hệ thống: ${PREFIX}\n» Prefix box: ${prefix}\n» Modules: ${commands.size}\n» Ping: ${Date.now() - dateNow}ms\n──────────────\n======「 ADMIN 」 ======\n${msg.join("\n")}\n──────────────\nBot đã hoạt động được ${hours} giờ(s) ${minutes} phút(s) ${seconds} giây(s)\n\n» Người dùng: ${global.data.allUserID.length} \n» Nhóm: ${global.data.allThreadID.length}\n──────────────\n[Bạn có biết?]: ${data[Math.floor(Math.random() * data.length)]}`, attachment: fs.createReadStream(__dirname + "/cache/nah.jpg"), }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/nah.jpg"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/nah.jpg")).on("close", () => callback()); 
  }
};