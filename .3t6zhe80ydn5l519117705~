let axios = require('axios')
let fs = require('fs')
let cc = require('moment-timezone')
module.exports.config = {
  name: "sendmsg",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "TrúcCute",
  description: "không biết",
  commandCategory: "bổ não",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "fs": "",
    "axios": "",
    "moment-timezone": ""
  }
}

let gio = cc.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss - DD/MM/YYYY')

module.exports.run = async ({ api, event, handleReply, Users, args }) => {
  let { threadID, messageID, senderID, type, messageReply } = event;
  let name = await Users.getNameUser(senderID)
  let threadInfo = await api.getThreadInfo(args[0])
  let NameText = threadInfo.threadName || await Users.getNameUser(args[0])
  let lydo = args.splice(1).join(" ")
  if (type == "message_reply") {
    if (messageReply.attachments[0].type == "audio") {
      path = __dirname + `/cache/snoti.m4a` ||  __dirname + `/cache/snoti.mp3`
    }
    if (messageReply.attachments[0].type == "photo") {
      path = __dirname + `/cache/snoti.jpg`
    }
    if (messageReply.attachments[0].type == "video") {
      path = __dirname + `/cache/snoti.mp4`
    }
    if (messageReply.attachments[0].type == "animated_image") {
      path = __dirname + `/cache/snoti.gif`
    }
    let abc = messageReply.attachments[0].url;
    let getdata = (await axios.get(`${abc}`, {
      responseType: 'arraybuffer'
    })).data
    fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
    api.sendMessage({body: `𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻!!\n\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${lydo}\n\n𝗟𝘂́𝗰: ${gio}\nReͤply tͭiͥn nhͪắn này để tͭrͬả lờiͥ lạiͥ =))`, attachment: fs.createReadStream(path)}, args[0], (e, info) => {
      global.client.handleReply.push({
        type: "callad",
        name: this.config.name,
        author: threadID,
        ID: messageID,
        messageID: info.messageID 
      })
    })
    api.sendMessage(`Đã gửi thành công tin nhắn đến ${NameText}`, threadID)
  } else {
    api.sendMessage({body: `𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻!!\n\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${lydo}\n\n𝗟𝘂́𝗰: ${gio}\nReͤply tͭiͥn nhͪắn này để tͭrͬả lờiͥ lạiͥ =))`}, args[0], (e, info) => {
      global.client.handleReply.push({
        type: "callad",
        name: this.config.name,
        author: threadID,
        ID: messageID,
        messageID: info.messageID
      })
    })
    api.sendMessage(`Đã gửi thành công tin nhắn đến ${NameText}`, threadID)
  }
}

module.exports.handleReply = async ({ api, event, handleReply, Users }) => {
  let { body, threadID, senderID, messageID } = event;
  let index = body.split(" ")
  let gio = cc.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY - HH:mm:ss")
  let threadInfo = await api.getThreadInfo(threadID)
  let threadName = threadInfo.threadName || await Users.getNameUser(senderID)
  switch(handleReply.type) {
    case "callad": {
      let name = await Users.getNameUser(senderID)
      if (event.attachments.length != 0) {
        if (event.attachments[0].type == "audio") {
    path = __dirname + `/cache/snoti.m4a` ||  __dirname + `/cache/snoti.mp3`
  }
  if (event.attachments[0].type == "photo") {
    path = __dirname + `/cache/snoti.jpg`
  }
  if (event.attachments[0].type == "video") {
    path = __dirname + `/cache/snoti.mp4`
  }
  if (event.attachments[0].type == "animated_image") {
    path = __dirname + `/cache/snoti.gif`
  }
        let abc = event.attachments[0].url;
  let getdata = (await axios.get(`${abc}`, {
    responseType: 'arraybuffer'
  })).data
  fs.writeFileSync(path, Buffer.from(getdata, 'utf-8'))
        api.sendMessage({body: `𝗚𝘂̛̉𝗶 𝘁𝘂̛̀ 𝗻𝗵𝗼́𝗺: ${threadName}\n𝗨𝘀𝗲𝗿𝗡𝗮𝗺𝗲: ${name}\n\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${index.join(" ")}\n\n𝗟𝘂́𝗰: ${gio}\nReply để nhắn lại !!`, attachment: fs.createReadStream(path)}, handleReply.author, (e, info) => {
          global.client.handleReply.push({
                type: "callad",
                name: this.config.name,
                author: threadID,
                ID: messageID,
                messageID: info.messageID
          })
        }, handleReply.ID)
      } else if (index.length != 0) {
        api.sendMessage({body: `𝗚𝘂̛̉𝗶 𝘁𝘂̛̀ 𝗻𝗵𝗼́𝗺: ${threadName}\n𝗨𝘀𝗲𝗿𝗡𝗮𝗺𝗲: ${name}\n\n𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${index.join(" ")}\n\n𝗟𝘂́𝗰: ${gio}\nReply để nhắn lại !!`}, handleReply.author, (e, info) => {
          global.client.handleReply.push({
                type: "callad",
                name: this.config.name,
                author: threadID,
                ID: messageID,
                messageID: info.messageID
          })
        }, handleReply.ID)
      }
    }
  }
}