module.exports.config = {
    name: 'phangiahan',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', 
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Nhóm messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [{
    timer: '1:30:00 AM',
    message: ['\n{abc}']
},
    {

    timer: '2:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '3:30:00 AM',
    message: ['\n{abc}']
},
    {
      timer: '4:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '5:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '6:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '7:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '8:30:00 AM',
    message: ['\n{abc}']
},
    {
    timer: '9:30:00 AM',
    message: ['\n{abc}']
},
    {
    timer: '10:30:00 AM',
    message: ['\n{abc}']
},
             {
    timer: '11:30:00 AM',
    message: ['\n{abc}']
},
    {
    timer: '12:30:00 PM',
    message: ['\n{abc}']
},
{
    timer: '13:30:00 PM',
    message: ['\n{abc}']
},
  {
    timer: '14:30:00 PM',
    message: ['\n{abc}']
},      
{
    timer: '15:30:00 PM',
    message: ['\n{abc}']
},
    {
    timer: '16:30:00 PM',
    message: ['\n{abc}']
},
{
    timer: '17:30:00 PM',
    message: ['\n{abc}']
},
{
    timer: '18:30:00 PM',
    message: ['\n{abc}']
},
             {
    timer: '19:30:00 PM',
    message: ['\n{abc}']
},
        {
    timer: '20:30:00 PM',
    message: ['\n{abc}']
},
             {
    timer: '21:30:00 PM',
    message: ['\n{abc}']
},
         {
    timer: '22:30:00 PM',
    message: ['\n{abc}']
},   
{
    timer: '23:30:00 PM',
    message: ['\n{abc}']
},
{
    timer: '00:30:00 AM',
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
    var abc =`➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀:{time}\n━━━━━━━━━━━━━━\n→ 𝗰𝗮̣̂𝗽 𝗻𝗵𝗮̣̂𝘁 𝘁𝗵𝗼̛̀𝗶 𝘁𝗶𝗲̂́𝘁 𝘁𝗮̣𝗶 ${res.data[0].location.name}\n→ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.day} ${res.data[0].current.date}\n→ 𝗡𝗵𝗶𝗲̣̂𝘁 đ𝗼̣̂: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}\n→ 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗴𝗶𝗼́: ${res.data[0].current.winddisplay}\n→ 𝗚𝗵𝗶 𝗻𝗵𝗮̣̂𝗻 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${res.data[0].current.observationtime} 𝗧𝘂̛̀ 𝘁𝗿𝗮̣𝗺 𝘃𝘂̃ 𝘁𝗿𝘂̣ 𝗻𝗮𝘀𝗮 🧸\n➩ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴`;
    msg = msg.replace(/{abc}/,abc);
msg = msg.replace(/{hours}/g, hours)
  msg = msg.replace(/{minutes}/g, minutes)
  msg = msg.replace(/{seconds}/g, seconds)
    msg = msg.replace(/{time}/g, require("moment-timezone").tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await axios.get(`https://caochungdat.me/docs/other/thinh`)).data.url)
            msg = {
                body: msg, attachment: (await axios.get((await axios.get(`https://caochungdat.me/docs/other/videoanime`)).data.data, {
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