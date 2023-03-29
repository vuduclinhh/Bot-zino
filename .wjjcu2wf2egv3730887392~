module.exports.config = {
    name: "fbget",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zera",
    description: "Tải video hoặc ghi âm từ fb",
  commandCategory: "Phương tiện",
  usages: "audio/video < link >",
  cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
  if(args[0] == 'audio'){
        api.sendMessage(`Đang xử lí yêu cầu...`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 10000),event.messageID);
        const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Tải thành công ❤️`, 
    attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
    }; 
  }catch {return api.sendMessage(`Không thể xử lí yêu cầu`,event.threadID,event.messageID)}
    try { 
      if(args[0] == 'video'){
            api.sendMessage(`Đang xử lí yêu cầu...`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 10000),event.messageID);
            const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Tải thành công 🥰`, 
    attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
    }; 
  }catch {return api.sendMessage(`Không thể xử lí yêu cầu`,event.threadID,event.messageID)}
      }