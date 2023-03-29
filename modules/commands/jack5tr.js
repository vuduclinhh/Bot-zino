module.exports.config = {
	name: "jack5tr",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phan Duy", // Mod từ toilet kikiki
	description: "Jack5tr",
	commandCategory: "hình ảnh",
	usages: "rank",
	cooldowns: 5,
	dependencies: {
	  "fs-extra": "",
	  "axios": "",
	  "canvas" :"",
	  "jimp": "",
	  "node-superfetch": ""
	}
};

module.exports.circle = async (image) => {
	  const jimp = global.nodemodule['jimp'];
  	image = await jimp.read(image);
  	image.circle();
  	return await image.getBufferAsync("image/png");
};

module.exports.run = async ({ event, api, args, Users }) => {
try {
  const Canvas = global.nodemodule['canvas'];
  const request = global.nodemodule["node-superfetch"];
  const jimp = global.nodemodule["jimp"];
  const fs = global.nodemodule["fs-extra"];
  var dog = __dirname+'/cache/jack5tr.jpg'; 
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const canvas = Canvas.createCanvas(499, 722);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/247251232_996973524483217_6632599306758369460_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=2riEbIv16J0AX-4EEGu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=9e0eb9cd81349ab9048cf0840dfd4a6d&oe=61A4842A');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 260, 20, 160, 160);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(dog,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(dog, {'highWaterMark': 128 * 1024}), body: "Để ta truyền bí kíp cho con 🤫"}, event.threadID, () => fs.unlinkSync(dog), event.messageID);
}
catch(e) {api.sendMessage(e.stack, event.threadID )}
}