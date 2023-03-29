const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 40
const Name = 52
const fontsInfo = 50
const colorName = "#00FFFF"

module.exports.config = {
  name: "infocard",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Tạo card thông tin người dùng facebook",
  commandCategory: "Thông tin",
  usages: "cardinfo",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;
  /*                 */
  if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
    const res = await api.getUserInfoV2(uid); 
  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  let bg = (
    await axios.get(encodeURI(`https://i.imgur.com/TFbVhfN.jpg`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
  avataruser = await this.circle(pathAvata);
  fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));

/*-----------------download----------------------*/
if(!fs.existsSync(__dirname+`${fonts}`)) { 
      let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+`${fonts}`, Buffer.from(getfont, "utf-8"));
    };
/*---------------------------------------------*/

  let baseImage = await loadImage(pathImg);
  let baseAvata = await loadImage(avataruser);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvata, 82, 305, 479, 479);
    var gender = res.gender == 'male' ? "Nam" : res.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.birthday ? `${res.birthday}` : "not found";
    var love = res.relationship_status ? `${res.relationship_status}` : "not found"
    var location = res.location.name ? `${res.location.name}` : "not found"
    var hometown = res.hometown.name ? `${res.hometown.name}` : "not found"
  Canvas.registerFont(__dirname+`${fonts}`, {
        family: "Play-Bold"
    });
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#110000";
  ctx.textAlign = "start";
  fontSize = 390;
  ctx.fillText(`: ${res.follow}`, 827, 720);
  ctx.fillText(`: ${love}`, 1005, 642);
  ctx.fillText(`: ${birthday}`, 1005, 812);
  ctx.fillText(`: ${location}`, 959, 552);
  ctx.fillText(`: ${hometown}`, 918, 462);
  ctx.fillText(`» UID: ${uid}`, 215, 868);
  ctx.font = `${Name}px Play-Bold`;
  ctx.fillStyle = "#003300";
  ctx.textAlign = "start";
  fontSize = 390;    
  ctx.fillText(` ${res.name} `, 682, 375);
  ctx.beginPath();
  ctx.font = `${fontsLink}px ArialUnicodeMS`;
  ctx.fillStyle = "#FF0000";
  ctx.textAlign = "start";
  fontSize = 390;    
  ctx.fillText(` ${res.link}`, 323, 918);
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvata);
  
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};

 