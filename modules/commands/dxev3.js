const path = require("path");
const { mkdirSync, writeFileSync, existsSync, createReadStream, readdirSync } = require("fs-extra")
const axios = require("axios")

module.exports.config = {
    name: "dxev3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "F1",
    commandCategory: "Game",
    usages: "[]",
    cooldowns: 0
};


module.exports.onLoad = async () => {
    const dir = __dirname + `/duaxe/datauser/`;
    const _dir = __dirname + `/duaxe/datauser/`;
    const __dir = __dirname + `/duaxe/cache/`;
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    if (!existsSync(_dir)) mkdirSync(_dir, { recursive: true });
    if (!existsSync(__dir)) mkdirSync(__dir, { recursive: true });
    return;
}

module.exports.checkPath = function (type, senderID) {
    const pathGame = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    const pathGame_1 = require("./duaxe/datauser/" + senderID + '.json');
    if (type == 1) return pathGame
    if (type == 2) return pathGame_1
}

module.exports.image = async function(link) {
    var images = [];
    let download = (await axios.get(link, { responseType: "arraybuffer" } )).data; 
        writeFileSync( __dirname + `/duaxe/cache/duaxe.png`, Buffer.from(download, "utf-8"));
        images.push(createReadStream(__dirname + `/duaxe/cache/duaxe.png`));
    return images
}

