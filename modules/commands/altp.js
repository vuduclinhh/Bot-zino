var regfee = 5000; // Số tiền để đăng kí
var key = "ALTP-e0Ho15vDGR"; // Điền API key vào đây!

module.exports.config = {
  name: "ailatrieuphu",
  version: "3.0.0",
  hasPermssion: 0,
  credits: "MAVERICK",
  description: "Ai là triệu phú",
  commandCategory: "THÀNH VIÊN",
  usages: "register/play/info/stop",
  cooldowns: 0
};

const axios = require("axios");
const mainAPI = "https://altp.ga/api";
const getImage = async url => (await axios.get(url, { responseType: "stream" })).data;
var getMoney = [0, 200, 400, 600, 1000, 2000, 3000, 6000, 10000, 14000, 22000, 30000, 40000, 80000, 150000, 250000];


module.exports.handleReply = async function ({ event, Users, api, handleReply, Currencies }) {
  var {threadID: tid, messageID: mid, senderID: sid } = event;
  var {sendMessage: send, unsendMessage: unsend} = api;
  if (sid !== handleReply.author) return;
  var name = await Users.getNameUser(sid);
  var senderData = await Users.getData(sid);
  var {one, two, three} = senderData.data.helpaltp;
  var {answer, note, remove, level} = handleReply;
  var choose = event.body.toUpperCase();

  if (choose == "HELP 1" || choose == "HELP1") {
    if (one !== 1) return send("Bạn đã dùng quyền trợ giúp này rồi!", tid, mid);
    unsend(handleReply.messageID);
    senderData.data.helpaltp.one = 2;
    await Users.setData(sid, senderData);
    let text = `Chúng tôi đã nhờ máy tính loại bỏ hai phương án sai là ${remove.join(" và ")}`;
    if ( two == 1 ||  three == 1) text += "\n\n     ===HELP===";
    if ( two == 1) text += '\n-Reply "help2" ➩ hỏi ý kiến khán giả';
    if ( three == 1) text += '\n-Reply "help3" ➩ hỏi tổ tư vấn tại chỗ';
    return send({ body: text, attachment: await getImage(mainAPI + `?type=q&lv=${level+1}&stt=${senderData.data.altp.stt}&h1=2&h2=${two}&h3=${three}&k=${key}`)}, tid, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: sid,
        answer: answer,
        note: note,
        remove: remove,
        level: senderData.data.altp.level,
        messageID: info.messageID
      })
    }, mid);
  }

  if (one == 2 && remove.includes(choose)) return send("Đáp án này đã bị loại bỏ!", tid, mid);

  if (choose == "HELP 2" || choose == "HELP2") {
    if (two !== 1) return send("Bạn đã dùng quyền trợ giúp này rồi!", tid, mid);
    senderData.data.helpaltp.two = 2;
    await Users.setData(sid, senderData);
    return send({ body: "Đây là kết quả khảo sát ý kiến khán giả!", attachment: await getImage(mainAPI + `?type=h&lv=${level+1}&stt=${senderData.data.altp.stt}&h1={one}&k=${key}`)}, tid, mid);
  }

  if (choose == "HELP 3" || choose == "HELP3") {
    if (three !== 1) return send("Bạn đã dùng quyền trợ giúp này rồi!", tid, mid);
    unsend(handleReply.messageID);
    senderData.data.helpaltp.three = 2;
    await Users.setData(sid, senderData);
    let text = "Đây là ý kiến của 3 người trong tổ tư vấn!";
    if (one == 1 || two == 1) text += "\n\n     ===HELP===";
    if (one == 1)  text += '\n-Reply "help1" ➩ 50:50';
    if (two == 1)  text += '\n-Reply "help2" ➩ hỏi ý kiến khán giả';
    return send({ body: text, attachment: await getImage(mainAPI + `?type=q&lv=${level+1}&stt=${senderData.data.altp.stt}&h1=${one}&h2=${two}&h3=2&k=${key}`)}, tid, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: sid,
        answer: answer,
        note: note,
        remove: remove,
        level: senderData.data.altp.level,
        messageID: info.messageID
      })
    }, mid);
  }

  if (!["A", "B", "C", "D"].includes(choose)) return send("Câu trả lời của bạn đéo hợp lệ!", tid, mid);
  unsend(handleReply.messageID);

  if (choose == answer) {
    try {
      var levelup = level + 1;
      if (levelup < 15) {
        unsend(handleReply.messageID);
        var text1 = levelup == 1 ? "câu hỏi đầu tiên" : `câu hỏi số ${levelup}`;
        send({ body: `${choose} là đáp án chính xác, ${note}\n\nXin chúc mừng người chơi ${name} đã xuất sắc trả lời đúng ${text1} nâng mức phần thưởng lên ${getMoney[levelup]}$`, attachment: await getImage(mainAPI + `?type=q&lv=${levelup}&stt=${senderData.data.altp.stt}&h1=${one}&h2=${two}&h3=${three}&choose=${choose}&k=${key}`)}, tid, mid);
        var cauhoi = levelup + 1;
        const nextques = (await axios.get(mainAPI+ `?type=d&lv=${cauhoi}&k=${key}`)).data;
        if ('error' in nextques) return send(nextques.error, tid, mid);
        senderData.data.altp = { level: levelup, stt: nextques.stt };
        if (one == 2) senderData.data.helpaltp.one = 0;
        if (two == 2) senderData.data.helpaltp.two = 0;
        if (three == 2) senderData.data.helpaltp.three = 0;
        await Users.setData(sid, senderData);
        var ques_text = cauhoi == 1 ? "Câu hỏi đầu tiên" : cauhoi == 5 ? "Câu hỏi cột mốc đầu tiên" : cauhoi == 10 ? "Câu hỏi cột mốc thứ hai" : cauhoi == 15 ? "Câu hỏi cuối cùng" : `Câu hỏi số ${cauhoi}`;
        var money_text = ques_text !== `Câu hỏi số ${cauhoi}` ? "trị giá" : "nâng mức phần thưởng lên";
        var text2 = `${ques_text} ${money_text} ${getMoney[cauhoi]}$`;
        if (one == 1 ||two == 1 || three == 1) text2 += "\n\n     ===HELP===";
        if (one == 1) text2 += '\n-Reply "help1" ➩ 50:50';
        if (two == 1) text2 += '\n-Reply "help2" ➩ hỏi ý kiến khán giả';
        if (three == 1) text2 += '\n-Reply "help3" ➩ hỏi tổ tư vấn tại chỗ';
        send({ body: text2, attachment: await getImage(mainAPI + `?type=q&lv=${cauhoi}&stt=${nextques.stt}&h1=${senderData.data.helpaltp.one}&h2=${senderData.data.helpaltp.two}&h3=${senderData.data.helpaltp.three}&k=${key}`)}, tid, (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            author: sid,
            answer: nextques.answer,
            note: nextques.note,
            remove: nextques.remove,
            level: levelup,
            messageID: info.messageID
          })
        }, mid);
      } else if (levelup == 15) {
        Currencies.increaseMoney(sid, 250000);
        senderData.data.altp = { level: -1, stt: -1 };
        await Users.setData(sid, senderData);
        return send({ body: `${choose} là đáp án chính xác, ${note}\n\nXin chúc mừng người chơi ${name} đã xuất sắc vượt qua 15 câu hỏi của chương trình mang về 250000$\nHẹn gặp lại bạn ở chương trình lần sau!`, attachment: await getImage(mainAPI + `?type=w&id=${sid}&lv=15&k=${key}`)}, tid,  mid);
      }
    } catch (error) { return send(`Đã xảy ra lỗi!\n${error}`, tid, mid); }
  } else {
    senderData.data.altp.level = -1;
    await Users.setData(sid, senderData);
    var [tienthuong, lv, moc] = (level >= 5 && level < 10) ? [2000, 5, "đầu tiên"] : (level >= 10) ? [22000, 10, "thứ hai"] : [0, 0, ""];
    if (moc == "đầu tiên" || moc == "thứ hai") {
      Currencies.increaseMoney(sid, tienthuong);
      send({ body:`${choose} là đáp án không chính xác, câu trả lời đúng của chúng ta là ${answer}, ${note}.`, attachment: await getImage(mainAPI + `?type=q&lv=${level+1}&stt=${senderData.data.altp.stt}&h1=${one}&h2=${two}&h3=${three}&choose=${choose}&k=${key}`)}, tid, mid); 
      return send({ body:`Người chơi ${name} của chúng ta đã trả lời sai và ra về với phần thưởng ở cột mốc ${moc} là ${tienthuong}$\nCảm ơn bạn đã tham gia chương trình, hẹn gặp lại bạn ở chương trình lần sau!`, attachment: await getImage(mainAPI + `?type=w&id=${sid}&lv=${lv}&k=${key}`)}, tid);
    }
    return send({ body: `${choose} là đáp án không chính xác, câu trả lời đúng của chúng ta là ${answer}, ${note}\n\nCảm ơn bạn đã tham gia chương trình, hẹn gặp lại bạn ở chương trình lần sau!`, attachment: await getImage(mainAPI+ `?type=q&lv=${level+1}&stt=${senderData.data.altp.stt}&h1=${one}&h2=${two}&h3=${three}&choose=${choose}&k=${key}`)}, tid, mid); 
  }
}


