module.exports.config = {
	name: "tromexp",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Dũngkon",
	description: "là trôm exp đó",
	commandCategory: "economy",
	usages: "",
	cooldowns: 5
};

module.exports.run = async function({ api, event, Users, Currencies }) {
	var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('Rất tiếc, bạn không thể ăn cắp exp từ người này. Vui lòng thử lại.', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const expdb = (await Currencies.getData(victim)).expy;
       var money = Math.floor(Math.random() * 1000) + 1;
        if (expdb <= 0 || expdb == undefined) return api.sendMessage(`Bạn vừa ăn cắp ${nameVictim} là một người nghèo. Vì vậy, bạn không có gì`, event.threadID, event.messageID);

        else if (expdb >= exp) return api.sendMessage(`Bạn vừa lấy trộm ${exp} từ ${nameVictim} trong nhóm này`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+exp))
            await Currencies.increaseMoney(event.senderID, parseInt(exp))
        }, event.messageID);
        else if (expdb < exp) return api.sendMessage(`Bạn vừa ăn cắp tất cả ${expdb} số dư của ${nameVictim} trong nhóm này`, event.threadID, async () => {
            await Currencies.increaseExp(victim, parseInt("-"+exp))
            await Currencies.increaseExp(event.senderID, parseInt(exp))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var expuser = (await Currencies.getData(event.senderID)).exp
            if (expuser <= 0) return api.sendMessage("Bạn không có exp, HÃY TƯƠNG TÁC ĐỂ CÓ ĐƯỢC EXP LÀM VỐN.", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`Bạn đã bị bắt và mất ${expuser} .`, event.threadID, () => api.sendMessage({ body: `Xin chúc mừng  ${nameVictim}! Bạn đã bắt được ${name} và nhận được ${Math.floor(expuser / 2)} làm phần thưởng!`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseExp(event.senderID, parseInt("-"+ expuser))
                await Currencies.increaseExp(victim, parseInt(Math.floor(expuser / 2))) 
            }), event.messageID);
        
    }
}