module.exports.config = {
  name: "buff",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Thanh Đạt",
  description: "tăng tim",
  commandCategory: "UPDATE",
  usages: "buff",
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
   "https://ibb.co/BjH9d5S",
    "https://ibb.co/BjH9d5S"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Bắt đầu tăng 500 tim bài viết, lên sau vài phút...",
               "Bắt đầu tăng 500 tim bài viết, lên sau vài phút..."
               ]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	 var callback = () => api.sendMessage({body:` [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };
			