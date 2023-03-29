module.exports.config = {
  name: "resetmoney",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "manhG",
  description: "Reset số tiền của cả nhóm/all nhóm về 0",
  commandCategory: "Tiện ích",
  usages: "[cc], [del], [all]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies, args }) => {
  switch (args[0]) {
    case 'all':
      {
        const permission = ["100068940754681"];
	if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lực của bạn không đủ mạnh để sử dụng lệnh này! ", event.threadID, event.messageID);
        const allUserID = global.data.allUserID;
        for (const singleUser of allUserID) {
          var currenciesData = await Currencies.getData(singleUser)
          if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
              money -= money;
              await Currencies.setData(singleUser, { money });
            }
          }
        }
        api.sendMessage("Số money của toàn bộ người dùng trên server đã được reset về mức 0 !", event.threadID)
      }
      break;
    default:
      {
        const data = event.participantIDs;
        for (const userID of data) {
          var currenciesData = await Currencies.getData(userID)
          if (currenciesData != false) {
            var money = currenciesData.money;
            if (typeof money != "undefined") {
              money -= money;
              await Currencies.setData(userID, { money });
            }
          }
        }
        api.sendMessage("Số money của thành viên nhóm đã được reset về mức 0 !", event.threadID);
      }
      break;
  }

                }