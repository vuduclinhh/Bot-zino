module.exports.config = {
  name: "anhche",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yuri",
  description: "",
  commandCategory: "Random-image",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api.duongcongnambsl.repl.co/meme').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res. data.count;
  let callback = function () {
          api.sendMessage({
            body: `hiện có: ${count} ảnh`,
            attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meme.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback);
      })
}