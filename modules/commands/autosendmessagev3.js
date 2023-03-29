module.exports.config = {
    name: 'trieutaitan',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', 
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Nhóm messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '18:00:00 PM',
    message: ['\n{abc}']
},
    {

    timer: '6:00:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '12:30:00 PM',
    message: ['\n{abc}']
},
    {
      timer: '00:00:00 AM',
    message: ['\n{abc}']
},
{
      timer: '10:00:00 AM',
    message: ['\n{abc}']
},
{
      timer: '10:00:00 PM',
    message: ['\n{abc}']
},
             {
}];
module.exports.onLoad = o => setInterval(async() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())){
  const axios = require('axios');
const time = process.uptime();
		 var hours = Math.floor(time / (60 * 60));
		var minutes = Math.floor((time % (60 * 60)) / 60);
	var seconds = Math.floor(time % 60);
  var msg = r(á.message);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI('Hồ Chí Minh')}`);
    var abc =`🔔====𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢====🔔
━━━━━━━━━━━━━━━━━━
💸 ==== [ 𝗧𝗛𝗨𝗘̂ 𝗕𝗢𝗧 ] ==== 💸
➝ 𝗧𝗵𝘂𝗲̂ 𝗕𝗼𝘁 𝟎𝐤/𝘁𝗵
➝ Đ𝘂̛𝗼̛̣𝗰 𝘁𝗮𝗴 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗯𝗼𝘅 𝗸𝗲̂̉ 𝗰𝗮̉ 𝗱𝘂̛𝗼̛́𝗶 𝟭𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶
➝ 𝗗𝘂̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗺𝗼̣̂𝘁 𝘀𝗼̂́ 𝗹𝗲̣̂𝗻𝗵 𝗔𝗱𝗺𝗶𝗻
━━━━━━━━━━━━━━━━━━
⚜️ ==== [ 𝗠𝗨̛𝗢̛̣𝗡 𝗕𝗢𝗧 ] ==== ⚜️
➝ 𝗬𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗵𝗼́𝗺 𝘁𝗿𝗲̂𝗻 𝟰𝟬 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻
➝ 𝗧𝘂̛̣ 𝗱𝘂̀𝗻𝗴 𝗹𝗮̂𝘂 𝗵𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝗰𝗵𝗼 𝗯𝗶𝗲̂́𝘁 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗺𝗼̛́𝗶
━━━━━━━━━━━━━━━━━━\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴`;
    msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
  msg = msg.replace(/{minutes}/g, minutes)
  msg = msg.replace(/{seconds}/g, seconds)
    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://caochungdat.me/docs/other/thinh`)).data.url)
            msg = {
                body: msg, attachment: (await axios.get((await axios.get(`https://caochungdat.me/docs/other/vddoraemon`)).data.data, {
                    responseType: 'stream'
                })).data
            };
   global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
    };
}, 1000);

module.exports.run = async o => {
  try{
  const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const { api, event, args } = o;
	const { threadID, messageID } = event;
  var bok = args.join(" ");
  if(!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
  const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
  const bokk = res.data[0].forecast;
  var text = `Thời tiết của: ${bok} vào các ngày`;
  for (let i = 0; i < 5; i++) {
    text += `\n${i+1}-> ${bokk[i].day} ${bokk[i].date}\n=>Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n=>Mô tả: ${bokk[i].skytextday}\n=>Tỷ lệ mưa: ${bokk[i].precip}\n`
  };
  api.sendMessage(text, threadID, messageID)
  }catch(err){api.sendMessage(`${err}`, threadID)}
             }