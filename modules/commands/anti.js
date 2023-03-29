module.exports.config = {
    name: "anti",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "BraSL",
    description: "ANTI BOX",
    commandCategory: "BOX",
    usages: "anti dùng để bật tắt",
    cooldowns: 2,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT, SUPERADMIN } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);

    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);

    switch (args[0]) {
              case 'check':
        case '-c':{
          const dataNameBox = require('./../../modules/events/cache/nameBox.json');
  const dataNameUser = require('./../../modules/events/cache/nickname.json');
  const dataAvt = require('./../../modules/events/cache/avtBox.json');
          
         return api.sendMessage(`---- CHECK ANTI ----\n↪ ANTI AVT BOX: ${dataAvt.AvtBox[threadID]}\n↪ ANTI NAME BOX: ${dataNameBox.NameBox[threadID]}\n↪ ANTI NAME USER: ${dataNameUser.NickName[threadID]}`, threadID, messageID);
          break;
        }
        case 'namebox':
        case 'nameBox':
        case '-nb': {
            //---> CODE ADMIN ONLY<---//
            if (permssion < 1) return api.sendMessage("BẠN CHƯA ĐỦ TUỔI ĐỂ DÙNG LỆNH NÀY!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'nameBox.json');
            const database = require(pathData);
            const { NameBox } = database;   
            if (NameBox[threadID] == true) {
                  NameBox[threadID] = false;
                  api.sendMessage("✅ Tắt thành công chế độ ANTI đổi tên box ", threadID, messageID);
              } else {
                  NameBox[threadID] = true;
                  api.sendMessage("✅ Bật thành công chế độ ANTI đổi tên box", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
                break;
              }
               case 'nickname':
        case 'nickName':
        case '-nu': {
            if (permssion < 1) return api.sendMessage(" BẠN CHƯA ĐỦ TUỔI ĐỂ DÙNG LỆNH NÀY!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'nickname.json');
            const database = require(pathData);
            const { NickName } = database;   
            if (NickName[threadID] == true) {
                  NickName[threadID] = false;
                  api.sendMessage("✅ Tắt thành công chế độ ANTI đổi biệt danh ", threadID, messageID);
              } else {
                  NickName[threadID] = true;
                  api.sendMessage("✅ Bật thành công chế độ ANTI đổi biệt danh", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
                break;
              }
        case 'avtbox':
        case 'avtBox':
        case '-a': {
          if (permssion < 1) return api.sendMessage("BẠN CHƯA ĐỦ TUỔI ĐỂ DÙNG LỆNH NÀY!", threadID, messageID);
            const { resolve } = require("path");
            const pathData = resolve(__dirname, '..', 'events', 'cache', 'avtBox.json');
            const database = require(pathData);
            const { AvtBox } = database;   
            if (AvtBox[threadID] == true) {
                  AvtBox[threadID] = false;
                  api.sendMessage("✅ Tắt thành công chế độ ANTI đổi ảnh box", threadID, messageID);
              } else {
                  AvtBox[threadID] = true;
                  api.sendMessage("✅ Bật thành công chế độ ANTI đổi ảnh box", threadID, messageID);
              }
              writeFileSync(pathData, JSON.stringify(database, null, 4));
              break;
        }
       
        default: {
            return api.sendMessage(`==== HƯỚNG DẪN ====\n\n/${this.config.name} nameBox: Bật/tắt cấm đổi tên box\n/${this.config.name} nickname: Bật/tắt cấm đổi biệt danh user\n/${this.config.name} avtbox: Bật/tắt cấm đổi ảnh box`, threadID, messageID)
        }
    };
      } 