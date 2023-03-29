module.exports.config = {
  name: "ghep",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Hungcho edit by Hungdz30cm",
  description: "Ghép đôi ngẫu nhiên",
  commandCategory: "Trò Chơi", 
  usages: "ghep", 
  cooldowns: 200,
  dependencies: [] 
};
module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        var data = await Currencies.getData(event.senderID);
        var money = data.money
        if(money < 500) api.sendMessage("𝐁𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝟓𝟎𝟎 𝐜𝐡𝐨 𝐦𝐨̣̂𝐭 𝐥𝐚̂̀𝐧 𝐠𝐡𝐞́𝐩 𝐧𝐡𝐚́ 💌\n𝐂𝐨́ 𝐥𝐚̀𝐦 𝐦𝐨̛́𝐢 𝐜𝐨́ 𝐚̆𝐧 🤑",event.threadID,event.messageID)
        else {
        var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "10%", "48%", "50%", "90%", "1000%", "30%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});
        api.changeNickname(`𝐂𝐮̣𝐜 𝐜𝐮̛𝐧𝐠 𝐜𝐮̉𝐚 ${name} ❤️`, event.threadID, event.senderID);
        api.changeNickname(`𝐁𝐞́ 𝐲𝐞̂𝐮 𝐜𝐮̉𝐚 ${namee} 💚`, event.threadID, id);
        var sex = await data[id].gender;
        var gender = sex == 2 ? "𝐍𝐚𝐦 🧑" : sex == 1 ? "𝐍𝐮̛̃ 👩‍🦰" : "𝐆𝐚𝐲";
        Currencies.setData(event.senderID, options = {money: money - 500})
        let Avatar = (await axios.get( `https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
        let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
        var msg = {body: `💖─ 𝐕𝐈̀ 𝐘𝐄̂𝐔 • 𝐌𝐀̀ 𝐓𝐎̛́𝐈 ─💖\n\n𝗚𝗵𝗲́𝗽 𝗰𝗮̣̆𝗽 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗻𝗲̀ ❤️\n𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 𝗻𝗵𝗮𝘂 𝗹𝗮̀: ${tle}\n𝗩𝘂̛̀𝗮 𝘁𝗿𝘂̛̀ 𝟱𝟬𝟬 𝗩𝗡𝗗 💸\n`+namee+" "+"💓"+" "+name+"\n", mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
      }
}