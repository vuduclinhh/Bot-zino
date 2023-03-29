module.exports.config = {
  name: "capheny",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Đạt",
  description: "cap x omen .",
  commandCategory: "cap x omen",
  usages: "capheny",
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
        "https://i.ibb.co/nCXfzT2/image.png",
    "https://i.ibb.co/wWxLpY3/275532046-3941300766095957-8047918707248019840-n.png"
  ];
     const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = [
  "Bạn có biết huyền thoại của liên quân mobile là 29680",
  "Code lí tưởng của người anh em là 29680"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
	 var callback = () => api.sendMessage({body:` [ ${random_emoji} ]
`,attachment: fs.createReadStream(__dirname + "/cache/6.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/6.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/6.jpg")).on("close",() => callback());
   };