const axios = require('axios');
module.exports.config = {
    name: 'autott',
    version: '10.02',
    hasPermssion: 0,
    credits: 'DC-Nam', // Bok idea thời tiết
    description: 'Tự động gửi tin nhắn theo giờ đã cài!',
    commandCategory: 'Nhóm messenger',
    usages: '[]',
    cooldowns: 3
};
const nam = [
    {
        timer: '12:00:00',
        message: ['\n{abc}']
    },
    {
        timer: '6:00:00',
        message: ['\n{abc}']
    }
];
module.exports.onLoad = o => setInterval(async () => {
    var date = (new Date).toLocaleTimeString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh"
    });;
    const r = a => a[Math.floor(Math.random() * a.length)];
    if (á = nam.find(i => i.timer == date)) {
        console.log(`[ ${date} ] Đã gửi tin nhắn tự động!`);
        var msg = r(á.message);
        const res = await axios.get(`https://api.popcat.xyz/weather?q=H%C3%A0%20N%E1%BB%99i`);
        var currentDay = res.data[0].current.day.replace(/Friday/g, "Thứ 6").replace(/Saturday/g, "Thứ 7").replace(/Sunday/g, "Chủ nhật").replace(/Monday/g, "Thứ 2").replace(/Tuesday/g, "Thứ 3").replace(/Wednesday/g, "Thứ 4").replace(/Thursday/g, "Thứ 5");
        var date = res.data[0].current.date;
        var dateFormat = `Ngày ${date.split("-")[2]}-${date.split("-")[1]}-${date.split("-")[0]}`;
        var skytext = res.data[0].current.skytext.toString()
        "Cloudy" == skytext ? skytext = "Mây" : "Sunny" == skytext ? skytext = "Nắng" : "Partly Cloudy" == skytext ? skytext = "Mây một phần" : "Mostly Cloudy" == skytext ? skytext = "Mây rất nhiều" : "Rain" == skytext ? skytext = "Mưa" : "Thunderstorm" == skytext ? skytext = "Bão" : "Snow" == skytext ? skytext = "Tuyết" : "Fog" == skytext || "Haze" == skytext ? skytext = "Sương mù" : "Clear" == skytext ? skytext = "Trời trong" : "Light Rain" == skytext ? skytext = "Mưa nhẹ" : "Mostly Clear" == skytext && (skytext = "Trời trong rất nhiều");
        var winddisplay = res.data[0].current.winddisplay.toString().split(" ")[2];
        "Northeast" == winddisplay && (winddisplay = "Hướng Đông Bắc"), "Northwest" == winddisplay && (winddisplay = "Hướng Tây Bắc"), "Southeast" == winddisplay && (winddisplay = "Hướng Đông Nam"), "Southwest" == winddisplay && (winddisplay = "Hướng Tây Nam"), "East" == winddisplay && (winddisplay = "Hướng Đông"), "West" == winddisplay && (winddisplay = "Hướng Tây"), "North" == winddisplay && (winddisplay = "Hướng Bắc"), "South" == winddisplay && (winddisplay = "Hướng Nam");
        var abc = `»THỜI TIẾT HÔM NAY«\n━━━━━━━━━━━━\n→ Thời tiết tại: ${res.data[0].location.name}.\n→ Thời gian: ${currentDay}/${dateFormat}.\n→ Nhiệt độ: ${res.data[0].current.temperature}°${res.data[0].location.degreetype}.\n→ Mô tả: ${skytext}.\n→ Độ ẩm: ${res.data[0].current.humidity}%.\n→ Hướng gió: ${res.data[0].current.windspeed} ${winddisplay}.\n→ Ghi nhận vào lúc: ${res.data[0].current.observationtime}.\n→ Từ trạm vũ trụ của Nguyen Thanh Loc.\n» 𝐵𝑜𝑡 𝑐𝑢̉𝑎 𝑛𝑡𝑙 😍❤️, phóng viên từ đài truyền hình VTV Việt Nam đưa tin tại Trái Đất.`;
        msg = msg.replace(/{abc}/, abc);
        axios.get('https://i.imgur.com/h4CQ70A.jpg', { responseType: 'stream' }).then(res => {
            global.data.allThreadID.forEach(item => {
                o.api.sendMessage({
                    body: msg,
                    attachment: res.data
                }, item);
            });
        });
    };
}, 1000);

module.exports.run = async o => {
    try {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        const request = global.nodemodule["request"];
        const { api, event, args } = o;
        const { threadID, messageID } = event;
        var bok = args.join(" ");
        if (!bok) return api.sendMessage("nhập tỉnh/tp cần xem thời tiết", threadID);
        const res = await axios.get(`https://api.popcat.xyz/weather?q=${encodeURI(bok)}`);
        const bokk = res.data[0].forecast;
        var text = `Thời tiết của: ${bok} vào các ngày`;
        for (let i = 0; i < 5; i++) {
            text += `\n${i + 1}-> ${bokk[i].day} ${bokk[i].date}\n=>Nhiệt độ dự báo: từ ${bokk[i].low} đến ${bokk[i].high}\n=>Mô tả: ${bokk[i].skytextday}\n=>Tỷ lệ mưa: ${bokk[i].precip}\n`
        };
        api.sendMessage(text, threadID, messageID)
    } catch (err) { api.sendMessage(`${err}`, threadID) }
}