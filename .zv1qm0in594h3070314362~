module.exports.config = {
  name: "zoro",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hungcho mod by Kaiser",//nguồn :hungcho
  description: "random ank đầu xank",
  commandCategory: "One-Piece",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/jwNTi8u.jpeg",
"https://i.imgur.com/urNVUeB.jpeg",
"https://i.imgur.com/E0FA7WU.jpeg",
"https://i.imgur.com/uEjY0MX.jpeg",
"https://i.imgur.com/cM8LciN.jpeg",
"https://i.imgur.com/YFbT8M4.jpeg",
"https://i.imgur.com/xtAUBaO.jpeg",
"https://i.imgur.com/OPsnU82.jpeg",
"https://i.imgur.com/djPNEky.jpeg",
"https://i.imgur.com/SN3bCtg.jpeg",
"https://i.imgur.com/LqBDkst.jpeg",
"https://i.imgur.com/Pa2xc24.jpeg",
"https://i.imgur.com/jOhMzYx.jpeg",
"https://i.imgur.com/z4oHWnY.jpeg",
"https://i.imgur.com/snNwSCR.jpeg",
"https://i.imgur.com/DWVKGgR.jpeg",
"https://i.imgur.com/nelq5aQ.jpeg",
"https://i.imgur.com/59btuQp.jpeg",
"https://i.imgur.com/RHppLF4.jpeg",
"https://i.imgur.com/h2rQLWO.jpeg",
"https://i.imgur.com/fpQIANB.jpeg",
"https://i.imgur.com/9nN3QG6.jpeg",
"https://i.imgur.com/65AQR16.jpeg",
"https://i.imgur.com/GpKzcoh.jpeg",
"https://i.imgur.com/4fQBRaO.jpeg",
"https://i.imgur.com/i22zIuo.jpeg",
    ];
     var callback = () => api.sendMessage({body:`Số ảnh: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };



