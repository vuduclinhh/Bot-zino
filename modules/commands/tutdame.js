module.exports.config = {
  tên: "tutdame",
  phiên bản: "1.0.0",
  hasPermssion: 0,
  credit: "Nguyễn Chí Cường",
  mô tả: "TUT dame VIP pro",
  commandCategory: "Quản trị viên",
  tập quán: "tutdame",
  thời gian hồi chiêu: 5,
  phụ thuộc: {
    "lời yêu cầu":"",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({api, event, args, client, Users, Threads, __ GLOBAL, Currencies}) => {
const axios = global.nodemodule ["axios"];
const request = global.nodemodule ["request"];
const fs = global.nodemodule ["fs-extra"];
  var link = [
"https://i.imgur.com/iFQA2hm.jpg",
    "https://i.imgur.com/iFQA2hm.jpg",
    "https://i.imgur.com/iFQA2hm.jpg",
  ];
	  var callback = () => api.sendMessage ({body: `ㅤ ㅤ 🌸 𝐓𝐔𝐓 𝐃𝐚𝐦𝐞 𝐓𝐮̛𝐨̛̉𝐧𝐠 𝐍𝐡𝐨̛́ 𝐕𝐈𝐏 𝐏𝐫𝐨 🌸 \ n
𝐁𝐮̛𝐨̛́𝐜 𝟏: 𝐃𝐚̆𝐧𝐠 𝐥𝐚̂̀𝐧 𝐥𝐮̛𝐨̛̣𝐭 𝟑 𝐝𝐨̀𝐧𝐠 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐝𝐮̛𝐨̛́𝐢 𝐝𝐚̂𝐲 𝐥𝐞̂𝐧 𝐭𝐫𝐚𝐧𝐠 𝐜𝐚́ 𝐧𝐡𝐚̂𝐧 𝐝𝐨̂́𝐢 𝐭𝐮̛𝐨̛̣𝐧𝐠.
* 𝐖𝐞 𝐚𝐫𝐞 𝐬𝐨 𝐬𝐚𝐝 𝐭𝐡𝐚𝐭 𝐲𝐨𝐮𝐫 𝐝𝐞𝐚𝐭𝐡, 𝐂𝐎𝐕𝐈𝐃-𝟏𝟗 𝐭𝐨𝐨𝐤 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞
* 𝐘𝐨𝐮𝐫 𝐝𝐞𝐚𝐭𝐡 𝐢𝐬 𝐭𝐫𝐚𝐠𝐢𝐜, 𝐰𝐞 𝐝𝐨𝐧'𝐭 𝐛𝐞𝐥𝐢𝐞𝐯𝐞 𝐭𝐡𝐢𝐬 𝐢𝐬 𝐭𝐫𝐮𝐞, 𝐛𝐮𝐭 𝐲𝐨𝐮 𝐚𝐫𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐝𝐞𝐚𝐝. 𝐖𝐞 ����𝐫𝐚𝐲 𝐭𝐡𝐚𝐭 𝐲𝐨𝐮𝐫 𝐬𝐨𝐮𝐥 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐬𝐚𝐯𝐞𝐝, 𝐟𝐚𝐫𝐞𝐰𝐞𝐥𝐥 𝐭𝐨 𝐲𝐨𝐮. 𝐫𝐞𝐬𝐭 𝐢𝐧 𝐩𝐞𝐚𝐜𝐞
* 𝐘𝐨𝐮 𝐚𝐫𝐞 𝐬𝐨 𝐩𝐢𝐭𝐢𝐟𝐮𝐥, 𝐲𝐨𝐮 𝐬𝐭𝐢𝐥𝐥 𝐡𝐚𝐯𝐞 𝐦𝐚𝐧𝐲 𝐭𝐡𝐢𝐧𝐠𝐬 𝐭𝐨 𝐝𝐨 𝐛𝐮𝐭 𝐆𝐨𝐝 𝐚𝐜𝐜𝐢𝐝𝐞𝐧𝐭𝐚𝐥𝐥𝐲 𝐭𝐨𝐨𝐤 𝐲𝐨𝐮𝐫 𝐥𝐢𝐟𝐞, 𝐰𝐞 𝐚𝐫𝐞 𝐫𝐞𝐚𝐥𝐥𝐲 𝐬𝐚𝐝
𝐁𝐮̛𝐨̛́𝐜 𝟐: 𝐂𝐡𝐮̣𝐩 𝐚̉𝐧𝐡 𝐦𝐚̀𝐧 𝐡𝐢̀𝐧𝐡 𝟑 𝐝𝐨̀𝐧𝐠 𝐭𝐫𝐚̣𝐧𝐠 𝐭𝐡𝐚́𝐢 𝐯𝐮̛̀𝐚 𝐝𝐚̆𝐧𝐠
𝐁𝐮̛𝐨̛́𝐜 𝟑: 𝐅𝐚𝐤𝐞 𝐈𝐏 𝐌𝐚𝐜𝐚𝐮 𝐯𝐚̀ 𝐝𝐨̂̉𝐢 𝐧𝐠𝐨̂𝐧 𝐧𝐠𝐮̛̃ 𝐬𝐚𝐧𝐠 𝐓𝐢𝐞̂́𝐧𝐠 𝐀𝐧𝐡 (𝐔𝐤)
𝐁𝐮̛𝐨̛́𝐜 𝟒: 𝐓𝐫𝐮𝐲 𝐜𝐚̣̂𝐩 𝟐 𝐝𝐮̛𝐨̛̀𝐧𝐠 𝐥𝐢𝐧𝐤 𝐝𝐮̛𝐨̛́𝐢 𝐝𝐚̂𝐲 𝐯𝐚̀ 𝐝𝐢𝐞̂̀𝐧 𝐝𝐚̂̀𝐲 𝐝𝐮̉ 𝐭𝐡𝐨̂𝐧𝐠 𝐭𝐢𝐧 𝐭𝐡𝐞𝐨 𝐭𝐮̛̀𝐧𝐠 𝐥𝐢𝐧𝐤
𝐓𝐫𝐮𝐲 𝐜𝐚̣̂𝐩 𝐥𝐢𝐧𝐤 𝟖𝟒𝟏: 𝐡𝐭𝐭𝐩𝐬: //𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐡𝐞𝐥𝐩/𝐜𝐨𝐧𝐭𝐚𝐜𝐭 ...
𝐓𝐫𝐮𝐲 𝐜𝐚̣̂𝐩 𝐥𝐢𝐧𝐤 𝟒𝟖𝟎: 𝐡𝐭𝐭𝐩𝐬: //𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐡𝐞𝐥𝐩/𝐜𝐨𝐧𝐭𝐚𝐜𝐭 ...
𝐁𝐮̛𝐨̛́𝐜 𝟓: 𝐠𝐮̛̉𝐢 𝐯𝐚̀ 𝐜𝐡𝐨̛̀ 𝐤𝐞̂́𝐭 𝐪𝐮𝐚̉ !! ư \ n \ n \ n𝐃𝐨𝐧𝐚𝐭𝐞 𝐱𝐢𝐧 𝐭𝐢́ 𝐤𝐞̣𝐨 \ n𝐐𝐮𝐲𝐞̂́𝐭 𝐌𝐢𝐧𝐨 \ n𝐒𝐓𝐊: 𝟎𝟑𝟒𝟐𝟐𝟓𝟗𝟓𝟓𝟒 \ n𝐓𝐞𝐜𝐤𝐜𝐨𝐦𝐛𝐚𝐧𝐤`, tệp đính kèm: fs.createReadStream (__ dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync (__ dirname + "/cache/5.jpg"));
      yêu cầu trả về (encodeURI (link [Math.floor (Math.random () * link.length)])). pipe (fs.createWriteStream (__ dirname + "/ cache / 5.jpg")). on ("close", ( ) => callback ());
   };