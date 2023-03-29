module.exports.config = {
    name: "tagny",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "𝘽𝙚𝙫𝙖𝙣𝙡𝙪𝙘  & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "yeulientuc @mention",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn yêu", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a(`tớ Bắt đầu thấy yêu ${name} rồi đấy`);
setTimeout(() => {a({body: "yêu cậu♥️" + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "yêu cậu lắm♥️ " + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "yêu cậu cực nhiều♥️♥️" + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "yêu cậu lắm luôn ý♥️♥️" + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "tớ yêu cậu♥️" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "yêu lắm nà♥️" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "yêu cục cưng♥️♥️" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "tớ yêu cậu hơn chính bản thân tớ♥️" + " " + name, mentions: arraytag})} , 8000);
setTimeout(() => {a({body: "yêu bae♥️" + " " + name, mentions: arraytag})} , 8500);
setTimeout(() => {a({body: "yêu cực nợ♥️" + " " + name, mentions: arraytag})} , 9000);
setTimeout(() => {a({body: "yêu bae cute nhất♥️" + " " + name, mentions: arraytag})} , 9500);
setTimeout(() => {a({body: "bae ơi yêu baee nhiều lắm♥️♥️" + " " + name, mentions: arraytag})} , 10000);
setTimeout(() => {a({body: "yêu bé♥️" + " " + name, mentions: arraytag})} , 15000);
  setTimeout(() => {a({body: "yêu bé lắm♥️" + " " + name, mentions: arraytag})} , 20000);
  setTimeout(() => {a({body: "bé ơi yêu yêu nà♥️" + " " + name, mentions: arraytag})} , 25000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 30000);
 setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 35000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 40000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 45000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 50000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 55000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 60000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 65000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 70000); 
 setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 75000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 80000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 85000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 90000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 95000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 100000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 105000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 115000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 120000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 125000);
setTimeout(() => {a({body: "yêu bae lắm♥️" + " " + name, mentions: arraytag})} , 130000);

                     }