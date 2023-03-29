const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "dxev2",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "...",
    description: "ZingSpeedMobile trên Messenger !",
    commandCategory: "Game",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/Zing/datauser/`;
    const _dir = __dirname + `/Zing/datauser/`;
    const __dir = __dirname + `/Zing/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'Zing', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./Zing/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/Zing/cache/zing.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/Zing/cache/zing.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
   const { senderID, messageID, threadID } = event;
     const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');
    const pathData = path.join(__dirname, 'Zing', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case 'register':
        case '-r': {
            const nDate = new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
            });
            if (!existsSync(pathData)) {
                var obj = {};
                obj.name = (await Users.getData(senderID)).name;
                obj.ID = senderID;
                obj.shield = 3
                obj.coins = 20000
                obj.Island = {};
                obj.Island.level = 1
                obj.Island.coinsLV = 200
                obj.Island.data = {};
                obj.Island.data.tower = 0
                obj.Island.data.tree = 0
                obj.Island.data.pool = 0
                obj.Island.data.pet = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("🚘Đăng kí thành công tiến vào đấu trường", threadID, messageID);
            } else return api.sendMessage("🚘 Bạn đã có trong cơ sở dữ liệu", threadID, messageID);

        }
        case 'spin': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `Bạn chưa đăng kí game!`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/lv_0_20220409194245.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('🚘 Bạn đã hết lượt quay vui lòng mua thêm lượt hoặc đợi 5phut để hệ thống tự tặng bạn thêm lượt quay', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'Ngân Hà', 'Đêm đen', 'Khải huyền', '1 lượt quay', '2 lượt quay', '7 lượt quay', '5 lượt quay' , 'Tia chớp đen'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `Chúc mừng bạn quay trúng : ${getItem}`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/img20181224105729783.jpg')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/Zing/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`Cần ít nhất có 3 người chơi trên Map để đua`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./Zing/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `Số tiền cao nhất là: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Xe cấp ${randomIndex[i].Island.level}\n`
                }
                msg += 'Vui lòng reply với lựa chọn bạn muốn lấy xe của đối phương'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "steal",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`Cần ít nhất có 3 người chơi trên server để tấn công người chơi`, threadID, messageID);
                var msgf = `[====ATTACK====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./Zing/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - Map ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "attack",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case 'build': 
        case 'xaydung': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/game-zingspeed-mobile.jpg')}, threadID, messageID);
            }
            var a = require(`./daorong/datauser/${senderID}.json`);
            return api.sendMessage(`🚘 Nâng cấp xe\n1.Động cơ - ${a.Island.coinsLV * (a.Island.data.tower + 1)} coins (${a.Island.data.tower}/50)\n2.Truyền động - ${a.Island.coinsLV * (a.Island.data.tree + 1)} coins(${a.Island.data.tree}/50)\n3.Nhiên liệu - ${a.Island.coinsLV * (a.Island.data.pool + 1)} coins (${a.Island.data.pool}/50)\n4.Nitro - ${a.Island.coinsLV * (a.Island.data.pet + 1)} coins (${a.Island.data.pet}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "build"
                })
            }, messageID);
        }
        case 'shop': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "🚘Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/bZqS5tx.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Shop ] ──  \n\n🚘 Danh Sách Xe Đua Bạn Có Thể Mua 🚘\n1 - Ngân Hà\n2 - Đêm Đen\n3 - Khải Huyền\n4 - Tia Chớp Đen\n5 - Ranger\n6 - Thợ Săn\n🚘 Hãy reply tin nhắn và kèm theo số`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/e4cw4whmfk.gif')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "shop"
                })
            }, messageID);
        }
        case 'đấu': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "🚘Bạn chưa đăng kí game!", attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/img20181224105729783.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ CHỌN MAP ] ──  \n\n❤️ Chọn map để đua\n🗺1 - Thung Lủng Tuyết\n🗺2 - Ướp Lạnh\n🗺3 - Đảo Chim Cánh Cụt\n`, attachment: await this.image(' https://sv3.anh365.com/images/2022/04/09/FB_IMG_1649510626569.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "đấu"
                })
            }, messageID);
        }
        case 'me':
        case 'info': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/gWuh3JT.jpg')}, threadID, messageID);
            }
            var a = require(`./daorong/datauser/${senderID}.json`);
            return api.sendMessage(`🚘 KHO ĐỒ NÂNG CẤP 🚘\n- ... ${a.Island.level}\n- Số lượt quay còn lại: ${a.spin}\n- Coins: ${a.coins}\n- Map:\n• ... (${a.Island.data.tower}/50)\n• ... (${a.Island.data.tree}/50)\n• ... (${a.Island.data.pool}/50)\n• ... (${a.Island.data.pet}/50)`, threadID, messageID);
        }
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/k3JyZfJ.jpg')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/Zing/datauser`);
            if(data.length < 3) return api.sendMessage(`Cần ít nhất có 3 người chơi trên server để xem top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./Zing/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Đảo level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '===TOP 3 NGƯỜi LEVEL CAO NHẤT===\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} với level ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `===[ ZingSpeedMobile ]===\n» R: Đăng kí\n» SPIN: Vòng quay game\n» BUILD: Nâng cấp xe\n» SHOP: Shop mua xe\n» INFO: Xem thông tin về bạn\n» TOP: Xem top level trên server\n» CHANGE: Quy đổi tiền sang tiền game và ngược lại\nĐẤU`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/img20190413121232116.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 'build': {
            var a = require(`./daorong/datauser/${senderID}.json`);
            var l = ['tower', 'tree', 'pool', 'pet']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`Bạn không đủ số coins trong game để xây dựng!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.tower == 50) return api.sendMessage('Cấp bậc xe này đang ở mức tối đa nên không thể nâng cấp', threadID, messageID);
                a.Island.data.tower = a.Island.data.tower + 10;
                api.sendMessage(`Nâng cấp thành công: ${a.Island.data.tower}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.tree == 50) return api.sendMessage('Cấp bậc xe này đang ở mức tối đa nên không thể nâng cấp', threadID, messageID);
                a.Island.data.tree = a.Island.data.tree + 10;
                api.sendMessage(`Nâng cấp thành công: ${a.Island.data.tree}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.pool == 50) return api.sendMessage(' Cấp bậc xe này đang ở mức tối đa nên không thể nâng cấp', threadID, messageID);
                a.Island.data.pool = a.Island.data.pool + 10;
                api.sendMessage(`Nâng cấp thành công: ${a.Island.data.pool}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.pet == 50) return api.sendMessage(' Cấp bậc xe này đang ở mức tối đa nên không thể nâng cấp', threadID, messageID);
                a.Island.data.pet = a.Island.data.pet + 10;
                api.sendMessage(`Nâng cấp thành công: ${a.Island.data.pet}/50`, threadID, messageID);
            }
            if(a.Island.data.tower == 50 && a.Island.data.tree == 50 && a.Island.data.pool == 50 && a.Island.data.pet == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`Nâng cấp của bạn đã đạt được cấp tối đa!\nBạn sẽ được nâng cấp lên map ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.tower = 0;
                a.Island.data.tree = 0;
                a.Island.data.pool = 0;
                a.Island.data.pet = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case 'shop': {
            if(body == 1) {
                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘\n[🚘]Tên :Ngân Hà
🚘 Đặc điểm: Ngân Hà là xe đua dùng hệ thống điều khiển tiên tiến mang đến khả năng phản ứng cực nhạy\n🚘Tuyệt chiêu: Sau khi quay trở lại đường đua, nhận ngay Mini Boost và tăng 40% sức mạnh duy trì 20 giây
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---Ngan-Ha.png')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘️\n[🚘]Tên :Đêm Đen
🚘 Đặc điểm: Truyền Thuyết Đêm Đen vô hình, mã lực máy phát động 6.5  siêu mạnh, sự kết hợp hoàn hảo tạo nên bản lĩnh một tuyển thủ đua đỉnh cao. \n🚘Tuyệt chiêu: 1. Kết thúc thời gian đếm ngược khi xuất phát, nhận ngay 40% năng lượng Nitro.
2. Khi đụng tường, năng lương Nitro bảo lưu 70%
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---Dem-Den.png')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘️\n[🚘]Tên :Khải Huyền
🚘 Đặc điểm: Lớp vỏ ngoài bằng kim loại siêu cứng như người sắt biến hình "bất khả chiến bại" với 4 ống xả cực mạnh để nó có thể tung hoành tùy ý.\n 🚘Tuyệt chiêu: Đổi hướng đường trường (không dùng Drift) sẽ không bị giảm tốc độ.
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---Khai-Huyen.png')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘️\n[🚘]Tên :Tia Chớp Đen
🚘 Đặc điểm: Tia chớp đen có ngoại hình xa hoa như các dạng xe thể thao nổi tiếng cùng một hệ thống đổi tốc độ vô cùng mượt mà , kỹ thuật mạ màu độc quyền làm cho cả xe lắp lánh như một khối vàng đen.\n🚘Tuyệt chiêu: mỗi lần dùng Boost 2 lần, 25% + 3km/h tốc độ cao nhất trong 4 giây.
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---tia-chp-den-2.jpg')}, threadID, messageID);
            }
            else if(body == 5) {
                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘️\n[🚘]Tên : Ranger
🚘 Đặc điểm: Thiết kế phá cách, đuôi xe được gắn thiết bị cảm ứng điện quang. \n🚘Tuyệt chiêu: Hiệu quả tăng tốc đuổi theo +30% (tất ca các xe không phải hạng 1 đều có hiệu ứng đuổi theo, riêng hiệu ứng tăng tốc của Ranger mạnh hơn. 
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---Ranger.png')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `🚘️ MUA THÀNH CÔNG 🚘️
[🚘] Tên: Thợ Săn
🚘 Đặc điểm: Thợ Săn có màu xanh đặc biệt, trên thân xe màu xanh còn có nhiều hoa văn, thể hiện phong cách cực đỉnh của tay đua. \n🚘Tuyệt chiêu: mỗi lần đụng tường, có 60% xác xuất tăng + 8m/h tốc độ tối đa, duy trì 12 giây
`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/A---Tho-Son.png')}, threadID, messageID);
            }
            else {
                return api.sendMessage('Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }

         case 'mua': {
            if(body == 1) {
                return api.sendMessage('Vui lòng reply tin nhắn này với số tiền bạn muốn đổi! Chiết khấu 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "botcoins"
                    })
                }, messageID);
            }
            else if(body == 2) {
                return api.sendMessage('Vui lòng reply tin nhắn này với số tiền bạn muốn đổi! Chiết khấu 0%', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "coinsbot"
                    })
                }, messageID);
            }
            else if(body == 3) {
                return api.sendMessage('Vui lòng reply tin nhắn này với số lượt quay bạn muốn mua! (10 lượt quay 2000$)', threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "spinn"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }
        case 'đấu': {
            if(body == 1) {
  var coindaorong = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `🚘️ BẮT ĐẦU 🚘\n[🗺] MAPS: Thung lủng tuyết.\n[🏆] Chúc Mừng bạn đã chiến thắng đối thủ\n» Giải thưởng của bạn là: ${coindaorong}$\n» Thua: ${huhong}%`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/zs50.gif')}, threadID, messageID);
        }
            else if(body == 2) {
               var coindaorong = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `🚘️ BẮT ĐẦU 🚘️\n[🗺] MAPS: Ướp lạnh.\n[🏆] Chúc Mừng bạn đã chiến thắng đối thủ\n» Giải thưởng của bạn là: ${coindaorong}$\n» Thua: ${huhong}%`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/zs50.gif')}, threadID, messageID);
        }
            else if(body == 3) {
   var coindaorong = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `🚘 BẮT ĐẦU 🚘️\n[🗺] MAPS: Đảo chim cánh cụt.\n[🏆] Chúc Mừng bạn đã chiến thắng đối thủ\n» Giải thưởng của bạn là: ${coindaorong}$\n» Thua: ${huhong}%`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/zs50.gif')}, threadID, messageID);
            }
            else if(body == 4) {
   var coindaorong = Math.floor(Math.random() * 80000) + 10000;
  var huhong = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `🚘 BẮT ĐẦU 🚘️\n[🗺] MAPS: ATLANTIS.\n[🏆] Chúc Mừng bạn đã chiến thắng đối thủ\n» Giải thưởng của bạn là: ${coindaorong}$\n» Thua: ${huhong}%`, attachment: await this.image('https://sv3.anh365.com/images/2022/04/09/zs50.gif')}, threadID, messageID);
            }
          }
        case 'spinn': {
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.spin = a.spin + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Mua thành công ${body} lượt quay (${parseInt(body) * 200}$`, threadID, messageID);
        }
        case 'botcoins': {
            var a = require(`./Zing/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Nạp thành công ${body} coins vào game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./Zing/datauser/${senderID}.json`);
            if(a.coins < parseInt(body)) return api.sendMessage('Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
            api.unsendMessage(handleReply.messageID)
            await Currencies.increaseMoney(senderID, parseInt(body));
            a.coins = a.coins - parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Rút thành công ${body} coins về tài khoản bot!`, threadID, messageID);
        }
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return api.sendMessage('Bạn không đủ tiền để thực hiện giao dịch này!', threadID, messageID);
    }
}
module.exports.getSpin = function (items, getItem, senderID) {
    const path = this.checkPath(1, senderID)
    var pathData = this.checkPath(2, senderID)
    var i = items.findIndex(index => index == getItem);
    if(i == 0) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 1000
    if(i == 1) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 3000
    if(i == 2) pathData.coins = parseInt(pathData.coins) + pathData.Island.level * 5000
    if(i == 4) {
        if(pathData.shield != 3) {
            pathData.spin = parseInt(pathData.spin) + 1
            pathData.shield = parseInt(pathData.shield) + 1;
        }
    }
    if(i == 6) pathData.spin = parseInt(pathData.spin) + 1
    if(i == 7) pathData.spin = parseInt(pathData.spin) + 2
    if(i == 8) pathData.spin = parseInt(pathData.spin) + 5
    writeFileSync(path, JSON.stringify(pathData, null, 4));
    return i
        }