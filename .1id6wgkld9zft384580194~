module.exports.config = {
    name: "poll",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "TruongMini",
    description: "Tạo bình chọn",
    commandCategory: "game",
    usages: "poll [name1 | name2 | ...]",
    cooldowns: 5
};

module.exports.handleReply = function({ api, event, handleReply }) {
    const { threadID, senderID, body } = event;
    if(senderID != handleReply.author) return;
    return api.createPoll(body, event.threadID, handleReply.obj, (err, info) => {
        if(err) return console.log(err);
        else {
            api.sendMessage(`Bình chọn ${body} đã được tạo`, threadID);
            api.unsendMessage(handleReply.messageID);
            global.client.handleReply.splice(global.client.handleReply.indexOf(handleReply), 1);
        }
    });
}

module.exports.run = function({ api, event, args }) {
    const { threadID, messageID, senderID } = event;
    let options = args.join(" ").split("|");
    let obj = {}
    for(let item of options) obj[item] = false;
    api.sendMessage(`Tạo thành công các bình chọn ${options.join(",")}\nHãy reply tin nhắn này để tạo tiêu đề`, threadID, (err, info) => {
        if(err) return console.log(err);
        else {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: senderID,
                obj
            })
        }
    });
}