module.exports.run = async function ({ api, event, args, client,Threads,__GLOBAL, Users, Currencies,getText }) {
    const { threadID, messageID, senderID } = event;
    const pathData = path.join(__dirname, 'duaxe', 'datauser', `${senderID}.json`);
    switch (args[0]) {
        case '1':
        case 'register': {
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
                obj.Island.data.Vôlăng = 0
                obj.Island.data.Bánhxe = 0
                obj.Island.data.Độngcơ = 0
                obj.Island.data.Boots = 0
                obj.spin = 20
                obj.timeRegister = nDate
                writeFileSync(pathData, JSON.stringify(obj, null, 4));
                return api.sendMessage("🏁Đăng kí thành công!!🏁", threadID, messageID);
            } else return api.sendMessage("🏁Bạn đã có trong cơ sở dữ liệu🏁", threadID, messageID);

        }
        case '2': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: `Bạn chưa đăng kí game!`, attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            if(this.checkPath(2, senderID).spin == 0) return api.sendMessage('Bạn đã hết lượt quay, vui lòng mua thêm hoặc đợi 5p hệ thống sẽ tặng bạn 5 lượt', threadID, messageID);
            this.checkPath(2, senderID).spin = parseInt(this.checkPath(2, senderID).spin) - 1;
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(this.checkPath(2, senderID), null, 4));
            var items = [`${this.checkPath(2, senderID).Island.level * 1000} coins`, `${this.checkPath(2, senderID).Island.level * 3000} coins`, `${this.checkPath(2, senderID).Island.level * 5000} coins`, 'nịt', 'RB18', 'W13', '1 lượt quay', '2 lượt quay', '5 lượt quay'];
            var getItem = items[Math.floor(Math.random() * items.length)];
            var i = this.getSpin(items, getItem, senderID);
            api.sendMessage({body: `Chúc mừng bạn quay chúng : ${getItem}`, attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(i == 3) {
                if(data.length < 4) return api.sendMessage(`Cần ít nhất có 3 người chơi trên server để cướp xe`, threadID, messageID);
                const dem = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        dem.push(require(`./duaxe/datauser/${i}`));
                    }
                }
                dem.sort((a, b) => a.coins + b.coins);
                var msg = `Số tiền cao nhất là: ${dem[0].coins / 2}\n`
                const randomIndex = dem.sort(function() { return .5 - Math.random() });
                for(var i = 0; i < 3; i ++) {
                    msg += `${i+1}. ${randomIndex[i].name} - Buồng lái xe level ${randomIndex[i].Island.level}\n`
                }
                msg += 'Vui lòng reply với lựa chọn bạn muốn cướp!!'
                return api.sendMessage(`==========\n${msg}`, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "cướp",
                        dem,
                        randomIndex
                    })
                }, messageID);
            }
            else if(i == 5) {
                if(data.length < 4) return api.sendMessage(`Cần ít nhất có 3 người chơi trên server để đua`, threadID, messageID);
                var msgf = `[====Đua====]\n`, number = 1, p = [];
                for (let i of data) { 
                    if(i != `${senderID}.json`) {
                        var o = require(`./duaxe/datauser/${i}`);
                        p.push(o)
                        msgf += `${number++}. ${o.name} - BUỒNG XE level ${o.Island.level}\n`
                    }
                }
                return api.sendMessage(msgf, threadID, (error, info) => {
                    global.client.handleReply.push({
                        name: this.config.name,
                        messageID: info.messageID,
                        author: event.senderID,
                        type: "đua",
                        p
                    })
                }, messageID);
            }
            break;
        }
        case '3': 
        case 'sửa xe': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/U5iTMPk.jpg')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`Bạn muốn sửa xe ở khu vực nơi nào ở Buồng lái lái!\n1. Vôlăng - ${a.Island.coinsLV * (a.Island.data.Vôlăng + 1)} coins (${a.Island.data.Vôlăng}/50)\n2. Bánh Xe - ${a.Island.coinsLV * (a.Island.data.Bánhxe + 1)} coins(${a.Island.data.Bánhxe}/50)\n3.Động Cơ - ${a.Island.coinsLV * (a.Island.data.Độngcơ + 1)} coins (${a.Island.data.Độngcơ}/50)\n4. Boots - ${a.Island.coinsLV * (a.Island.data.Boots + 1)} coins (${a.Island.data.Boots}/50)\n==============`, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "sửa xe"
                })
            }, messageID);
        }
        case '4': 
        case 'cửa hàng': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/RdtR0WI.jpg')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ SHOP F1 ] ──  \n\n🏁Danh sách xe bạn có thể mua\n[1].  RB9 – RED BULL\n[2]. 250F – MASERATI \n[3].MP4/2 – MCLAREN\n[4]. F2002 – FERRARI\n[5]. 500 – FERRARI \n[6]. FW14 – WILLIAMS\n[7]. FERRARI F2004\n[8]. W07 HYBRID – MERCEDES\n[9]. LOTUS 72`, attachment: await this.image('https://imgur.com/RdtR0WI.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "cửa hàng"
                })
            }, messageID);
        }
        case 'đua': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/2pdLGGl.gif')}, threadID, messageID);
            }
     return api.sendMessage({body: `── [ Đua xe ] ──  \n\n🐸Danh sách trận đua ở các nước\n[🏎1].Việt Nam\n[🐉2].Úc\n[🦋3].Tây Ban Nha\n`, attachment: await this.image('https://imgur.com/w3DKCwJ.jpg')}, threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "đua"
                })
            }, messageID);
        }
        case '5':
        case 'info': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            var a = require(`./duaxe/datauser/${senderID}.json`);
            return api.sendMessage(`=====DUAXE=====\n- Bạn đang ở Buồng lái level ${a.Island.level}\n- Số lượt quay còn lại: ${a.spin}\n- Coins: ${a.coins}\n- Thông tin Buồng lái:\n• Vô Lăng (${a.Island.data.Vôlăng}/50)\n• Bánhxe (${a.Island.data.Bánhxe}/50)\n• Độngcơ
(${a.Island.data.Độngcơ}/50)\n• Boots
(${a.Island.data.Boots}/50)`, threadID, messageID);
        }
        case '5':
        case 'top': {
            if (!existsSync(pathData)) {
                return api.sendMessage({body: "Bạn chưa đăng kí game!", attachment: await this.image('https://imgur.com/Lct1enP.gif')}, threadID, messageID);
            }
            const data = readdirSync(__dirname + `/duaxe/datauser`);
            if(data.length < 3) return api.sendMessage(`Cần ít nhất có 3 người chơi trên server để xem top`, threadID, messageID);
            var p = []
            for (let i of data) { 
                var o = require(`./duaxe/datauser/${i}`);
                p.push(o)
                msgf += `${number++}. ${o.name} - Buồng lái level ${o.Island.level}\n`
            }
            p.sort((a, b) => b.Island.level - a.Island.level);
            var msg = '===TOP 3 BUỒNG LÁI LEVEL CAO NHẤT===\n'
            for(var i = 0; i < 3; i++) {
                msg += `${i+1}. ${p[i].name} với buồng lái level ${p[i].Island.level}\n`
            }
            return api.sendMessage(msg, threadID, messageID);
        }
        default: {
            return api.sendMessage({body: `🏁ĐUA XE F1🏁\n-♦️1: Đăng kí\n-♦️2: Vòng quay game\n-♦️3: Sửa buồng xe\n-♦️4: Shop mua xe\n-♦️5: Xem thông tin về bạn\n-♦️6: Xem top level trên server\n-♦️7: Quy đổi tiền của bot sang tiền game và ngược lại\n-♦️8:đua\n🏎️ F1 🏎️\n sử dụng !duaxe (số)`, attachment: await this.image('https://i.imgur.com/1IGN0IP.jpg')}, threadID, messageID);
        }
    }
}
module.exports.handleReply = async ({ event, api, Currencies, handleReply, Users, getText}) => {

  const { body, threadID, messageID, senderID } = event;
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    switch (handleReply.type) {
        case 'sửa': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
            var l = ['Vôlăng', 'Bánhxe', 'Độngcơ', 'Boots']
            if(a.coins < a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1)) return api.sendMessage(`Bạn không đủ số coins trong game để sửa!`, threadID, messageID);
            a.coins = a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1);
            await Currencies.decreaseMoney(senderID, a.Island.coinsLV * (a.Island.data[l[parseInt(body) - 1]] + 1));
            api.unsendMessage(handleReply.messageID)
            if(body == 1) {
                if(a.Island.data.Vôlăng == 50) return api.sendMessage('Cấp bậc khu vực này đang ở mức tối đa nên không thể sửa xe', threadID, messageID);
                a.Island.data.Vôlăng = a.Island.data.Vôlăng + 10;
                api.sendMessage(`Sửa thành công: ${a.Island.data.Vôlăng}/50`, threadID, messageID);
            }
            if(body == 2) {
                if(a.Island.data.Bánhxe == 50) return api.sendMessage('Cấp bậc khu vực này đang ở mức tối đa nên không thể sửa xe', threadID, messageID);
                a.Island.data.Bánhxe = a.Island.data.Bánhxe + 10;
                api.sendMessage(`Sửa thành công: ${a.Island.data.Bánhxe}/50`, threadID, messageID);
            }
            if(body == 3) {
                if(a.Island.data.Độngcơ == 50) return api.sendMessage('Cấp bậc khu vực này đang ở mức tối đa nên không thể sửa xe', threadID, messageID);
                a.Island.data.Độngcơ = a.Island.data.Độngcơ + 10;
                api.sendMessage(`Sửa thành công: ${a.Island.data.Độngcơ}/50`, threadID, messageID);
            }
            if(body == 4) {
                if(a.Island.data.Boots == 50) return api.sendMessage('Cấp bậc khu vực này đang ở mức tối đa nên không thể sửa xe', threadID, messageID);
                a.Island.data.Boots = a.Island.data.Boots + 10;
                api.sendMessage(`Sửa thành công: ${a.Island.data.Boots}/50`, threadID, messageID);
            }
            if(a.Island.data.Vôlăng == 50 && a.Island.data.Bánhxe == 50 && a.Island.data.Độngcơ == 50 && a.Island.data.Boots == 50) {
                await new Promise(resolve => setTimeout(resolve, 1000));
                api.sendMessage(`Sửa buồng xe của bạn đã đạt được cấp tối đa!\nBạn sẽ được nâng cấp lên đ���o LV ${(a.Island.level) + 1}`, threadID, messageID);
                a.Island.level = a.Island.level + 1;
                a.Island.coinsLV = a.Island.coinsLV + 100;
                a.Island.data.Vôlăng = 0;
                a.Island.data.Bánhxe = 0;
                a.Island.data.Độngcơ = 0;
                a.Island.data.Boots = 0;
            }
            return writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
        }
        case '4': {
            if(body == 1) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : Red Bull RB9\n[🏎️]Thông Tin : SRed Bull RB9 cũng là chiếc xe Công thức 1 cuối cùng do Renault chế tạo giành được danh hiệu nhà xây dựng thế giới cho đến nay.\n[🏎️]Chiều dài : 5,080 mm\n[🏎️]Chiều rộng : 1.800 mm\n[🏎️] Chiều cao : 950 mm \n`, attachment: await this.image('https://imgur.com/muLmkPb.png')}, threadID, messageID);
            }
            else if(body == 2) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : 250F – MASERATI
[🏎️]Thông Tin : đã được sử dụng trong giải Grand Prix Pháp năm 1956 
[🏎️]Chiều dài : 4.050 mm
[🏎️]Chiều rộng :1.980 mm
[🏎️] Chiều cao : 950 mm
[🏎️]Trọng lượng: 670 kg
`, attachment: await this.image('https://imgur.com/RUxmdwz.png')}, threadID, messageID);
            }
            else if(body == 3) {

                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : MP4/2 – MCLAREN
[🏎️]Thông Tin :McLaren MP4 / 2 là chiếc xe thống trị giải vô địch thế giới công thức 1 năm 1984 và kết thúc mùa giải bằng cách giành cả hai danh hiệu
[🏎️]Chiều dài : 4,343 mm
[🏎️]Chiều rộng : 2.133 mm
[🏎️] Chiều cao : 991 mm
[🏎️]Trọng lượng: 540 kg 
`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
             }
            else if(body == 4) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : F2002 – FERRARI
[🏎️]Thông Tin : Nó được nhiều người coi là một trong những thiết kế xe Công thức Một thành công nhất mọi thời đại
[🏎️]Chiều dài : 4,495  mm
[🏎️]Chiều rộng : 	1.796  mm
[🏎️] Chiều cao : 959  mm
[🏎️]Trọng lượng: 600 kg
 `, attachment: await this.image('https://imgur.com/Vi5w8K9.png')}, threadID, messageID);
            }
            else if(body == 5) {
                return api.sendMessage({body: `🏎️]Tên : 500 – FERRARI 
[🏎️]Thông Tin : Ferrari 500 là một chiếc xe đua Công thức 2 được thiết kế bởi Aurelio Lampredi và được Ferrari sử dụng
[🏎️]Chiều dài : 2.197 mm 
[🏎️]Trọng lượng: 560 kg`, attachment: await this.image('https://imgur.com/cLuenho.png')}, threadID, messageID);
            }
            else if(body == 6) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : FW14 – WILLIAMS
