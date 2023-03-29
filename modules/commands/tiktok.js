const axios = require("axios")
const fs = require("fs-extra")
const request = require("request");

module.exports.config = {
  name: "tiktok",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sen", //mod
  description: "Thông tin từ nền tảng TikTok",
  commandCategory: "game",
  usages: "",
  cooldowns: 5,
};

const roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1 : +n;
const localeStr = n => ((+n).toLocaleString()).replace(/,/g, '.');

module.exports.handleReply = async ({ api, event, handleReply }) => {
  const { threadID, messageID, body } = event;
  if (handleReply.author != event.senderID || !body) return;
  let args = body.split(' ');
  switch (handleReply.type) {
    case 'trending':
      const lower1 = args[0].toLowerCase();
      const lower2 = !args[1] ? '' : args[1].toLowerCase();
      if (lower1 == 'trang') {
        if (isFinite(lower2) && lower2 <= roof(handleReply.data.data.length / 6)) return runInfoTrending(handleReply.data, api, event, this.config.name, 6, +lower2)
        else return api.sendMessage(`Không tìm thấy trang ${lower2} trong danh sách`, threadID, messageID);
      }
      if (isFinite(lower1) && !!lower2 && !['wm'].includes(lower2)) return api.sendMessage(`Vui lòng nhập đúng định dạng`, threadID, messageID);
      const data = handleReply.data.data[(+lower1) - 1];
      const info = { url: data[(!lower2 ? '' : lower2) + 'play'], msg: infoVideo(data) };
      axios.get(info.url, { responseType: 'stream' }).then(response => api.sendMessage({ body: info.msg, attachment: response.data }, threadID, messageID)).catch(e => api.sendMessage(e, threadID, messageID));
    case 'search':
      if (isNaN(body)) return;
      const { videoInfo } = handleReply;
      const index = parseInt(body) - 1;
      if (index < 0 || index >= videoInfo.length) return api.sendMessage("Số thứ tự không hợp lệ", threadID, messageID);

      api.unsendMessage(handleReply.messageID);

      const { title, nickname } = videoInfo[index];
      axios.get(videoInfo[index].nowatermark, { responseType: "stream" }).then(res => {
        res.data.pipe(fs.createWriteStream(__dirname + "/cache/tiktok.mp4"));
        res.data.on("end", () => {
          api.sendMessage({ body: `====== 𝐓𝐈𝐊𝐓𝐎𝐊 ======\n\n[ ${nickname} ] ${title}`, attachment: fs.createReadStream(__dirname + "/cache/tiktok.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tiktok.mp4"), messageID);
        });
      }).catch(err => console.log(err));
      break;
  }
};

module.exports.run = async ({ api, event, args }) => {
if (!args[0]) return api.sendMessage({body:`🎊=== [ 𝗧𝗜𝗞𝗧𝗢𝗞 ] ===🎊
━━━━━━━━━━━━━━━
[👇] 𝗛𝘂̛𝗼̛́𝗻𝗴 𝗱𝗮̂̃𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴

!𝗧𝗶𝗸𝘁𝗼𝗸 𝘃𝗶𝗱𝗲𝗼 + ( 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 ): 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸
!𝗧𝗶𝗸𝘁𝗼𝗸 𝗺𝘂𝘀𝗶𝗰 + ( 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 ): 𝘁𝗮̉𝗶 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸
!𝗧𝗶𝗸𝘁𝗼𝗸 𝗶𝗻𝗳𝗼 + ( 𝗶𝗱 𝘃𝗶𝗱𝗲𝗼 ): 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗶𝗻𝗳𝗼 𝘁𝗶𝗸𝘁𝗼𝗸
!𝗧𝗶𝗸𝘁𝗼𝗸 𝘀𝗲𝗮𝗿𝗰𝗵 + ( 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́ )`,attachment: fs.createReadStream(__dirname + `/noprefix/slime.mp4`) }, event.threadID,event.messageID);
  const { threadID, messageID } = event;
  const type = args[0];
  const keyword = args[1];
  switch (type.toLowerCase()) {
    case "-i":
    case "info":
      if (!args[1]) return api.sendMessage("Bạn chưa nhập tên tài khoản của người dùng cần xem thông tin", threadID);
      try {
        axios.get(encodeURI(`https://TIKTOKAPI-ThanhAli.thanhali.repl.co/tikin4.php?username=@${keyword}`)).then(async (res) => {
          if (res.data.erro == 1) return api.sendMessage("Tên tài khoản không tồn tại", threadID);
          const { id, name, url, avatar, verified, privateAccount, followerCount, followingCount, videoCount, heartCount, description } = res.data;
          await axios.get(encodeURI(avatar), { responseType: 'arraybuffer' }).then((ress) => {
            const buffer = Buffer.from(ress.data, 'utf8');
            const tempDir = __dirname + "/cache/tikinfo" + id + ".png";
            fs.writeFileSync(tempDir, buffer);
            let msg = `
                        ==== 𝐈𝐍𝐅𝐎 𝐓𝐈𝐊𝐓𝐎𝐊 ====\n
                    → Tên tài khoản: ${args[1]}
                    → ID: ${id}
                    → Tên người dùng: ${name}
                    → URL: ${url}
                    → Mô tả: ${description}
                    → Xác minh tài khoản: ${verified ? "Bật" : "Tắt"}
                    → Tài khoản riêng tư: ${privateAccount ? "Bật" : "Tắt"}
                    → Lượt theo dõi: ${followerCount}
                    → Đang theo dõi: ${followingCount}
                    → Tổng video: ${videoCount}
                    → Lượt tim: ${heartCount}
                        `.replace(/^ +/gm, '')
            return api.sendMessage({
              body: msg,
              attachment: fs.createReadStream(tempDir),
            }, threadID, () => fs.unlinkSync(tempDir));
          })
        })
      } catch (error) { console.log(error) }
      break
    case 'search':
      args.shift();
      const search = args.join(" ");
      if (!search) return api.sendMessage("Bạn chưa nhập từ khóa", threadID);
      axios.get(`https://TIKTOKAPI-ThanhAli.thanhali.repl.co/tiksearch.php?keyword=${encodeURI(search)}`).then(res => {
        const { result } = res.data;
        if (result.length == 0) return api.sendMessage("Không tìm thấy kết quả nào", threadID);

        const lengthResult = result.length > 10 ? 10 : result.length;
        let videoInfo = [];
        let msg = `→ Hệ thống tìm thấy ${lengthResult} kết quả phù hợp với từ khóa của bạn:\n`;
        for (let i = 0; i < lengthResult; i++) {
          const { nickname, title, nowatermark } = result[i];
          msg += `\n\n${i + 1}. [ ${nickname} ]\n${title}`;
          videoInfo.push({ nickname, title, nowatermark });
        }
        msg += '\n\n→ Phản hồi tin nhắn này theo số thứ tự của video cần tải';

        api.sendMessage(msg, threadID, (err, info) => {
          if (err) return console.log(err);
          global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID,
            videoInfo,
            type: "search"
          })
        })
      }).catch(err => console.log(err));
      break
    case "-v":
    case "video":
      try {
        const res = await axios.get(`https://api-caochungdat.bokdepzai.repl.co/tiktok/download?url=${keyword}`);
        const { play, author, digg_count, comment_count, play_count, share_count, download_count, title, duration, region } = res.data.data;
        var callback = () => api.sendMessage({ body: `→ Quốc gia: ${region}\n→ Tiêu đề: ${title}\n→ Tên kênh: ${author.nickname}\n→ Lượt tim: ${digg_count}\n→ Tổng bình luận: ${comment_count}\n→ Lượt xem: ${play_count}\n→ Lượt chia sẻ: ${share_count}\n→ Lượt tải: ${download_count}\n→ Thời gian: ${duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"), messageID);
        request(encodeURI(`${play}`)).pipe(fs.createWriteStream(__dirname + '/cache/tkvd.mp4')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;

    case "-m":
    case "music":
      try {
        const res = await axios.get(`https://api-caochungdat.bokdepzai.repl.co/tiktok/download?url=${keyword}`);
        const { music, music_info } = res.data.data;
        var callback = () => api.sendMessage({ body: `→ Tiêu đề audio: ${music_info.title}\n→ Album: ${music_info.album}\n→ Tác giả: ${music_info.author}\n→ Thời gian: ${music_info.duration} giây`, attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3") }, threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"), messageID);
        request(encodeURI(`${music}`)).pipe(fs.createWriteStream(__dirname + '/cache/tkvd.mp3')).on('close', () => callback());
      }
      catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi...", event.threadID);
      }
      break;
    case "-tr":
    case "trending":
      axios.get(`https://docs-api.nguyenhaidang.ml/tiktok/trending`).then(response_api => {
        runInfoTrending(response_api.data, api, event, this.config.name, 6, args[1] && isNaN(args[1]) ? args[1] : 1)
      }).catch(e => api.sendMessage(e, event.threadID, event.messageID));
    default:
      break
  }
}

