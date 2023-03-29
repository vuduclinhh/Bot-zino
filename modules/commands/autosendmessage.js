module.exports.config = {
    name: 'autosenmessage1',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', // Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Nhóm messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '1:50:00 AM',
    message: ['\n{abc}']
},
    {

    timer: '2:50:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '3:50:00 AM',
    message: ['\n{abc}']
},
    {
      timer: '4:50:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '5:50:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '6:50:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '7:50:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '8:50:00 AM',
    message: ['\n{abc}']
},
    {
    timer: '9:50:00 AM',
    message: ['\n{abc}']
},
    {
    timer: '10:50:00 AM',
    message: ['\n{abc}']
},
{
    timer: '11:50:00 AM',
    message: ['\n{abc}']
},
{
    timer: '12:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '13:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '14:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '15:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '16:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '17:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '18:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '19:50:00 PM',
    message: ['\n{abc}']
},        
{
    timer: '20:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '21:50:00 PM',
    message: ['\n{abc}']
},         
{
    timer: '22:50:00 PM',
    message: ['\n{abc}']
},        
{
    timer: '23:50:00 PM',
    message: ['\n{abc}']
},        
{
    timer: '00:50:00 AM',
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
    var abc =`\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n→ 🦥𝗖𝗵𝘂́𝗰 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗖𝗼́ 𝗠𝗼̣̂𝘁 𝗡𝗴𝗮̀𝘆 𝗩𝘂𝗶 𝗩𝗲̉ 𝗩𝗮̀ 𝗠𝗮́𝘁 𝗠𝗲̉🦍\n━━━━━━━━━━━━\n→ Đ𝗮̂𝘆 𝗟𝗮̀ 𝗟𝗮̀ 𝗕𝗢𝗧 𝗖𝘂̉𝗮 𝗧𝗿𝗶𝗲̣̂𝘂 𝗧𝗮̀𝗶 𝗧𝗮̂𝗻 [𝗭𝗲𝘂𝘀 🐦] \n━━━━━━━━━━━━━━━━━━\n➩ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴🦥`;
    msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
  msg = msg.replace(/{minutes}/g, minutes)
  msg = msg.replace(/{seconds}/g, seconds)
    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://caochungdat.me/docs/other/thinh`)).data.url)
            msg = {
                body: msg, attachment: (await axios.get((await axios.get(`https://caochungdat.me/docs/other/videoanime1`)).data.data, {
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