module.exports.run = async function ({ api, event, args, Currencies, Users}) {
  var {threadID: tid, messageID: mid, senderID: sid, body} = event;
  var {sendMessage: send, unsendMessage: unsend} = api;
  var {ADMINBOT, PREFIX} = global.config;
  var timeVN = require("moment-timezone").tz("Asia/Ho_Chi_Minh"), time = timeVN.format("HH:mm:ss");
  const threadSetting = global.data.threadData.get(tid) || {};
  var prefix = threadSetting.PREFIX || PREFIX;
  var mdl = ""+prefix + this.config.name + " ";
  const money = (await Currencies.getData(sid)).money;
  var senderData = await Users.getData(sid);

  var playto = (!senderData.data.altp || senderData.data.altp.level == -1) ? "bắt đầu chơi (cần đăng kí)" : senderData.data.altp.level == 0 ? "bắt đầu chơi" : `chơi tiếp tại câu hỏi số ${senderData.data.altp.level}`;
  var msg = "〆===『 AI LÀ TRIỆU PHÚ 』===〆" + "\n\n"
+ mdl + "register ➩ đăng kí tham gia chương trình" + "\n"
+ mdl + "play ➩ " + playto + "\n"
+ mdl + "info ➩ xem thông tin câu hỏi và tiền thưởng" + "\n"
+ mdl + "stop ➩ dừng cuộc chơi và nhận tiền thưởng";
  msg += "\n\n      ======[ " + time + " ]=====";
  if (args.length == 0) return send(msg, tid, mid);
  var type = args[0].toLowerCase();
  const allType = ["register","play","info","stop"];
  if (!allType.includes(type)) return send(msg, tid, mid);

  if (type == "register") {
    if ('altp' in senderData.data && senderData.data.altp.level !== -1) return send("Bạn đã đăng kí rồi, vui lòng vượt qua hết câu hỏi hoặc dừng cuộc chơi để có thể đăng kí lại!", tid, mid);
    if (money < regfee) return send(`Bạn không có đủ ${regfee}$ để đăng kí, vui lòng theo thầy Huấn làm ăn bươn chải!`, tid, mid);
    return send(`Thả icon vào tin nhắn này để xác nhận dùng ${regfee}$ đăng kí tham gia chương trình!`, tid, (error, info) => {
      global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: sid,
        type: "register",
        repID: mid
      })
    }, mid);
  };

  if (type == "play") {
    try {
      if (!senderData.data.altp || senderData.data.altp.level == -1) return send(`Bạn chưa đăng kí tham gia chương trình!\nVui lòng dùng "${mdl} register" để đăng kí (tốn ${regfee}$)`, tid, mid);
      var cauhoi = senderData.data.altp.level + 1;
      let {one, two, three} = senderData.data.helpaltp;
      var query = `?type=d&lv=${cauhoi}`;
      if ('stt' in senderData.data.altp && senderData.data.altp.stt !== -1) query += `&stt=${senderData.data.altp.stt}`;
      const res = (await axios.get(mainAPI+ query + `&k=${key}`)).data;
      if ('error' in res) return send(res.error, tid, mid);
      if (!senderData.data.altp.stt || senderData.data.altp.stt == -1) {
        senderData.data.altp.stt = res.stt;
        await Users.setData(sid, senderData);
      }
      var ques_text = cauhoi == 1 ? "Câu hỏi đầu tiên" : cauhoi == 5 ? "Câu hỏi cột mốc đầu tiên" : cauhoi == 10 ? "Câu hỏi cột mốc thứ hai" : cauhoi == 15 ? "Câu hỏi cuối cùng" : `Câu hỏi số ${cauhoi}`;
      var money_text = ques_text !== `Câu hỏi số ${cauhoi}` ? "trị giá" : "nâng mức phần thưởng lên";
	  var text = `${ques_text} ${money_text} ${getMoney[cauhoi]}$`;
      if (one == 1 ||two == 1 || three == 1) text += "\n\n     ===HELP===";
      if (one == 1) text += '\n-Reply "help1" ➩ 50:50';
      if (two == 1) text += '\n-Reply "help2" ➩ hỏi ý kiến khán giả';
      if (three == 1) text += '\n-Reply "help3" ➩ hỏi tổ tư vấn tại chỗ';
      send({ body: text, attachment: await getImage(mainAPI + `?type=q&lv=${cauhoi}&stt=${res.stt}&h1=${one}&h2=${two}&h3=${three}&k=${key}`)}, tid, (error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          author: sid,
          answer: res.answer,
          note: res.note,
          remove: res.remove,
          level: senderData.data.altp.level,
          messageID: info.messageID
        })
      }, mid);
      if (two == 2) send({attachment: await getImage(mainAPI+ `?type=h&lv=${cauhoi}&stt=${stt}&h1=${one}&k=${key}`)}, tid, mid);
      return;
    } catch (error) { return send(`Đã xảy ra lỗi khi lấy câu hỏi!\n${error}`, tid, mid); }
  }

  if (type == "info") {
    if (!senderData.data.altp || senderData.data.altp.level == -1) return send("Bạn chưa đăng kí tham gia chương trình!", tid, mid);
    var lv = senderData.data.altp.level;
    var name = await Users.getNameUser(sid);
    var play = lv == 0 ? "bắt đầu!" : "tiếp tục!";
    var {one, two, three} = senderData.data.helpaltp;
    return send({ body: `Dùng "${mdl} play" để ${play}`, attachment: await getImage(mainAPI + `?type=i&id=${sid}&name=${encodeURI(name)}&lv=${lv}&h1=${one}&h2=${two}&h3=${three}&k=${key}`)}, tid, mid);
  }

  if (type == "stop") {
    if (!senderData.data.altp || senderData.data.altp.level == -1) return send("Bạn chưa đăng kí tham gia chương trình!", tid, mid);
    if (senderData.data.altp.level == 0) return send("Không thể dừng cuộc chơi khi chưa bắt đầu!", tid, mid);
    return send(`Thả icon vào tin nhắn này để xác nhận dừng cuộc chơi tại đây và ra về với phần thưởng ${getMoney[senderData.data.altp.level]}$`, tid, (error, info) => {
      global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: sid,
        type: "stop",
        repID: mid
      })
    }, mid);
  }
}


