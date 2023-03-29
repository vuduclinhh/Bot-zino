module.exports.config = {
  name: "bannertt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Tạo ra 1 ảnh banner thật thú vị",
  commandCategory: "Tiện Ích",
  usages: "",
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
  let pathImg = __dirname + `/cache/${senderID}.png`;
  let pathAva = __dirname + `/cache/avtuser.png`;
  let text = args.join(" ")
  if (!text) return api.sendMessage('💢Vui lòng nhập đúng định dạng [text1 - text2 - text3] 🥲', event.threadID, event.messageID);
  const length_0 = parseInt(text.length)
  const text1 = text.substr(0, text.indexOf('|')); 
  if (!text1) return api.sendMessage('💢Vui lòng nhập đúng định dạng [text1 - text2 - text3] 🥲', event.threadID, event.messageID);
  const length = parseInt(text1.length)
  const text3 = text.split("|").pop()
  if (!text3) return api.sendMessage('💢Vui lòng nhập đúng định dạng [text1 - text2 - text3] 🥲', event.threadID, event.messageID);
  const length_3 = parseInt(text3.length)
  const text2 = text.slice(length+2, length_0 - length_3-2)
  if (!text2) return api.sendMessage('💢Vui lòng nhập đúng định dạng [text1 - text2 - text3] 🥲', event.threadID, event.messageID);
  let Avatar = (
    await axios.get(
      `https://graph.facebook.com/${event.senderID}/picture?height=500&width=500&access_token=1073911769817594|aa417da57f9e260d1ac1ec4530b417de`,
      { responseType: "arraybuffer" }
    )
  ).data;
  let getWanted = (
    await axios.get(encodeURI(`https://i.ibb.co/g6TYb6N/image.png`), {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathAva, Buffer.from(Avatar, "utf-8"));
  avatar = await this.circle(pathAva);
  fs.writeFileSync(pathImg, Buffer.from(getWanted, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAva = await loadImage(avatar);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAva, 820, 310, 289, 289); //giảm là tăng tăng là giảm chiều cao
  ctx.font = "bold 55px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 70;
  ctx.fillText(text1, 975, 730);//giảm là tăng tăng là giảm chiều cao
  ctx.font = "40px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 50;
  ctx.fillText(text2, 973, 780);//giảm là tăng tăng là giảm chiều cao
  ctx.font = "30px Manrope";
  ctx.fillStyle = "#ffff";
  ctx.textAlign = "center";
  fontSize = 50;
  ctx.fillText(text3, 973, 830);//giảm là tăng tăng là giảm chiều cao
  ctx.beginPath();
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAva);
  return api.sendMessage(
    { attachment: fs.createReadStream(pathImg) },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
