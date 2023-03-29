const fs = require("fs-extra"),
	lol = JSON.parse(fs.readFileSync("./lol.json"));
module.exports.config = {
	name: "lol",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Thiệu Trung Kiên",
	description: "Xem thông tin tướng liên minh huyền thoại",
	commandCategory: "system",
	usages: "[Text]",
	cooldowns: 5
}, 
  
module.exports.run = async function({
	api: e,
	event: n,
	args: a
}) {
	var l = lol.length,
		o = 1;
	(o = parseInt(a[0]) || 1) < -1 && (o = 1);
	for (var t = Math.ceil(l / 15), r = "", s = 15 * (o - 1); s < 15 * (o - 1) + 15 && !(s >= l); s++) r += `[${s+1}]. ${lol[s].name}\n`;
	return r += `Đang có tổng ${l} nhân vật\nSố trang (${o}/${t})\nDùng ${global.config.PREFIX}${this.config.name} <số trang>`, e.sendMessage(r, n.threadID, ((e, a) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: n.senderID,
			type: "choosee"
		})
	}), n.messageID)
}, module.exports.handleReply = async function({
	api: e,
	event: n,
	handleReply: a
}) {
	if ("choosee" === a.type) try {
		var l = lol[parseInt(n.body - 1)].name,
			o = lol[parseInt(n.body - 1)].hp,
			t = lol[parseInt(n.body - 1)].hp_gain_per_lvl,
			r = lol[parseInt(n.body - 1)].hp_regen,
			s = lol[parseInt(n.body - 1)].hp_regen_gain_per_lvl,
			i = lol[parseInt(n.body - 1)].mana,
			p = lol[parseInt(n.body - 1)].mana_gain_per_lvl,
			g = lol[parseInt(n.body - 1)].mana_regen,
			c = lol[parseInt(n.body - 1)].mana_regen_gain_per_lvl,
			d = lol[parseInt(n.body - 1)].attack_damage,
			h = lol[parseInt(n.body - 1)].attack_damage_gain_per_lvl,
			_ = lol[parseInt(n.body - 1)].attack_speed,
			y = lol[parseInt(n.body - 1)].attack_speed_gain_per_lvl,
			m = lol[parseInt(n.body - 1)].armor,
			I = lol[parseInt(n.body - 1)].armor_gain_per_lvl,
			b = (lol[parseInt(n.body - 1)].magic_resist, lol[parseInt(n.body - 1)].magic_resist_gain_per_lvl, lol[parseInt(n.body - 1)].movement_speed, lol[parseInt(n.body - 1)].range, lol[parseInt(n.body - 1)].ability_power),
			$ = lol[parseInt(n.body - 1)].ability_haste,
			v = lol[parseInt(n.body - 1)].crit;
		console.log(lol[parseInt(n.body - 1)].images);
		const a = lol[parseInt(n.body - 1)].images,
			u = require("request");
		return u(encodeURI(`${a}`)).pipe(fs.createWriteStream(__dirname + "/cache/champ.png")).on("close", (() => e.sendMessage({
			body: `Tên : ${l}\n\nHP : ${o}\nSố máu tăng theo level : ${t}\nHP hồi phục : ${r}\nHP hồi phục theo level : ${s}\n\nMana : ${i}\nMana tăng theo level : ${p}\nMana hồi phục : ${g}\nMana hồi phục theo level : ${c}\n\nTấn Công : ${d}\nTấn Công tăng theo level : ${h}\n\nTốc Đánh : ${_}\nTốc Đánh tăng theo level : ${y}\n\nGiáp : ${m}\nGiáp tăng theo level : ${I}\n\nAbilibity Power : ${b}\nAbilibity Haste : ${$}\n\nCrit : ${v}`,
			attachment: fs.createReadStream(__dirname + "/cache/champ.png")
		}, n.threadID, (() => fs.unlinkSync(__dirname + "/cache/champ.png")), n.messageID)))
	} catch (e) {
		console.log(e)
	}
};