module.exports.config = {
	name: "superidol",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phan Duy",//được mod từ toilet
	description: "Super idol",
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
  var path_toilet = __dirname+'/cache/superidol.jpg'; 
  var id = Object.keys(event.mentions)[0] || event.senderID;
  const canvas = Canvas.createCanvas(500, 670);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage('https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/249323984_174868474851835_7739764937228911942_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=O_pVr__DEJwAX_V_pOr&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=316256a356cee62632df9590566fa2d1&oe=61AA6915');
  
	var avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
	avatar = await this.circle(avatar.body);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 185, 70, 185, 185);
	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(path_toilet,imageBuffer);
	 api.sendMessage({attachment: fs.createReadStream(path_toilet, {'highWaterMark': 128 * 1024}), body: "Siêu thần tượng đã nở nụ cười 😂"}, event.threadID, () => fs.unlinkSync(path_toilet), event.messageID);
}
catch(e) {api.sendMessage(e.stack, event.threadID )}
}