const fs = require("fs"),
      request = require("request"),
      path = __dirname + '/cache/daily.json',
       pathDaily = __dirname + "/cache/daily/";

module.exports.config = {
	name: "daily",
	version: "2.0",
	hasPermssion: 0,
	credits: "Nam mod by N-Tân",
	description: "Điểm danh nhận quà hằng ngày\n daily info => xem thông tin phần quà\n daily 7day => nhận quà bí mật khi tích đủ 7 điểm nhận từ đăng nhập hàng ngày",
	commandCategory: "Tài chính",
	usages: "+ info / 7day",
	cooldowns: 5,
  envConfig: {
        cooldownTime: 86400000,
        rewardCoin: 5000,
        rewardExp: 1000,
  }
};

module.exports.handleEvent = async function ({ event }) {
  
  let dataDaily = JSON.parse(fs.readFileSync(path));
  const { senderID } = event;
  
  var newDate = new Date(), 
      date = newDate.getDay() + 1;
    if (date == 2) {
  dataDaily[senderID] = {
                   diemdanh: 0
        }
fs.writeFileSync(path, JSON.stringify(dataDaily));
    }
  },

module.exports.onLoad = () => {
  
  if (!fs.existsSync(pathDaily + "cache", "daily")) fs.mkdirSync(pathDaily, { recursive: true });
  
  if (!fs.existsSync(pathDaily + this.config.name +".gif")) request("https://i.imgur.com/7ltbAS1.gif").pipe(fs.createWriteStream(pathDaily + this.config.name +".gif"));
  
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
    }
         
