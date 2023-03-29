const fbname = "TuanDz";
const githubname = "Raiden Shogun";
module.exports.config = {
  name:"cvtime",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Raiden Ei", // Mod By TuanDz
  description: "Random ảnh theo api - uptime",
  commandCategory: "Hệ Thống",
  cooldowns: 3,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname +
        `/time/UTM-Avos.ttf`)) {
        let getfont = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/UTM%20NGHA%2001.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/time/UTM-Avos.ttf`, Buffer.from(getfont, "utf-8"));
      }
        if (!fs.existsSync(__dirname +
        `/time/Asem-Kandis-PERSONAL-USE.ttf`)) {
        let getfont1 = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/Asem-Kandis-PERSONAL-USE.ttf?raw=true`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/time/Asem-Kandis-PERSONAL-USE.ttf`, Buffer.from(getfont1, "utf-8"));
      };
         if (!fs.existsSync(__dirname +
      `/time/phenomicons.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/phenomicon.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/time/phenomicons.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/time/CaviarDreamss.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/kenyrm2250/font/blob/main/%5Bcnttqn.net%5D%20UTM%20Akashi.ttf?raw=true`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/time/CaviarDreamss.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   const alime = (await axios.get('https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/taoanhdep/data2')).data
    if (args[0] == 'list') {
        try {
            var page = 1;
            var count = alime.length
            page = parseInt(args[1]) || 1;
            page < -1 ? page = 1 : "";
            var limit = 15;
            var numPage = Math.ceil(count / limit);
            var msg = ``;
            for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
                if (i >= count) break;
                msg += `𝗜𝗗: ${i} - 𝗡𝗮𝗺𝗲: ${alime[i].name}\n`;
            }
            msg += `--- 𝗧𝗿𝗮𝗻𝗴 (${page}/${numPage}) ---\n📌 𝗗𝘂̀𝗻𝗴 /𝗰𝗼𝘃𝗲𝗿𝗮𝗹𝗶𝗺𝗲 𝗹𝗶𝘀𝘁 [𝘀𝗼̂́ 𝘁𝗿𝗮𝗻𝗴] 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗿𝗮𝗻𝗴`;
            return api.sendMessage(msg, event.threadID, (err, info) => {
                return global.client.handleReply.push({
                    title: 'list'
                    , name: "cvtime"
                    , author: event.senderID
                    , messageID: info.messageID
                });
            }, event.messageID);
        } catch (error) {
            console.log(error)
        }
    }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/taoanhdep/data2')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/time/avatar_1111231.png`;
    let pathAva = __dirname + `/time/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI(`https://i.imgur.com/qpI5oV6.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(l1, -200, -200, 1200, 1200);
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
     registerFont(__dirname + `/time/phenomicons.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "90px phenomicon";
    ctx.fillStyle = lengthchar[id - 1].colorBg;
    ctx.fillText("BOT TuanDeepTry", 950, 340);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/time/UTM-Avos.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "60px UTM";
    ctx.fillStyle = "#FF6699";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 920, 445);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/time/Asem-Kandis-PERSONAL-USE.ttf`, {
      family: "kyten"
    });
    ctx.textAlign = "chuky";
    ctx.font = "80px kyten";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(" " + "TuanDeepTry", 970, 850)
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/time/CaviarDreamss.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "53px time";
    ctx.fillStyle = "#000000";
    ctx.fillText("➢ " + "tuandz_1407", 930, 540)
    ctx.fillText("➢ " + "kenyrm2250", 930, 610)
    ctx.fillText("➢ " + "TuanDz.03", 930, 690)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `===「 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 」===\n\n𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗼𝘁 𝗵𝗶𝗲̣̂𝗻 𝗼𝗻𝗹𝗶𝗻𝗲 𝘁𝗼̂̉𝗻𝗴 𝗰𝗼̣̂𝗻𝗴 ${hours} 𝗴𝗶𝗼̛̀ ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 👾\n──────────────\n❯ 𝗧𝗲̂𝗻 𝗯𝗼𝘁: ${global.config.BOTNAME}\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n❯ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n❯ 𝗖𝗣𝗨 𝗵𝗶𝗲̣̂𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${pidusage.cpu.toFixed(1)}%\n❯ 𝗥𝗔𝗠 𝗵𝗶𝗲̣̂𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴: ${byte2mb(pidusage.memory)}\n❯ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}𝐦𝐬\n❯ 𝗜𝗗 𝗻𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁: ${id}\n❯ 𝗡𝗮𝗺𝗲 𝗻𝗵𝗮̂𝗻 𝘃𝗮̣̂𝘁: ${lengthchar[id].name}`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
}