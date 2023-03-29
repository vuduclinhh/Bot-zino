/**
 * @author datoccho
 * @you can edit creditss freely it's your right as long as you are not human if you are human don't change creditss
 */
const fs = require("fs"),
      request = require("request"),
       pathFile = __dirname + "/cache/";

module.exports.config = {
    name: `tx`,
    version: `1.0.2`,
    hasPermssion: 0,
    creditss: ``,
    description: `hên xui`,
    commandCategory: `Game`,
    usages: `[xỉu|tài] [số tiền tham gia]`,
    cooldowns: 5
};
module.exports.onLoad = () => {
  
  if (!fs.existsSync(pathFile + "cache")) fs.mkdirSync(pathFile, { recursive: true });
  
  if (!fs.existsSync(pathFile + this.config.name +".gif")) request("https://i.imgur.com/cnoG4td.gif").pipe(fs.createWriteStream(pathFile + this.config.name +".gif"));
}
module.exports.run = async({
    api, event, args, Currencies
}) => {
    const {
        getData, increaseMoney, decreaseMoney
    } = Currencies;
    const {
        createReadStream
    } = require(`fs-extra`);
    const {
        threadID, messageID, senderID
    } = event;
    const axios = global.nodemodule[`axios`];
    const fs = global.nodemodule[`fs-extra`];
    const data = (await Currencies.getData(senderID))
        .data || {};
    const getRandomIntInclusive = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    var taixiucac = [`tài ${getRandomIntInclusive(11, 17)}`, `xỉu ${getRandomIntInclusive(4, 10)}`];
    const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    const money = (await getData(senderID)).money;
    var moneyBet = parseInt(args[1]) ? parseInt(args[1]) : money; //:))
    var thang = moneyBet * 2;
    const tax = thang * 5 / 100;
    const tong = thang - tax;
    if (args[0] != "tài" && args[0] != "xỉu")
        return api.sendMessage('Không đúng định dạng.\nChỉ được tài/xỉu.', threadID, messageID);
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Số tiền đặt cược dưới 50 đô', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Số dư của bạn không đủ.', threadID, messageID);
  //if (args[1] == "tất" && args[2] == "tay" || args[1] == moneyBet) {
        api.sendMessage({
            body: '🎲Tung xí ngầu...',
          attachment: fs.createReadStream(__dirname + `/cache/${this.config.name}.gif`)
        }, threadID, (err, info) => {
            if (err) console.log(err);
            setTimeout(() => {
                api.unsendMessage(info.messageID);
                if (args[0].toLocaleLowerCase() == rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `𝗡𝗵𝗮̀ 𝗰𝗮́𝗶 𝗿𝗮: ${rdm}\n𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${args[0].toLocaleLowerCase()}\n𝗕𝗮̣𝗻 𝘁𝗵𝗮̆́𝗻𝗴 𝘃𝗮̀ 𝗻𝗵𝗮̣̂𝗻 𝗱𝘂̛𝗼̛̣𝗰 ${thang}$\n𝗩𝗮̀ 𝘁𝗿𝘂̛̀ 𝗱𝗶 𝘁𝗵𝘂𝗲̂́ 𝟱% 𝗰𝘂̉𝗮 ${thang} 𝗹𝗮̀ ${tax}\n𝗦𝗮𝘂 𝗸𝗵𝗶 𝘁𝗿𝘂̛̀ 𝘁𝗵𝘂𝗲̂ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗯𝗮̣𝗻 𝗻𝗵𝗮̣̂𝗻 𝗱𝘂̛𝗼̛̣𝗰 𝗹𝗮̀ ${tong}\n𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀: ${money + tong}$`
                    }, threadID, () => Currencies.increaseMoney(senderID, tong), messageID);
                } else if (args[0].toLocaleLowerCase() != rdm.slice(0, 3)) {
                    return api.sendMessage({
                        body: `\n𝗡𝗵𝗮̀ 𝗰𝗮́𝗶 𝗿𝗮: ${rdm} \n𝗕𝗮̣𝗻 𝗰𝗵𝗼̣𝗻: ${args[0].toLocaleLowerCase()}\n𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮! 𝘃𝗮̀ 𝗯𝗶̣ 𝘁𝗿𝘂̛̀ ${moneyBet ? moneyBet : money}$\n𝗦𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝗼̀𝗻 𝗹𝗮̣𝗶 𝘁𝗿𝗼𝗻𝗴 𝘁𝗮̀𝗶 𝗸𝗵𝗼𝗮̉𝗻 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗹𝗮̀: ${money - moneyBet}$`
                    }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
                } else {
                    return api.sendMessage(`𝗟𝗼̂̃𝗶 𝗴𝗼̀𝗶 𝗱𝗲́𝗼 𝗯𝗶𝗲̂́𝘁 𝗳𝗶𝘅 𝗱𝗮̂𝘂 ${err}`, threadID, messageID);
                }
            }, 3000);
        }, messageID);
    }