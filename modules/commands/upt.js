module.exports.config = {
	name:"upt2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai-Team",
	description: "Random ảnh theo api - uptime",
	commandCategory: "tiện ích",
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
        `/tad/UTM-Avo.ttf`)) {
        let getfont = (await axios.get(`https://github.com/ducryo/font/raw/main/UTM%20Avo.ttf`, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(__dirname + `/tad/UTM-Avo.ttf`, Buffer.from(getfont, "utf-8"));
      }
         if (!fs.existsSync(__dirname +
      `/tad/phenomicon.ttf`)) {
      let getfont2 = (await axios.get(`https://github.com/ducryo/font/raw/main/phenomicon.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/phenomicon.ttf`, Buffer.from(getfont2, "utf-8"));
    };
  if (!fs.existsSync(__dirname +
      `/tad/CaviarDreams.ttf`)) {
      let getfont3 = (await axios.get(`https://github.com/ducryo/font/raw/main/CaviarDreams.ttf`, { responseType: "arraybuffer" })).data;
      fs.writeFileSync(__dirname + `/tad/CaviarDreams.ttf`, Buffer.from(getfont3, "utf-8"));
    };
   const { loadImage, createCanvas, registerFont } = require("canvas");
  
  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/6aa59c3e-ff9f-41cd-8611-07a1b870042d')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://run.mocky.io/v3/4ae0208e-ce2a-48c9-a6c2-b1c84aaddfc5')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
    let pathImg = __dirname + `/tad/avatar_1111231.png`;
    let pathAva = __dirname + `/tad/avatar_3dsc11.png`;
    let background = (await axios.get(encodeURI(`https://i.imgur.com/DG6jwdd.png`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    let ava = (await axios.get(encodeURI(`${lengthchar[id - 1].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(ava, "utf-8"));
    const request = require('request');
    const path = require('path');

  //const a = Math.floor(Math.random() * 820) + 1
  
  
let l1 = await loadImage(pathAva);
    let a = await loadImage(pathImg);
    let canvas = createCanvas(a.width, a.height);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id - 1].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(a, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(l1, 100, -290, 1600, 1700);
     registerFont(__dirname + `/tad/phenomicon.ttf`, {
      family: "phenomicon"
    });
    ctx.textAlign = "start";
    ctx.strokeStyle = lengthchar[id - 1].colorBg;
    ctx.filter = "brightness(90%) contrast(110%)";
    ctx.font = "130px phenomicon";
    ctx.fillStyle = "#99ffff";
    ctx.fillText("Triệu Tài Tân", 1880, 550);
    ctx.beginPath();
  ////////////////////////////////////////
   registerFont(__dirname + `/tad/UTM-Avo.ttf`, {
      family: "UTM"
    });
    ctx.textAlign = "start";
    ctx.font = "70px UTM";
    ctx.fillStyle = "#99ff33";
    ctx.fillText(`${z_1} : ${x_1} : ${y_1} `, 1870, 640);
    ctx.restore();
    ctx.save();
registerFont(__dirname + `/tad/CaviarDreams.ttf`, {
      family: "time"
    });
    ctx.textAlign = "start";
    ctx.font = "45px time";
    //ctx.fillText("@" + "facebook.com/ducryo.200x", 240, 590)
    //ctx.fillText("@" + "instagram.com/ducryo/", 240, 670)
   // ctx.fillText("@" + "ryoz", 405, 750)
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
   fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `𝗕𝗼𝘁 𝗢𝗻𝗹𝗶𝗻𝗲 𝗧𝗿𝗼𝗻𝗴 ${hours} 𝗚𝗶𝗼̛̀ ${minutes} 𝗣𝗵𝘂́𝘁 ${seconds} 𝗚𝗶𝗮̂𝘆.\n\n➣  𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗗𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n➣ 𝗡𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n➣ 𝗖𝗽𝘂: ${pidusage.cpu.toFixed(1)}%\n➣ 𝗥𝗮𝗺: ${byte2mb(pidusage.memory)}\n➣ 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n➣ 𝗜𝗗: ${id}`,
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
}
