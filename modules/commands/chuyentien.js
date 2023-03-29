module.exports.config = {
    name: "chuyentien",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Chuyển tiền cho người khác",
    commandCategory: "economy",
    usages: "[tag người dùng] [Số tiền cần chuyển]",
    cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "missingTag": "[ CT ] Bạn phải tag người cần chuyển tiền",
        "overTagLength": "[ CT ] Vui lòng chỉ tag một người duy nhất",
        "userNotExist": "[ CT ] Người dùng bạn cần chuyển không tồn tại trong hệ thống!",
        "invalidInput": "[ CT ] Số tiền bạn nhập không phù hợp để chuyển",
        "payerNotExist": "[ CT ] Hiện tại bạn không tồn tại trong hệ thống, vui lòng chờ 5 giây sau đó thử lại",
        "notEnoughMoney": "[ CT ] Bạn không đủ tiền để thực hiện giao dịch!",
        "paySuccess": "[ CT ] Đã chuyển thành công %1$ (5% tax) cho người dùng: %2",
        "error": "[ CT ] Đã xảy ra lỗi không mong muốn trong lúc thực hiện giao dịch"
    },
    "en": {
        "missingTag": "[ CT ] No recipient tagged.",
        "overTagLength": "[ CT ] You have to tag at no more than one recipient.",
        "userNotExist": "[ CT ] Invalid recipient(s).",
        "invalidInput": "[ CT ] Invailid amount.",
        "payerNotExist": "[ CT ] Please wait 5 seconds to be fully registered as right now you are not a member yet.",
        "notEnoughMoney": "[ CT ] Insufficient fund. Please check your amount.",
        "paySuccess": "[ CT ] Successfully transfered %1$ to %2 (5% tax included)",
        "error": "[ CT ] Unknown error occured, please contact administrator."
    }
}

module.exports.run = async function ({ api, event, Currencies, Users, args, getText }) {
    const { increaseMoney, decreaseMoney, getData } = Currencies;
    const { threadID, messageID, senderID } = event;
	var targetID = String(args[1]);
	var moneyPay = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		const mention = Object.keys(event.mentions);
        if (mention.length == 0) return api.sendMessage(getText("missingTag"), threadID, messageID);
        if (mention.length > 1) return api.sendMessage(getText("overTagLength"), threadID, messageID);
		args = args.join(" ");
		targetID = String(mention[0]);
		moneyPay = (args.slice(args.indexOf(event.mentions[mention[0]]) + (event.mentions[mention[0]] || "").length + 1, args.length)) || null;
	}

    if (!global.data.allCurrenciesID.includes(targetID)) return api.sendMessage(getText("userNotExist"), threadID, messageID);

    if (isNaN(moneyPay) && moneyPay < 1) return api.sendMessage(getText("invalidInput"), threadID, messageID);
    const taxed = (parseInt(moneyPay) * 5) / 100;
    
    try {
        const moneyPayer = (await getData(senderID)).money;
        if (!moneyPayer) return api.sendMessage(getText("payerNotExist"), threadID, messageID);
        if (moneyPayer < moneyPay) return api.sendMessage(getText("notEnoughMoney"), threadID, messageID);
        const nameTarget = global.data.userName.get(targetID) || await Users.getNameUser(targetID);
        await decreaseMoney(senderID, parseInt(moneyPay));
        await increaseMoney(targetID, parseInt(moneyPay) - taxed);
        return api.sendMessage(getText("paySuccess", (parseInt(moneyPay) - taxed), `${targetID} - ${nameTarget}`), threadID, messageID);
    } catch { return api.sendMessage(getText("error"), threadID, messageID) }
}