module.exports.run = async function({ api, event, args, Currencies }) {
  
  if (!fs.existsSync(pathDaily)) fs.mkdir(pathDaily);
	const listFile = fs.readdirSync(pathDaily);
  
  var checkDaily = JSON.parse(require("fs").readFileSync(__dirname + `/cache/daily.json`));
  let dataDaily = JSON.parse(fs.readFileSync(path));

  const { threadID, messageID, senderID, body} = event, c = this.config.credits, { daily } = global.configModule,
        cooldownTime = daily.cooldownTime,
        rewardCoin = daily.rewardCoin,
        rewardExp = daily.rewardExp;

var newDate = new Date(), 
      date = newDate.getDay() + 1;
  
  if (date == 1) thu = 'Chủ Nhật'
  if (date == 2) thu = 'Thứ Hai'
  if (date == 3) thu = 'Thứ Ba'
  if (date == 4) thu = 'Thứ Tư'
  if (date == 5) thu = 'Thứ Năm'
  if (date == 6) thu = 'Thứ Sáu'
  if (date == 7) thu = 'Thứ Bảy'
  
   if (args[0] == "info") {
      let msg = "";
          msg = `   ====== THÔNG TIN PHẦN QUÀ ======\n\n\n`;
      let i = 1;
      for (let i = 1; i < 8; i++) {
        const addMoney = Math.floor(rewardCoin*(1+7/100)**((i == 1 ? 7 : i) - 1)),
              addExp  = Math.floor(rewardExp*(1+7/100)**((i == 1 ? 7 : i) - 1));
    
        msg += `${i == 7 ? "Chủ Nhật" : "Thứ " + (i+1)}: 💸 ${addMoney} $ tiền mặt, 🧪${addExp} exp\n\n`;
      }
     
      return api.sendMessage(
        `${msg}\n\n    ==== Hôm Nay Là ${thu} ====`,
      threadID,
        async (error) => {
          if (error)
            return api.sendMessage(
              `Đã có lỗi xảy ra khi lấy thông tin phần quà`,
                threadID);
        }, messageID);
    }
  
  let exp = (await Currencies.getData(senderID)).exp,
      money = (await Currencies.getData(senderID)).money,
      data = (await Currencies.getData(senderID)).data || {};
  
  
  const addMoney = Math.floor(rewardCoin*(1+7/100)**((date == 1 ? 7 : date) - 1)),
        addExp = Math.floor(rewardExp*(1+7/100)**((date == 0 ? 7 : date) - 1));

  
    if (args[0] == "7day") {
      if (dataDaily[senderID].diemdanh <= 6) {
        return api.sendMessage(
          `Bạn mới điểm danh được ${dataDaily[senderID].diemdanh} ngày thôi!!, đủ 7 ngày liên tục mới nhận được phần quà bí mật nha`,
          threadID);
      }
        
      else if (dataDaily[senderID].diemdanh == 7) {
        const money7Day = parseInt(1000000),
              exp7Day = parseInt(10000);
        dataDaily[senderID] = {
                   diemdanh: 0
        }
fs.writeFileSync(path, JSON.stringify(dataDaily));
        
        return api.sendMessage({
     body: "Nhận quà đăng nhập 7 ngày thành công!!\n\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + "     🎊Phần quà bao gồm:🎊\n\n"
     + "     💸 " + money7Day.toLocaleString() + " Tiền mặt\n"
     + "     🧪 " + exp7Day.toLocaleString() + " Kinh Nghiệm\n"
     + "◆━━━━━•💜•━━━━━◆\n\n"
     + "Tích đủ 7 điểm để nhận quà tiếp",
        attachment: fs.createReadStream(pathDaily+"/"+listFile[Math.floor(Math.random() * listFile.length)])},
        threadID,
     async function (error) {
         await Currencies.setData(senderID, {
               exp: exp + parseInt(exp7Day),
               money: money + parseInt(money7Day)
           });
       
       if (error) {
         return api.sendMessage(
           `Đã có lỗi xảy ra khi nhận thưởng!!!`,
             threadID);
           }
        },messageID);
      }
    }

       if (!dataDaily[senderID]) {
    dataDaily[senderID] = {
                            diemdanh: 0
   }
fs.writeFileSync(path, JSON.stringify(dataDaily));
         return api.sendMessage(
           `Đã thêm bạn vào cơ sở dữ liệu vui lòng nhập lại để nhận thưởng!`,
           threadID);
      }
        
  else if('Nam mod by N-Tân'!=c)return;else if(typeof data !== "undefined" && cooldownTime - (Date.now() - (data.dailyCoolDown || 0)) > 0) {

      
    var time = cooldownTime - (Date.now() - data.dailyCoolDown),
        hours = Math.floor((time/(1000*60*60)) % 24),
        minutes = Math.floor((time/1000/60) % 60),
        seconds = Math.floor((time/1000) % 60);
         
     function detect(i) {
         if (i < 10) {
             i = "0" + i;
           }
             return i;
         }
    
     check_hours = detect(hours);
     check_minutes = detect(minutes);
     check_seconds = detect(seconds);
    
		return api.sendMessage(
      `Hôm nay bạn đã nhận quà rồi, hãy quay lại sau ${check_hours} giờ ${check_minutes} phút ${check_seconds} giây`,
 threadID,
    async (error) => {
      if (error) 
        return api.sendMessage(
          `Đã có lỗi xảy ra khi check thời gian!!!`
        )
    }, messageID);
}
 else {
   dataDaily[senderID] = {
     diemdanh: checkDaily[senderID].diemdanh + parseInt(1)
   }
fs.writeFileSync(path, JSON.stringify(dataDaily));
   
   return api.sendMessage({
     body: "Điểm Danh " + thu + "Hoàn Tất\n\n"
     + "   ◆━━━━━•💜•━━━━━◆\n\n"
     + "     🎊Phần quà bao gồm:🎊\n\n"
     + "     💸 " + addMoney.toLocaleString() + " Tiền mặt\n"
     + "     🧪 " + addExp.toLocaleString() + " Kinh Nghiệm\n"
     + "      + " + 1 + " Điểm đăng nhập\n\n"
     + "Bạn hiện tại có " + dataDaily[senderID].diemdanh + " Điểm đăng nhập\n"
     + "dùng " + global.config.PREFIX +"daily 7day " + "để nhận quà\n"
     + "   ◆━━━━━•💜•━━━━━◆\n\n"
     + " !! ĐIỂM ĐĂNG NHẬP TỰ RESET VỀ 0 VÀO THỨ 2",
        attachment: fs.createReadStream(pathDaily+"/"+listFile[Math.floor(Math.random() * listFile.length)])},
        threadID,
     async function (error) {
       data.dailyCoolDown = Date.now();
         await Currencies.setData(senderID, {
               exp: exp + parseInt(addExp),
               money: money + parseInt(addMoney),
               data
           });
       
       if (error) {
         return api.sendMessage(
           `Đã có lỗi xảy ra khi nhận thưởng!!!`,
             threadID);
           }
        },messageID);
     }                                     
  }