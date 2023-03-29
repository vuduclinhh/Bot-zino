module.exports.config = {
 name: "chongcuopbox",
 version: "1.0.0",
 credits: "D-Jukie",
 hasPermssion: 1,
 description: "Ngăn chặn việc thay đổi admin",
 usages: "chongcuopbox",
 commandCategory: "Hệ thống admin-bot",
 cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[⃠]→ 𝗖𝗮̂̀𝗻 𝗾𝘂𝘆𝗲̂̀𝗻 𝗾𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺, 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗵𝗲̂𝗺 𝘃𝗮̀ 𝘁𝗵𝘂̛̉ 𝗹𝗮̣𝗶!', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
    else data["guard"] = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[ඞ]→ 𝗗𝗮̃ ${(data["guard"] == true) ? "𝗯𝗮̣̂𝘁" : "𝘁𝗮̆́𝘁"} 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝗵𝗼̂́𝗻𝗴 𝗰𝘂̛𝗼̛́𝗽 𝗯𝗼𝘅`, event.threadID, event.messageID);
}
