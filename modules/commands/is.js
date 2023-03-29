 /**
* @author procode
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "is",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "procode",
  description: "Random Ảnh is",
  commandCategory: "Người dùng",
  usages: "is",
  cooldowns: 0,
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
"https://i.imgur.com/gKr6k1X.png","https://i.imgur.com/jYcV9Pu.jpeg","https://i.imgur.com/0TcGAlW.jpeg","https://i.imgur.com/b2EOTOh.jpeg","https://i.imgur.com/9axZ02K.jpeg","https://i.imgur.com/9EAIXy7.jpeg","https://i.imgur.com/BVPYjrZ.jpeg","https://i.imgur.com/K0WuMK9.jpeg","https://i.imgur.com/my0dRK5.jpeg","https://i.imgur.com/3DSxRgl.jpeg","https://i.imgur.com/j275F36.jpeg","https://i.imgur.com/GP14zkZ.jpeg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 5000) api.sendMessage("Bạn cần 5000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`ảnh is này up đi 😗`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};