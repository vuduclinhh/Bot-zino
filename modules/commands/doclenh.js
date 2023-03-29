/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "doclenh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🎰 Con số may mắn của bạn là 02, bạn có thể chơi C,C2,X,X2,N1,CX với tỉ lệ ăn là 76.28%",
             "🎰 Con số may mắn của bạn là 39, bạn có thể chơi L2,T2,N3,LO,LT với tỉ lệ ăn là 87.35%",
"🎰 Con số may mắn của bạn là 63, bạn có thể chơi L,L2,X,X2,N1,H3,LX với tỉ lệ ăn là 59.70%",
"🎰 Con số may mắn của bạn là 72, bạn có thể chơi C,C2,X,X2,N1,H3,CX với tỉ lệ ăn là 64.24%",
"🎰 Con số may mắn của bạn là 42, bạn có thể chơi C,C2,X,X2,N1,CX với tỉ lệ ăn là 93.81%",
"🎰 Con số may mắn của bạn là 28, bạn có thể chơi C,C2,T,T2,N3,CT với tỉ lệ ăn là 58.55%",
"🎰 Con số may mắn của bạn là 19, bạn có thể chơi L2,T2,N3,LO,LT với tỉ lệ ăn là 82.43%",
"🎰 Con số may mắn của bạn là 71, bạn có thể chơi L,L2,X,X2,N1,LO,LX với tỉ lệ ăn là 68.76%",
"🎰 Con số may mắn của bạn là 87, bạn có thể chơi L,T,N3,LO,LT với tỉ lệ ăn là 64.79%",
"🎰 Con số may mắn của bạn là 89, bạn có thể chơi L2,T2,N3,LT với tỉ lệ ăn là 69.96%",
"🎰 Con số may mắn của bạn là 56, bạn có thể chơi C,C2,T,T2,N2,CT với tỉ lệ ăn là 78.83%",
"🎰 Con số may mắn của bạn là 76, bạn có thể chơi C,C2,T,T2,N2,LO,CT với tỉ lệ ăn là 79.11%",
"🎰 Con số may mắn của bạn là 14, bạn có thể chơi C,C2,X,X2,N2,CX với tỉ lệ ăn là 76.87%",
"🎰 Con số may mắn của bạn là 68, bạn có thể chơi C,C2,T,T2,N3,CT với tỉ lệ ăn là 55.46%",
             "🎰 Con số may mắn của bạn là 04, bạn có thể chơi C,C2,X,X2,N2,CX với tỉ lệ ăn là 93.90%"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://sv3.anh365.com/images/2022/12/09/orca-image--244118385.jpg",
];
	 var callback = () => api.sendMessage({body:` ${know} \n\n`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };