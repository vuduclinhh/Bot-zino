const fs = require("fs-extra");
this.config = {    
  name: "adminonoff",
  version: "1.0.0",
  author: { "adminonly",
    credit: "NTKhang", 
    contacts: ""
  },
  cooldowns: 5,
  role: 2,
  shortDescription: "bật/tắt chỉ admin sử dụng bot",
  longDescription: "bật/tắt chế độ chỉ admin mới có thể sử dụng bot",
  category: "box chat",
  guide: "{prefix}{name} [on|help]"
};

module.exports = {
  config: this.config,
  start: function({ globalGoat, args, threadsData, message, event }) {
    const { config } = globalGoat;
    if (args[0] == "on") {
      config.adminOnly = true;
      message.reply("✅Đã bật chế độ chỉ admin mới có thể sử dụng bot😼");
      fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
    }
    else if (args[0] == "off") {
      config.adminOnly = false;
      message.reply("🚫Đã tắt chế độ chỉ admin mới có thể sử dụng bot😢");
      fs.writeFileSync(client.dirConfig, JSON.stringify(config, null, 2));
    }
    else return message.reply("👉Vui lòng chọn chế độ on hoặc off📩");
  }
};