async function runInfoTrending(res, api, event, name, length, limit) {
  let dirTD = `${__dirname}/cache/tiktok_trending_${event.senderID}`;
  if (!fs.existsSync(dirTD)) fs.mkdirSync(dirTD, { recursive: true });
  const attachment = [];
  var txt = `= 𝐓𝐑𝐄𝐍𝐃𝐈𝐍𝐆 𝐓𝐈𝐊𝐓𝐎𝐊 =\n\n`

  for (var i = (length * limit) - length; i < length * limit; i++) {
    if (!res.data || !res.data[i]) break;
    const { title, origin_cover, duration, video_id } = res.data[i];
    // const arrSp = origin_cover.split('/');
    const dest = `${dirTD}/${video_id}.jpg`
    txt += `${i + 1}. ${title.split(' ').filter(i => !i.startsWith('#')).join(' ')}\n→ Hashtag: ${title.split(' ').filter(i => i.startsWith('#')).join(', ')}\n→ Thời gian: ${duration} giây\n\n`;
    await DownloadImage(origin_cover, dest);
    attachment.push(fs.createReadStream(dest));
  };
  txt += `\n→ Số trang [ ${limit}/${roof(res.data.length / length)} ]\n→ Phản hồi tin nhắn này theo số thứ tự để tải video không logo hoặc số thứ tự + wm để tải video có logo\n→ Phản hồi tin nhắn này < trang + số trang > để chuyển trang`;

  api.sendMessage({ body: txt, attachment }, event.threadID, (err, info) => {
    if (err) return console.log(err);
    const obj = {
      name: name,
      messageID: info.messageID,
      author: event.senderID,
      data: res,
      type: 'trending'
    }
    global.client.handleReply.push(obj);
    fs.rmdirSync(dirTD, { recursive: true });
  });
};

