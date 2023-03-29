module.exports.config = {
	name: "uptimee",
	version: "1.0.1",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Xem thông tin thời gian sử dụng bot",
	commandCategory: "system",
	cooldowns: 5,
	dependencies: {
		"systeminformation": "",
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)}${units[l]}`;
}

module.exports.run = async function ({ api, event }) {
	const { time, cpu } = global.nodemodule["systeminformation"];
	const timeStart = Date.now();

	try {
    const pidusage = await global.nodemodule["pidusage"](process.pid);
		var { uptime } = await time();
		var hours = Math.floor(uptime / (60 * 60));
		var minutes = Math.floor((uptime % (60 * 60)) / 60);
		var seconds = Math.floor(uptime % 60);
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;

    var upt = {
       body: "𝚃𝚑ờ𝚒 𝚐𝚒𝚊𝚗 𝚑𝚘𝚊̣𝚝 độ𝚗𝚐 " + hours + ":" + minutes + ":" + seconds +
			"\n» 𝚃ổ𝚗𝚐 𝚗𝚐ườ𝚒 𝚍ù𝚗𝚐: " + global.data.allUserID.length +
			"\n» 𝚃ổ𝚗𝚐 𝙽𝚑ó𝚖: "+ global.data.allThreadID.length +
			"\n» 𝚁𝚊𝚖 đ𝚊𝚗𝚐 𝚜ử 𝚍ụ𝚗𝚐: " + byte2mb(pidusage.memory) +
			"\n» 𝙿𝚒𝚗𝚐: " + (Date.now() - timeStart) + "ms" +
      "\n» 𝙿𝚛𝚎𝚏𝚒𝚡: "+ global.config.PREFIX +
      "\n» 𝙰𝙳𝙼𝙸𝙽 𝙱𝙾𝚃 https://www.facebook.com/100083980911228",
      attachment: (await global.nodemodule["axios"]({
            url: (await global.nodemodule["axios"]('https://apituandz1407.herokuapp.com/api/gai.php')).data.data,
            method: "GET",
            responseType: "stream"
        })).data
    }
    return api.sendMessage(upt,event.threadID, event.messageID)
	}
	catch (e) {
		console.log(e)
	}
}