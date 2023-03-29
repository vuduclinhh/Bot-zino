const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "tranbinh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về Trần Bình",
  commandCategory: "Tranbinh System",
  usages: "tranbinh",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.imgur.com/i6YXxbQ.jpg",
  ];
   var callback = () => api.sendMessage({body:`Đọc 3 điều pháp sư Trần Bình dạy đi thằng lon`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };