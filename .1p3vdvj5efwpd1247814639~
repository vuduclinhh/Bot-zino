  module.exports.config = {
    name: "tikinfo",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "CatalizCS",
    description: "thông tin người dùng tiktok",
    commandCategory: "Thông tin",
    usages: "tikinfo [id]",
    cooldowns: 10,
    dependencies: {
        "axios":"",
        "fs-extra":""
    }
};
module.exports.run = async function({ api, event, args, Currencies, utils }) {
  const axios = global.nodemodule['axios'];  
 const fs = global.nodemodule["fs-extra"];
    if (!args.join("") != " " ){ return api.sendMessage("[⚜️]→ Bạn phải nhập id tiktok !!!", event.threadID, event.messageID);}
var uid = args[0];
    
        const user = (await axios.get(`https://docs-api.nguyenhaidang.ml/tiktok?username=${uid}`)).data;
      var id = user.userInfo.user.id;
     var name = user.userInfo.user.nickname;
      var userName = user.userInfo.user.uniqueId;
      var followe = user.userInfo.stats.followerCount;
       var followi = user.userInfo.stats.followingCount;
       var video = user.userInfo.stats.videoCount;
       var abc = user.userInfo.user.signature;
        var tym =  user.userInfo.stats.heart;
      //var bio =  user.userInfo.user.bioLink.link ? `${user.userInfo.user.bioLink.link}` : "Không có web"
       var img =  user.userInfo.user.avatarMedium;
        var path = __dirname + "/cache/1.png";
    let getimg = (await axios.get(`${img}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
       // console.log(user);
   // } catch (error) {
   //     console.log(error);
   // }
    var body = `[🔎]→ Tên: ${name}\n[⚜️]→ Username: ${userName}\n[❗]→ ID: ${id}\n[👉]→ Signature:\n${abc}\n[✅]→ Follower: ${followe}\n[🌐]→ Following: ${followi}\n[💗]→ Số lượt tym: ${tym}\n[🎬]→ Số video: ${video} `
return api.sendMessage({body: body, attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, event.messageID);
}