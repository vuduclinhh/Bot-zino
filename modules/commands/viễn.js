module.exports.config = {
  name: "viễn",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Đạt",
  description: "ảnh ông viễn .",
  commandCategory: "ảnh ông viễn",
  usages: "viễn",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
   "https://i.ibb.co/fCjFM61/1.jpg",
        "https://i.ibb.co/CVpS3Np/2.jpg"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Bạn có biết vvvV là văn viễn vênh váo ?.",
               "Chào mừng bạn đến với sở thú châu phi :))",
               
        " Anh da đen không xấu da đen là 1 hệ tư tưởng :))."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	 var callback = () => api.sendMessage({body:` [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };