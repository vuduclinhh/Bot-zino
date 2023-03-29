module.exports.config = {
  name: "anhbia",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ARAXY XD",
  description: "baner",
  commandCategory: "Image",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, args, event, permssion }) {
  const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if (args[0] == "list") {
    const list = await axios.get("https://dino-1.araxy.repl.co/data2");
    var page = 1;
    page = parseInt(args[1]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 15;
    var count = list.data.listAnime.length;
    var numPage = Math.ceil(count / limit);
    var msg = [];
    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
      if (i >= count) break;
      var nv = list.data.listAnime[i].name;
      msg += `${i + 0}. ${nv}\n`
    }
    msg += `Hiện tại có ${count} nhân vật\nSố trang (${page}/${numPage})\nDùng ${global.config.PREFIX}araxy list <số trang>`;
    return api.sendMessage(msg, event.threadID)
  }
    else if (args[0] == "color") {
        var callback = () => api.sendMessage({body:`của bạn đây UwU`,attachment: fs.createReadStream(__dirname + "/cache/taoanhdep.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/taoanhdep.png"),event.messageID); 
       return request(encodeURI(`https://www.studytienganh.vn/upload/2017/08/40.jpg`)).pipe(fs.createWriteStream(__dirname+'/cache/taoanhdep.png')).on('close',() => callback());    
    } else if(args[0] == "find"){
       const ress = await axios.get('https://dino-1.araxy.repl.co/data3')
      var nhanvat = args[1]
      const data2 = ress.data.anime[nhanvat - 1].imgAnime
      var imag = (await axios.get(`${data2}`, {
          responseType: "stream"
        })).data;
        var msg = {
          body: 'Ảnh Của Bạn Đây',
          attachment: imag
        }
      return api.sendMessage(msg, threadID, messageID)
    }
  else {
    return api.sendMessage(`Vui lòng reply tin nhắn này để nhập ID nhân vật [ ARAXY ]`, event.threadID, (err, info) => {
      return global.client.handleReply.push({
        type: "characters",
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      });
    }, event.messageID);
  }
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const request = require("request");
  
  if (handleReply.author != event.senderID) return api.sendMessage('lnao', event.threaID);
  const {
    threadID,
    messageID,
    senderID
  } = event;

  switch (handleReply.type) {
    case "characters": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍Bạn đã chọn ID nhân vật là ${event.body}\n(Reply tin nhắn này nhập vào tên chính của bạn)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: 'subname',
          name: 'anhbia',
          author: senderID,
          characters: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }
    case "subname": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍Bạn đã chọn tên chính là ${event.body}\n(Reply tin nhắn này nhập vào tên phụ của bạn)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: 'color',
          name: 'anhbia',
          author: senderID,
          characters: handleReply.characters,
          name_s: event.body,
          messageID: info.messageID
        })
      }, messageID);
    }

    case "color": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍Bạn đã chọn tên phụ là ${event.body}\nNhập màu nền của bạn (lưu ý: nhập tên tiếng anh của màu - Nếu không muốn nhập màu thì nhập "no")\n(Reply tin nhắn này)`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: 'linkfb',
          name: 'anhbia',
          author: senderID,
          characters: handleReply.characters,
          subname: event.body,
          name_s: handleReply.name_s,
          messageID: info.messageID
        })
      }, messageID)
    }
    case "linkfb": {
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍Bạn đã chọn màu là ${event.body}\nNhập link fb của bạn để hoàn tất`, threadID, function(err, info) {
        return global.client.handleReply.push({
          type: 'create',
          name: 'anhbia',
          author: senderID,
          characters: handleReply.characters,
          subname: handleReply.subname,
          name_s: handleReply.name_s,
          color: event.body,
          messageID: info.messageID
        })
      }, messageID)
    }
    case "create": {
      var idchar = handleReply.characters;
      var name_ = handleReply.name_s;
      var subname_ = handleReply.subname;
      var color_ = handleReply.color
      var linkfb_ = event.body;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`Vui Lòng Đợi Trong Giây Lát`, event.threadID, async (err, info) => {
        await new Promise(resolve => setTimeout(resolve, 3 * 1000));
        var imag = (await axios.get(`https://dino-1.araxy.repl.co/taoanhdep?id=${idchar}&tenchinh=${encodeURIComponent(name_)}&fb=${encodeURIComponent(linkfb_)}&tenphu=${encodeURIComponent(subname_)}&color=${encodeURIComponent(color_)}`, {
          responseType: "stream"
        })).data;
        var msg = {
          body: 'Ảnh Của Bạn Đây',
          attachment: imag
        }
        return api.sendMessage(msg, event.threadID, event.messageID)
      })
    }
  }
      }