/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "onepiece",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "video One Piece",
  commandCategory: "Video",
  usages: "girlnude",
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
"https://i.imgur.com/g2k1KQb.mp4",
"https://i.imgur.com/Ti7rUf4.mp4",   
"https://i.imgur.com/148Wmvh.mp4", 
"https://i.imgur.com/QuHmydh.mp4",   
"https://i.imgur.com/i8Pui2Q.mp4",
"https://i.imgur.com/YmEuCnF.mp4",
"https://i.imgur.com/rZhyNFP.mp4",
"https://i.imgur.com/B43tO8V.mp4",
"https://i.imgur.com/gN6rJCJ.mp4",
"https://i.imgur.com/w1Vs660.mp4",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem video:V",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`==BẠN ĐÃ ĐỦ 100 ĐÔ==\n==NÊN CÓ THỂ XEM==\n━━━━━━━━━━━━━ 🌸\n====「 THÀNH VIÊN BĂNG MŨ RƠM 」====\n𝟙. Monkey D. Luffy 👒 \n𝟚. Roronoa Zoro ⚔️\n𝟛. Nami 🍊\n𝟜. Usopp 🔫\n𝟝. Sanji 🍽️\n𝟞. Tony Tony Chopper 💊\n𝟟. Nico Robin 📖\n𝟠. Franky 🔨\n𝟡. Brook 🎸\n𝟙𝟘. Jinbe 🐟 \n\n===「 TÀU BĂNG MÙ RƠM 」===\n━━━━━━━━━━━━━ 🌸\n𝟙𝟙. Going Merry ⛵\n 𝟙𝟚. Thousand Sunny ⛵\n\nTất cả thành viên băng mũ rơm `,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));
let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })            
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   }
};