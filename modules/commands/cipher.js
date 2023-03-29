module.exports.config = {
  name: 'cipher',
  version: '1.1.1',
  hasPermssion: 0,
  credits: 'DC-Nam',
  description: 'Mã hóa văn bản',
  commandCategory: "Công cụ",
  usages: '[en|de] + số lần [en|de] + reply văn bản hoặc nhập tiếp',
  cooldowns: 0
};
module.exports.run = function ({
  api,
  event,
  args
}){
var text = event.type == 'message_reply' ? event.messageReply.body : args.splice(2).join(" ");
const allType = ["en","de"]
if (!args[0] || !allType.includes(args[0]) || !args[1] || isNaN(args[1]) || args[0] > 10 || args[0] <= 0 || !text) return api.sendMessage(`${!args[0] || !allType.includes(args[0]) ? `» Vui lòng chọn en|de` : !args[1] ? `» Vui lòng nhập số lần en|de` : isNaN(args[1]) ? `» Số lần en|de phải là 1 con số` : args[0] > 10 ? `» Số lần en|de thấp thôi '-', khuyến cáo < 10 và > 0` : !text ? `» Vui lòng nhập hoặc reply đoạn văn bản muốn en|de` : `» :v`}`, event.threadID, event.messageID);
  switch (args[0]) {
    case 'en': {
      const myCipher = cipher('mySecretSalt');
      for (var i = 0; i < args[1]; i++) {
        text = myCipher(text);
      };
      api.sendMessage(text, event.threadID, event.messageID);
    };
    break;
  case 'de': {
    const myDecipher = decipher('mySecretSalt');
    for (var i = 0; i < args[1]; i++) {
      text = myDecipher(text);
    };
    api.sendMessage(text, event.threadID, event.messageID);
  };
  break;
  };
};
const cipher = salt => {
     const textToChars = text => text.split('').map(c => c.charCodeAt(0));
        const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
        return text => text.split('')
          .map(textToChars)
          .map(applySaltToChar)
          .map(byteHex)
          .join('');
  }
const decipher = salt => {
   const textToChars = text => text.split('').map(c => c.charCodeAt(0));
      const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
      return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
};