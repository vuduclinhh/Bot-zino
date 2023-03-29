module.exports.config = {
  name: "top",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "CatalizCS",
  description: "Xem những đứa lắm mồm nhất quả đất",
  commandCategory: "Box Chat",
  usages: "[thread/user/money/level]",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;


  ///////////////////////////////////////////
  //===== Kiểm tra có limit hay không =====//
  if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0) return api.sendMessage("thông tin độ dài list phải là một con số và không dưới 0", event.threadID, event.messageID);
  var option = parseInt(args[1] || 10);
  var data, msg = "";

  ///////////////////////////////////////
  //===== Kiểm tra các trường hợp =====//
  var fs = require("fs-extra");
  var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
  if (point < 0) return 0;
  return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    //level 
    if (args[0] == "user") { 
    let all = await Currencies.getAll(['userID', 'exp']);
        all.sort((a, b) => b.exp - a.exp);
        let num = 0;
               let msg = {
          body: '⚡️ 𝗧𝗼𝗽 𝟭𝟱 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗰𝗼́ 𝗹𝗲𝘃𝗲𝗹 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝘀𝗲𝘃𝗲𝗿 !',
          
        }
        for (var i = 0; i < 100; i++) {
           
   
          let level = expToLevel(all[i].exp);
          var name = (await Users.getData(all[i].userID)).name;      
  
          num += 1;
          msg.body += '\n' + num + '. ' + name + ' - cấp ' + level;}
           console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
    }
  if (args[0] == "thread") {
    var threadList = [];
    
    //////////////////////////////////////////////
    //===== Lấy toàn bộ nhóm và số message =====//
    try {
          data = await api.getThreadList(option + 10, null, ["INBOX"]);
    }
    catch (e) {
      console.log(e);
    }

    for (const thread of data) {
      if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
    }
    
    /////////////////////////////////////////////////////
    //===== sắp xếp từ cao đến thấp cho từng nhóm =====//
    threadList.sort((a, b) => {
      if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
    })

    ///////////////////////////////////////////////////////////////
    //===== Bắt đầu lấy danh sách push vào khuôn mẫu trả về =====//
    var i = 0;
    for(const dataThread of threadList) {
      if (i == option) break;
      msg += `⚡${i+1}/ ${(dataThread.threadName)||"Không tên"}\n⚡TID: [${dataThread.threadID}]\n⚡Số tin nhắn: ${dataThread.messageCount} tin nhắn\n\n`;
      i+=1;
    }
    
    return api.sendMessage(`⚡️Dưới đây là top ${threadList.length} các nhóm lắm mồm nhất quả đất:\n≻───── ⋆✩⋆ ─────≺\n${msg}\n≻────END────≺`, threadID, messageID);
  }
  
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
        all.sort((a, b) => b.money - a.money);
        let num = 0;
               let msg = {
          body: '⚡️ 𝗧𝗼𝗽 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗴𝗶𝗮̀𝘂 𝗻𝗵𝗮̂́𝘁 𝘀𝗲𝘃𝗲𝗿 !',
          
        }
        for (var i = 0; i < 10; i++) {
        
   
          let level = all[i].money;
      
          var name = (await Users.getData(all[i].userID)).name;    
                    
          num += 1;
          msg.body += '\n' + num + '. ' + name + ': ' + level + " đô";}
                    console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
    }

}