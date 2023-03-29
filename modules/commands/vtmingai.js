module.exports.config = {
  name: "vtmgai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Viet/Hoang",
  description: "Xem ảnh gái random trên vitamin girl",
  commandCategory: "random-img",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://rdapi.000webhostapp.com').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `⚡Gái nè <3\n⚡️Mê Gái Vừa Thôi :)))`,
            attachment: fs.createReadStream(__dirname + `/cache/gai.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gai.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gai.${ext}`)).on("close", callback);
      })
}