module.exports.config = {
	name: 'sendfile',
	version: '1.0.0',
	hasPermssion: 3,
	credits: 'D-Jukie',
	description: '',
	commandCategory: 'Admin',
	usages: 'givefile',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	const fs = require("fs-extra")
	 const permission = ["100085411913189"];
  if (!permission.includes(event.senderID)) return api.sendMessage("tính trộm scripts à nhóc?", event.threadID, event.messageID);
	const stringSimilarity = require('string-similarity');
	const file = args.join(" ");
	if(!file) return api.sendMessage('Tên file không được bỏ trống', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('Đuôi file không được khác .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('🔎 Không tìm thấy file: ' + file + ' \n🔎 File gần giống là: ' + search + '.js, \n» Thả cảm xúc vào tin nhắn này để give nó.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' của bạn đây', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» Check tin nhắn đi ' + name, event.threadID, (error) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var moduleList = args.splice(1, args.length);
		  	moduleList = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, moduleList)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
			return api.sendMessage('🔎 Không tìm thấy file: ' + file + ' \n🔎 File gần giống là: ' + search + '.js, \n» Thả cảm xúc vào tin nhắn này để give nó.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' của bạn đây', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' của bạn đây', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» Check tin nhắn đi ' + namee, event.threadID, (error) => {
            	if(error) return api.sendMessage('» Có lỗi khi gửi file đến ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' của bạn đây', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}