function DownloadImage(url, path) {
  return new Promise((resolve, reject) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', () => resolve())
      .on('error', reject);
  });
}

function infoVideo(data) {
  return `==== 𝐈𝐍𝐅𝐎 𝐕𝐈𝐃𝐄𝐎 ====\n\n→ Quốc gia: ${data.region}\n→ Tiêu đề: ${data.title.split(' ').filter(i => !i.startsWith('#')).join(' ')}\n→ Hashtag: ${data.title.split(' ').filter(i => i.startsWith('#')).join(', ')}\n→ Lượt tim: ${localeStr(data.digg_count)}\n→ Tổng bình luận: ${localeStr(data.comment_count)}\n→ Lượt chia sẻ: ${localeStr(data.share_count)}\n→ Lượt tải: ${localeStr(data.download_count)}\n→ Thời gian: ${data.duration} giây\n→ ID người dùng: ${data.author.unique_id}\n→ Tên người dùng: ${data.author.nickname}`;
};
function infoAudio(data) {
  return `==== 𝐈𝐍𝐅𝐎 𝐀𝐔𝐃𝐈𝐎 ====\n\n→ Tiêu đề Audio: ${data.music_info.title}\n→ Thời gian: ${data.music_info.duration} giây\n→ Tên tác giả: ${data.music_info.author}\n→ Âm thanh gốc: ${data.music_info.original == true ? 'Có' : 'Không'}`;
};