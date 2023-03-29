module.exports.config = {
 name: "info", 
version: "1.0.0", 
hasPermssion: 0,
 credits: "Horizon", 
description: ".hee", 
commandCategory: "game", 
usages: "", 
cooldowns: 5 
}; 

 module.exports.run =async function({ api, event,args,client }) {
  // const login = require("fca-horizon-remake");
   const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios']; 
 var data = await api.getUserInfoV2(event.senderID);
var name = data.name 
  //name = 'No name'
   //(e, i) => if(e) name = 'noname'
 
var username = data.username
var follow = data.follow
//var uid = data.uid
var uid = event.senderID; 
   var about = data.about
   var gender = data.gender
   var birthday = data.birthday
   var love = data.relationship_status 
   var rela = data.love.name  
   var id = data.love.id
   var location = data.location.name
   var place = data.location.id 
   var hometown = data.hometown.name
   var home = data.hometown.id
   var url_profile = data.link
   var web = data.website
   var quotes = data.quotes
   var link = data.imgavt
   
var callback = () => api.sendMessage({body:`👤 Tên: ${name}\n🍁 UserName: ${username}\n🔎 UID: ${uid}\n👀 Follow: ${follow}\n👭 Giới tính: ${gender}\n🎉 Sinh Nhật: ${birthday}\n💌 Mối quan hệ: ${love}\n💞 Love name: ${rela}\n💓 UID love: ${id}\n🏡 Sống tại: ${location}\n🌆 ID Place: ${home}\n🌏 Đến từ: ${hometown}\n🏙️ ID Hometown: ${home}\n💻 Website: ${web}\n📌 URL cá nhân: ${url_profile}\n⚜️ Trích dẫn: ${quotes}`, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID ); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());

 }