module.exports.handleReaction = async({ api, event, handleReaction, Currencies, Users }) => {
  if (event.userID != handleReaction.author) return;
  var senderData = await Users.getData(handleReaction.author);
  api.unsendMessage(handleReaction.messageID);

  if (handleReaction.type == "register") {
    try {
      Currencies.decreaseMoney(handleReaction.author, regfee);
      senderData.data.altp = { level: 0, stt: -1 };
      senderData.data.helpaltp = { one: 1, two: 1, three: 1 };
      await Users.setData(handleReaction.author, senderData);
      return api.sendMessage({body: "Đăng kí thành công, chào mừng bạn đến với chương trình Ai Là Triệu Phú!", attachment: await getImage("https://i.postimg.cc/Z59WSLnW/intro.png")}, event.threadID, handleReaction.repID);
    } catch (error) { return api.sendMessage(`Đã xảy ra lỗi khi đăng kí!\n${error}`, event.threadID, handleReaction.repID); }
  }

  if (handleReaction.type == "stop") {
    try {
      var level = senderData.data.altp.level;
      var name = await Users.getNameUser(handleReaction.author);
      Currencies.increaseMoney(handleReaction.author, getMoney[level]);
      senderData.data.altp = { level: -1, stt: -1 };
      senderData.data.helpaltp = { one: 0, two: 0, three: 0 };
      await Users.setData(handleReaction.author, senderData);
      return api.sendMessage({body: `Người chơi ${name} đã vượt qua ${level} câu hỏi, mang về phần thưởng là ${getMoney[level]}$\nHẹn gặp lại bạn ở chương trình lần sau!`, attachment: await getImage(mainAPI+`?type=w&id=${handleReaction.author}&lv=${level}&k=${key}`)}, event.threadID, handleReaction.repID);
    } catch (error) { return api.sendMessage(`Đã xảy ra lỗi khi dừng cuộc chơi!\n${error}`, event.threadID, handleReaction.repID); }
  }
}