[🏎️]Thông Tin : Williams FW14 là một chiếc xe đua Công thức 1 được sử dụng bởi ��ội Canon Williams trong suốt năm 1991 và 1992
[🏎️]Chiều dài :  2921 mm
[🏎️]Trọng lượng: 605kg`, attachment: await this.image('https://imgur.com/MpoNVxe.png')}, threadID, messageID);
            }
            else if(body == 7) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : FERRARI F2004
[🏎️]Thông Tin : F2004 là một chiếc xe đua Công thức Một rất thành công đã được Ferrari sử dụng cho mùa giải Công thức Một năm 2004 .
[🏎️]Chiều dài : 4,545  mm
[🏎️]Chiều rộng : 1.796  mm
[🏎️] Chiều cao : 959  mm 
[🏎️]Trọng lượng: 605 kg`, attachment: await this.image('https://imgur.com/gmfEF88.png')}, threadID, messageID);
            }
            else if(body == 8) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : W07 HYBRID – MERCEDES
[🏎️]Thông Tin : Mercedes F1 W07 Hybrid là một chiếc xe đua Công thức một đã tham gia tranh tài tại Giải vô địch thế giới công thức một năm 2016 của FIA .
[🏎️]Chiều dài : 	5,000 mm
[🏎️]Chiều rộng : 1.800 mm
[🏎️] Chi��u cao : 	950 mm
[🏎️]Trọng lượng: 702 kg`, attachment: await this.image('https://imgur.com/fIqJKyV.png')}, threadID, messageID);
            }
            else if(body == 9) {
                return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : LOTUS 72
[🏎️]Thông Tin : Lotus đã có một số chiếc xe mang tính biểu tượng trong Công thức 1
[🏎️]Chiều dài : 4,191 mm
[🏎️]Chiều rộng : 1.880 mm
[🏎️] Chiều cao : 1,168 mm 
[🏎️]Trọng lượng: 580kg`, attachment: await this.image('https://imgur.com/OpXX40C.png')}, threadID, messageID);
            }
            else {
                return api.sendMessage('Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }

         case '7': {
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
                        type: "2"
                    })
                }, messageID);
            }
            else {
                return api.sendMessage('Lựa chọn không hợp lệ!', threadID, messageID);
            }
        }
        case '8': {
            if(body == 1) {
  var coinduaxe = Math.floor(Math.random() * 80000) + 10000;
  var dohiem = Math.floor(Math.random() * 90) + 20;
                return api.sendMessage({body: `----> Thành công <---- \n[🐉] Nước : Việt Nam.\n[🏎️]Bạn đã đua xe và nhận ${coinduaxe}$\n`, attachment: await this.image('https://imgur.com/eIMdCrg.gif')}, threadID, messageID);
        }
            else if(body == 2) {
                 return api.sendMessage({body: `----> Thành công <---- \n[🏎️]Tên : W07 HYBRID – MERCEDES
[🏎️]Thông Tin : Mercedes F1 W07 Hybrid là một chiếc xe đua Công thức một đã tham gia tranh tài tại Giải vô địch thế giới công thức một năm 2016 của FIA .
[🏎️]Chiều dài : 	5,000 mm
[🏎️]Chiều rộng : 1.800 mm
[🏎️] Chiều cao : 	950 mm
[🏎️]Trọng lượng: 702 kg`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
        }
            else if(body == 3) {
                return api.sendMessage({body: `-----> Thành công <---- \n[🏎️]Tên : W07 HYBRID – MERCEDES
[🏎️]Thông Tin : Mercedes F1 W07 Hybrid là một chiếc xe đua Công thức một đã tham gia tranh tài tại Giải vô địch thế giới công thức một năm 2016 của FIA .
[🏎️]Chiều dài : 	5,000 mm
[🏎️]Chiều rộng : 1.800 mm
[🏎️] Chiều cao : 	950 mm
[🏎️]Trọng lượng: 702 kg`, attachment: await this.image('https://imgur.com/heCExdt.png')}, threadID, messageID);
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
            var a = require(`./duaxe/datauser/${senderID}.json`);
            await checkMoney(senderID, parseInt(body));
            api.unsendMessage(handleReply.messageID)
            await Currencies.decreaseMoney(senderID, parseInt(body));
            a.coins = a.coins + parseInt(body)
            writeFileSync(this.checkPath(1, senderID), JSON.stringify(a, null, 4));
            return api.sendMessage(`Nạp thành công ${body} coins vào game!`, threadID, messageID);
        }
        case 'coinsbot': {
            var a = require(`./duaxe/datauser/${senderID}.json`);
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