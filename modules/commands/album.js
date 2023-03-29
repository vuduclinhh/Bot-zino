module.exports.config = {
	name: "album",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem ảnh reply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("====「 𝗞𝗛𝗢 𝗔𝗡𝗜𝗠𝗘 」====\n━━━━━━━━━━━━━\n𝟙. 𝗔̉𝗻𝗵 𝗖𝗵𝗶𝘁𝗮𝗻𝗱𝗮 💞 \n𝟚. 𝗔̉𝗻𝗵 𝗟𝗼𝗹𝗶 💕\n𝟛. 𝗔̉𝗻𝗵 𝗟𝘂𝗰𝘆 🍑\n𝟜. 𝗔̉𝗻𝗵 𝗞𝗮𝘄𝗮𝗶𝗶 😽\n𝟝. 𝗔̉𝗻𝗵 𝗪𝗶𝗯𝘂 🌚\n𝟞. 𝗔̉𝗻𝗵 𝗞𝗮𝗻𝗮 😻\n𝟟. 𝗔̉𝗻𝗵 𝗚𝘂𝗿𝗮 💦\n𝟠. 𝗔̉𝗻𝗵 𝗪𝗮𝗶𝗳𝘂 ❄\n\n===「 𝗞𝗛𝗢 𝗩𝗜𝗗𝗘𝗢 」===\n━━━━━━━━━━━━━\n𝟡. 𝗩𝗶𝗱𝗲𝗼 𝗰𝗵𝗶𝗹𝗹 🦄\n𝟙𝟘. 𝗩𝗶𝗱𝗲𝗼 𝗴𝗮́𝗶 𝘅𝗶𝗻𝗵 🌸\n𝟙𝟙. 𝗩𝗶𝗱𝗲𝗼 𝟭𝟴+ 🔞\n\n𝐑𝐞𝐩𝐥𝐲 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐚̀ 𝐜𝐡𝐨̣𝐧 𝐭𝐡𝐞𝐨 𝐒𝐓𝐓 𝐚̉𝐧𝐡 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦 𝐧𝐡𝐞́ ⛩", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[ 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 ] - 𝗔̉𝗻𝗵, 𝘃𝗶𝗱𝗲𝗼 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ ⚜️",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/chitanda";
        else if ("2" == a.body)
         var   h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/loli";
        else if ("3" == a.body)
         var   h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/lucy";
        else if ("4" == a.body)
          var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/kawaii";
        else if ("5" == a.body)
          var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/wibu";
        else if ("6" == a.body)
          var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/kana";
        else if ("7" == a.body)
          var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/gura";
        else if ("8" == a.body)
          var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/waifu";
        else if ("9" == a.body)
         var   h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/videochill";
        else if ("10" == a.body)
         var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/videogaixinh";
        else if ("11" == a.body)
         var  h = "https://TuanDzIT.xxtuandeeptraizxx1407s.repl.co/images/videosex";
        return { p, h };
    }
};