module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tnguyen",
	description: "Hướng dẫn cho người mới",
	usages: "[all/-a] [số trang]",
	commandCategory: "Dành cho người dùng",
	cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
	let num = parseInt(event.body.split(" ")[0].trim());
	(handleReply.bonus) ? num -= handleReply.bonus : num;
	let msg = "";
	let data = handleReply.content;
	let check = false;
	if (isNaN(num)) msg = "𝑯𝒂̃𝒚 𝒏𝒉𝒂̣̂𝒑 𝟏 𝒄𝒐𝒏 𝒔𝒐̂́ 𝒎𝒂̀ 𝒃𝒂̣𝒏 𝒎𝒖𝒐̂́𝒏";
	else if (num > data.length || num <= 0) msg = "𝑺𝒐̂́ 𝒃𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒂̆̀𝒎 𝒕𝒓𝒐𝒏𝒈 𝒅𝒂𝒏𝒉 𝒔𝒂́𝒄𝒉, 𝒗𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒕𝒉𝒖̛̉ 𝒍𝒂̣𝒊";
	else {
		const { commands } = global.client;
		let dataAfter = data[num-=1];
		if (handleReply.type == "cmd_info") {
			let command_config = commands.get(dataAfter).config;
			msg += ` 『  ${command_config.commandCategory.toUpperCase()}   』   \n`;
			msg += `\n『🔎』𝑻𝒆̂𝒏 𝒍𝒆̣̂𝒏𝒉: ${dataAfter}`;
			msg += `\n『📜』𝑴𝒐̂ 𝒕𝒂̉: ${command_config.description}`;
			msg += `\n『📌』𝑪𝒂́𝒄𝒉 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈: ${(command_config.usages) ? command_config.usages : ""}`;
			msg += `\n『⏰』𝑻𝒉𝒐̛̀𝒊 𝒈𝒊𝒂𝒏 𝒄𝒉𝒐̛̀: ${command_config.cooldowns || 5}s`;
			msg += `\n『🕴️』𝑸𝒖𝒚𝒆̂̀𝒏 𝒉𝒂̣𝒏: ${(command_config.hasPermssion == 0) ? "Người dùng" : (command_config.hasPermssion == 1) ? "Quản trị viên nhóm" : "Quản trị viên bot"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
			msg += `\n\n»『🔨』𝑴𝒐𝒅𝒖𝒍𝒆 𝒄𝒐𝒅𝒆 𝒃𝒚 ${command_config.credits} «`;
		} else {
			check = true;
			let count = 0;
			msg += `» ${dataAfter.group.toUpperCase()} «\n`;

			dataAfter.cmds.forEach(item => {
				msg += `\n ${count+=1}. » ${item}: ${commands.get(item).config.description}`;
			})
			msg += "\n\n╭──────╮\n    𝑹𝑬𝑷𝑳𝒀 \n╰──────╯ 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ 𝒅𝒆̂̉ 𝒙𝒆𝒎 𝒕𝒉𝒐̂𝒏𝒈 𝒕𝒊𝒏 𝒄𝒉𝒊 𝒕𝒊𝒆̂́𝒕 𝒍𝒆̣̂𝒏𝒉 𝒗𝒂̀ 𝒄𝒂́𝒄𝒉 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒍𝒆̣̂𝒏𝒉 ";
		}
	}
	const axios = require('axios');
	const fs = require('fs-extra');
	const img = ["https://i.imgur.com/WsGlmmz.mp4", "https://i.imgur.com/RzO593s.mp4", "https://i.imgur.com/YcIUJoW.mp4", "https://i.imgur.com/kDYeq9K.mp4", "https://i.imgur.com/2VyxSWK.mp4", "https://i.imgur.com/0PZi2W5.mp4", "https://i.imgur.com/ngBqa3t.mp4", "https://i.imgur.com/lm2DCjS.mp4", "https://i.imgur.com/BLmzQRo.mp4", "https://i.imgur.com/6LtOy2f.mp4", "https://i.imgur.com/c3wieTA.mp4"]
	var path = __dirname + "/cache/menu.mp4"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 
	const imgP = []
	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
	fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
	imgP.push(fs.createReadStream(path))
	var msgg = {body: msg, attachment: imgP}
	api.unsendMessage(handleReply.messageID);
	return api.sendMessage(msgg, event.threadID, (error, info) => {
		if (error) console.log(error);
		if (check) {
			global.client.handleReply.push({
				type: "cmd_info",
				name: this.config.name,
				messageID: info.messageID,
				content: data[num].cmds
			})
		}
	}, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	const axios = require('axios');
	const fs = require('fs-extra');
	const imgP = []
	const img = ["https://i.imgur.com/WsGlmmz.mp4",
"https://i.imgur.com/ngBqa3t.mp4", "https://i.imgur.com/lm2DCjS.mp4", "https://i.imgur.com/BLmzQRo.mp4", "https://i.imgur.com/6LtOy2f.mp4", "https://i.imgur.com/c3wieTA.mp4"]
	var path = __dirname + "/cache/menu.mp4"
	var rdimg = img[Math.floor(Math.random() * img.length)]; 

   	let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
	const command = commands.values();
	var group = [], msg = "» 『📝𝑫𝒂𝒏𝒉 𝒔𝒂́𝒄𝒉 𝒍𝒆̣̂𝒏𝒉 𝒉𝒊𝒆̣̂𝒏 𝒄𝒐́📝』 «\n";
	let check = true, page_num_input = "";
	let bonus = 0;

	for (const commandConfig of command) {
		if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
		else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
	}

	if (args[0] && ["all", "-a"].includes(args[0].trim())) {
		let all_commands = [];
		group.forEach(commandGroup => {
			commandGroup.cmds.forEach(item => all_commands.push(item));
		});
		let page_num_total = Math.ceil(all_commands.length / 2222222222);
		if (args[1]) {
			check = false;
			page_num_input = parseInt(args[1]);
			if (isNaN(page_num_input)) msg = "𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒄𝒉𝒐̣𝒏 𝒔𝒐̂́";
			else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝑺𝒐̂́ 𝒃𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒂̆̀𝒎 𝒕𝒓𝒐𝒏𝒈 𝒅𝒂𝒏𝒉 𝒔𝒂́𝒄𝒉, 𝒗𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒕𝒉𝒖̛̉ 𝒍𝒂̣𝒊";
			else check = true;
		}
		if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
			bonus = index_start;
			index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
			all_commands = all_commands.slice(index_start, index_end);
			all_commands.forEach(e => {
				msg += `\n${index_start+=1}. » ${e}: ${commands.get(e).config.description}`;
			})
			msg += `\n\n『📖』𝑻𝒓𝒂𝒏𝒈 ${page_num_input || 1}/${page_num_total}`;
			msg += `\n『📌』Đ𝒆̂̉ 𝒙𝒆𝒎 𝒄𝒂́𝒄 𝒕𝒓𝒂𝒏𝒈 𝒌𝒉𝒂́𝒄, 𝒅𝒖̀𝒏𝒈: ${prefix}𝒎𝒆𝒏𝒖 [𝒂𝒍𝒍/-𝒂] [𝒔𝒐̂́ 𝒕𝒓𝒂𝒏𝒈]`;
      msg += `\n『🗃』𝑩𝒂̣𝒏 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒅𝒖̀𝒏𝒈 ${prefix}𝒉𝒆𝒍𝒑 𝒂𝒍𝒍 𝒅𝒆̂̉ 𝒙𝒆𝒎 𝒕𝒂̂́𝒕 𝒄𝒂̉ 𝒍𝒆̣̂𝒏𝒉\𝒏\𝒏╭───𝟒𝟐𝟎───╮\n
.\n╰───𝑳𝒆̣̂𝒏𝒉───╯\𝒏『✏』𝑹𝑬𝑷𝑳𝒀 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ đ𝒆̂̉ 𝒙𝒆𝒎 𝒕𝒉𝒐̂𝒏𝒈 𝒕𝒊𝒏 𝒄𝒉𝒊 𝒕𝒊𝒆̂́𝒕 𝒍𝒆̣̂𝒏𝒉 𝒗𝒂̀ 𝒄𝒂́𝒄𝒉 𝒔𝒖̛̉ 𝒅𝒖̣𝒏𝒈 𝒍𝒆̣̂𝒏𝒉\n `
			msg += "🍍🍈🫐🍏🌽🫐🥕🍇🥕🍇";
		}
		var msgg = {body: msg, attachment: imgP}
		return api.sendMessage(msgg, threadID, (error, info) => {
			if (check) {
				global.client.handleReply.push({
					type: "cmd_info",
					bonus: bonus,
					name: this.config.name,
					messageID: info.messageID,
					content: all_commands
				})
			}
		}, messageID)
	}

	let page_num_total = Math.ceil(group.length / 2222222222);
	if (args[0]) {
		check = false;
		page_num_input = parseInt(args[0]);
		if (isNaN(page_num_input)) msg = "𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒄𝒉𝒐̣𝒏 𝒔𝒐̂́";
		else if (page_num_input > page_num_total || page_num_input <= 0) msg = "𝑺𝒐̂́ 𝒃𝒂̣𝒏 𝒄𝒉𝒐̣𝒏 𝒌𝒉𝒐̂𝒏𝒈 𝒏𝒂̆̀𝒎 𝒕𝒓𝒐𝒏𝒈 𝒅𝒂𝒏𝒉 𝒔𝒂́𝒄𝒉, 𝒗𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒕𝒉𝒖̛̉ 𝒍𝒂̣𝒊";
		else check = true;
	}
	if (check) {
		index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
		bonus = index_start;
		index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
		group = group.slice(index_start, index_end);
		group.forEach(commandGroup => msg += `\n${index_start+=1}. » ${commandGroup.group.toUpperCase()} `);
		msg += `\n\n『📖』𝑻𝒓𝒂𝒏𝒈【${page_num_input || 1}/${page_num_total}】`;
		msg += `\n『📌』Đ𝒆̂̉ 𝒙𝒆𝒎 𝒄𝒂́𝒄 𝒕𝒓𝒂𝒏𝒈 𝒌𝒉𝒂́𝒄, 𝒅𝒖̀𝒏𝒈: ${prefix}𝒎𝒆𝒏𝒖 [𝒔𝒐̂́ 𝒕𝒓𝒂𝒏𝒈]`;
    msg += `\n『📝』𝑩𝒂̣𝒏 𝒄𝒐́ 𝒕𝒉𝒆̂̉ 𝒅𝒖̀𝒏𝒈 ${prefix}𝒎𝒆𝒏𝒖 𝒂𝒍𝒍 𝒅𝒆̂̉ 𝒙𝒆𝒎 𝒕𝒂̂́𝒕 𝒄𝒂̉ 𝒍𝒆̣̂𝒏𝒉`
		msg += `\n╭─────╮\n   420 𝑳𝒆̣̂𝒏𝒉     \n╰─────╯ \n	『✏』𝑹𝑬𝑷𝑳𝒀 𝒕𝒊𝒏 𝒏𝒉𝒂̆́𝒏 𝒕𝒉𝒆𝒐 𝒔𝒐̂́ 𝒅𝒆̂̉ 𝒙𝒆𝒎 𝒄𝒂́𝒄 𝒍𝒆̣̂𝒏𝒉 𝒕𝒉𝒆𝒐 𝒑𝒉𝒂̂𝒏 𝒍𝒐𝒂̣𝒊 𝑩𝑶𝑻 𝑫𝒖̛𝒐̛̣𝒄 𝑫𝒊𝒆̂̀𝒖 𝑯𝒂̀𝒏𝒉 𝑩𝒐̛̉𝒊 Nguyen Thanh Loc`;
	}
	var msgg = {body: msg, attachment: imgP}
	return api.sendMessage(msgg, threadID, async (error, info) => {
		global.client.handleReply.push({
			name: this.config.name,
			bonus: bonus,
			messageID: info.messageID,
			content: group
		})
	});
  }