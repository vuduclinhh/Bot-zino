module.exports.config = {
  name: "box",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "ProCoderCyrus",//Mod by H.Thanh and Q.Huy and H.Kaiser
  description: "Các cài đặt của nhóm",
  commandCategory: "group",
  usages: "< id/name/setname/emoji/setqtv/image/info/new >",
  cooldowns: 1,
  dependencies: {
    "request": "",
    "fs-extra": "path"
  }
};

const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");

module.exports.handleEvent = async ({
  api,
  event,
  args
}) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}

module.exports.run = async ({
  api,
  event,
  args,
  Threads,
  Users,
  utils
}) => {
   var fullTime = global.client.getTime("fullTime");
  const request = require("request");
  const {
    resolve
  } = require("path");
  const moment = require("moment-timezone");
  var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss")
  if (args.length == 0) return api.sendMessage(`◆━「 𝗕𝗢𝗫 𝗖𝗢𝗡𝗙𝗜𝗚 」━◆\n──────────────\nbox id → Lấy ID của nhóm\n──────────────\nbox name → Lấy tên nhóm\n──────────────\nbox setname < tên > → Đổi tên nhóm\n──────────────\nbox emoji < icon > → Đổi icon nhóm\n──────────────\nbox info → Xem thông tin nhóm\n──────────────\nbox me setqtv → Bot sẽ thêm bạn làm Quản trị viên nhóm\n──────────────\nbox setqtv < tag > → Thêm người dùng làm Quản trị viên nhóm\n──────────────\nbox image < phản hồi ảnh > → Đổi ảnh bìa nhóm\n──────────────\nbox new < tag > → Tạo 1 nhóm mới với những người được tag!\n──────────────\n◆━「 ${timeNow} 」━◆ `, event.threadID, event.messageID);

  var id = [event.senderID] || [];
  var main = event.body;
  var groupTitle = main.slice(main.indexOf("|") +2)
  if (args[0] == "new") {
   for (var i = 0; i < Object.keys(event.mentions).length; i++) 
id.push(Object.keys(event.mentions)[i]);
  api.createNewGroup(id, groupTitle,() => {
    api.sendMessage(`Đã tạo nhóm ${groupTitle}`, event.threadID)
  })
}

  if (args[0] == "id") {
    return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
  }

  if (args[0] == "name") {
    var nameThread = global.data.threadInfo.get(event.threadID).threadName || ((await Threads.getData(event.threadID)).threadInfo).threadName;
    return api.sendMessage(nameThread, event.threadID, event.messageID);
  }

  if (args[0] == "setname") {
    var content = args.join(" ");
    var c = content.slice(7, 99) || event.messageReply.body;
    api.setTitle(`${c} `, event.threadID);
  }

  if (args[0] == "emoji") {
    const name = args[1] || event.messageReply.body;
    api.changeThreadEmoji(name, event.threadID)

  }

  if (args[0] == "me") {
    if (args[1] == "setqtv") {
      const threadInfo = await api.getThreadInfo(event.threadID)
      const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
      if (!find) api.sendMessage("Bot cần quyền Quản trị viên nhóm để thực hiện lệnh", event.threadID, event.messageID)
      else if (!global.config.ADMINBOT.includes(event.senderID)) api.sendMessage("Cần quyền Admin chính để thực hiện lệnh", event.threadID, event.messageID)
      else api.changeAdminStatus(event.threadID, event.senderID, true);
    }
  }

  if (args[0] == "setqtv") {
    if (args.join().indexOf('@') !== -1) {
      namee = Object.keys(event.mentions)
    } else namee = args[1]
    if (event.messageReply) {
      namee = event.messageReply.senderID
    }

    const threadInfo = await api.getThreadInfo(event.threadID)
    const findd = threadInfo.adminIDs.find(el => el.id == namee);
    const find = threadInfo.adminIDs.find(el => el.id == api.getCurrentUserID());
    const finddd = threadInfo.adminIDs.find(el => el.id == event.senderID);

    if (!finddd) return api.sendMessage("Cần quyền Quản trị viên nhóm để thực hiện lệnh", event.threadID, event.messageID);
    if (!find) {
      api.sendMessage("Bot cần quyền Quản trị viên nhóm để thực hiện lệnh", event.threadID, event.messageID)
    }
    if (!findd) {
      api.changeAdminStatus(event.threadID, namee, true);
    } else api.changeAdminStatus(event.threadID, namee, false)
  }

  if (args[0] == "image") {
    if (event.type !== "message_reply") return api.sendMessage("Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("Bạn phải phản hồi một audio, video, ảnh nào đó", event.threadID, event.messageID);
    if (event.messageReply.attachments.length > 1) return api.sendMessage(`Vui lòng phản hồi chỉ một audio, video, ảnh`, event.threadID, event.messageID);
    var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
    return request(encodeURI(event.messageReply.attachments[0].url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  };

  if (args[0] == "info") {
    const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();
 const threadSetting = (await Threads.getData(String(event.threadID))).data || 
    {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX 
    : global.config.PREFIX;
    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    var bede = nope.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
     let color = threadInfo.color;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'Tắt' : sex == true ? 'Bật' : '\n';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "Chưa có thống kê";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "Chưa có thống kê";
    let hqua = (ytd != 0) ? ytd : "Chưa có thống kê";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }
      var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
	for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `• ${infoUsers.name}\n`
    }

    var callback = () =>
      api.sendMessage({
        body: `•××[ 𝙏𝙃Ô𝙉𝙂 𝙏𝙄𝙉 𝘽𝙊𝙓 ]××•\n────────────\n→ Tên nhóm: ${threadName}\n→ ID: ${id}\n→ Phê duyệt: ${pd}\n→ Biểu tượng: ${icon ? icon : 'Không sử dụng'}\n→ Mã giao diện: ${color}\n→ Dấu lệnh hệ thống: [ ${global.config.PREFIX} ]\n→ Dấu lệnh nhóm: [ ${prefix} ]\n────────────\n→ Tổng thành viên: ${threadMem}\n→ Nam: ${nam}\n→ Nữ: ${nu}\n→ Bê đê: ${bede}\n→ Quản trị viên: ${qtv}\n→ Danh sách quản trị viên nhóm:\n${listad_msg} ────────────\n→ Tổng tin nhắn: ${sl}\n→ Mức độ tương tác: ${mdtt}\n→ Tổng số tin nhắn hôm qua: ${hqua}\n→ Hôm nay đã nhắn được: ${hnay}\n→ Ngày tạo dữ liệu: ${fullTime}\n`,
        attachment: fs.createReadStream(__dirname + '/cache/1.png')
      },
        event.threadID,
        () => fs.unlinkSync(__dirname + '/cache/1.png'),
        event.messageID
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
      .on('close', () => callback());
  }
}