const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "tranbinh2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về đá thủ Trần Bình",
  commandCategory: "Tranbinh System",
  usages: "tranbinh2",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://www.dropbox.com/s/9t8hxfnggqis1o0/received_444094997654537.mp4?dl=0&copy_to_dropbox=true",
  ];
   var callback = () => api.sendMessage({body:`Đã quá.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };