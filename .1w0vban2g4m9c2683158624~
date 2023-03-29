module.exports.config = {
	name: "top",
	version: "1.0.6",
	hasPermssion: 0,
	credits: "CatalizCS mod and fix by D-Jukie",
	description: "Xem các cấp độ của người dùng",
	commandCategory: "Box chat",
	usages: "[thread/user/money/level]",
	cooldowns: 5
};

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;
	if (args[1] && isNaN(args[1]) || parseInt(args[1]) <= 0) return api.sendMessage("𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗱𝗼̣̂ 𝗱𝗮̀𝗶 𝗹𝗶𝘀𝘁 𝗽𝗵𝗮̉𝗶 𝗹𝗮̀ 𝗺𝗼̣̂𝘁 𝗰𝗼𝗻 𝘀𝗼̂́ 𝘃𝗮̀ 𝗸𝗵𝗼̂𝗻𝗴 𝗱𝘂̛𝗼̛́𝗶 𝟬", event.threadID, event.messageID);
	var option = parseInt(args[1] || 10);
	var data, msg = "";
	var fs = require("fs-extra");
	var request = require("request");  // Covernt exp to level
    function expToLevel(point) {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
    }
    //level	
		if (args[0] == "level") { 
    let all = await Currencies.getAll(['userID', 'exp']);
				all.sort((a, b) => b.exp - a.exp);
				let num = 0;
	             let msg = {
					body: '༒ 𝗧𝗼𝗽 𝟮𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗰𝗼́ 𝗹𝗲𝘃𝗲𝗹 𝗰𝗮𝗼 𝗻𝗵𝗮̂́𝘁 𝘀𝗲𝘃𝗲𝗿 !༒ ',					
				}
                 for (var i = 0; i < 20; i++) {		       	//thay vào số line cần check		 
					let level = expToLevel(all[i].exp);
					var _0xce87=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0xce87[2]](all[i][_0xce87[1]]))[_0xce87[0]]    
  
					num += 1;
					msg.body += '\n' + num + '. ' + name + ' - cấp ' + level;}
					 //console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	if (args[0] == "thread") {
		var threadList = [];	
		try {
        	data = await api.getThreadList(option + 10, null, ["INBOX"]);
		}
		catch (e) {
			console.log(e);
		}
		for (const thread of data) {
			if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: thread.messageCount });
		}		
		threadList.sort((a, b) => {
			if (a.messageCount > b.messageCount) return -1;
            if (a.messageCount < b.messageCount) return 1;
		})
		var i = 0;
		for(const dataThread of threadList) {
			if (i == option) break;
			msg += `${i+1}. ${(dataThread.threadName)||"𝗞𝗵𝗼̂𝗻𝗴 𝘁𝗲̂𝗻"}\nᴳᵒᵈ TID: ${dataThread.threadID} ᴳᵒᵈ\n💯 𝗦𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻: ${dataThread.messageCount} 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻\n\n`;
			i+=1;
		}
		return api.sendMessage(`𝗗𝘂̛𝗼̛́𝗶 𝗱𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗼𝗽 ${threadList.length} 𝗰𝗮́𝗰 𝗻𝗵𝗼́𝗺 𝗹𝗮̆́𝗺 𝗺𝗼̂̀𝗺 𝗻𝗵𝗮̂́𝘁 𝗾𝘂𝗮̉ 𝗱𝗮̂́𝘁:\n≻──────── ⋆✩⋆ ────────≺\n${msg}\n≻─────────𝗘𝗡𝗗─────────≺`, threadID, messageID);
	}
	
 if (args[0] == "money") { 
    let all = await Currencies.getAll(['userID', 'money']);
				all.sort((a, b) => b.money - a.money);
				let num = 0;
	             let msg = {
					body: '༒ 𝗧𝗼𝗽 𝟮𝟬 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗴𝗶𝗮̀𝘂 𝗻𝗵𝗮̂́𝘁 𝘀𝗲𝘃𝗲𝗿 ! ༒\n',
					
				}
				for (var i = 0; i < 20; i++) {               //thay vào số line cần check	
					let level = all[i].money;
			
					var _0x5873=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name=( await Users[_0x5873[2]](all[i][_0x5873[1]]))[_0x5873[0]]
                    
					num += 1;
					msg.body += '\n' + num + '. ' + name + ': ' + level + " $";}
                    //console.log(msg.body)
                    api.sendMessage(msg, event.threadID, event.messageID)
		}
	   if (args[0] == "user") {
		var data, msg = "", i = 0;
		try {
			data = await Currencies.getAll(["userID","exp"]);
		}
		catch (e) {
			console.log(e);
		}
		data.sort((a, b) => {
			if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
		})
		if (data.length < option) option = data.length;
		const idBot = api.getCurrentUserID();
		data = data.filter(item => item.userID != idBot);
		for(const dataUser of data) {
			if (i == option) break;
			var _0xd0e1=["\x6E\x61\x6D\x65","\x75\x73\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var nameUser=( await Users[_0xd0e1[2]](dataUser[_0xd0e1[1]]))[_0xd0e1[0]]
			msg += `${i + 1}. ${nameUser} 𝘃𝗼̛́𝗶 ${dataUser.exp} 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻\n`;
			i+=1;
		}
		return api.sendMessage(`𝗗𝘂̛𝗼̛́𝗶 𝗱𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗼𝗽 ${option} 𝗰𝗮́𝗰 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝗹𝗮̆́𝗺 𝗺𝗼̂̀𝗺 𝗻𝗵𝗮̂́𝘁 𝗾𝘂𝗮̉ 𝗱𝗮̂́𝘁\n\n${msg}`, threadID, messageID);
	}

}
