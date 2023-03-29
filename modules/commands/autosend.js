module.exports.config = {
  name: 'autosend',
  version: '10.02',
  hasPermssion: 0,
  credits: 'DC-Nam',
  description: 'Tự động gửi tin nhắn theo giờ đã cài!',
  commandCategory: 'ADMIN',
  usages: '[]',
  cooldowns: 3
};
const nam = [{
  timer: '11:00:00 PM',
  message: ['Chúc mọi người ngủ ngon😴', 'Khuya rùi ngủ ngon nhé các bạn😇']
},
{
  timer: '1:00:00 PM',
  message: ['Chúc mọi người buổi chiều vui vẻ🙌', 'Chúc mọi người buổi chiều đầy năng lượng😼']
},
{
  timer: '1:20:00 AM',
  message: ['Giờ này k ngủ là biến thành gấu trúc đó. Ngủ đi nha<33']
},
{
  timer: '6:00:00 AM',
  message: ['Chúc mọi người buổi sáng vui vẻ😉', 'Buổi sáng đầy năng lượng nhaa các bạn😙']
},
{
  timer: '11:30:00 AM',
  message: ['Chúc mọi người buổi trưa vui vẻ😋', 'Cả sáng mệt mỏi rùi nghỉ ngơi nạp năng lượng nào!!😴']
}];
module.exports.onLoad = o => setInterval(() => {
  const r = a => a[Math.floor(Math.random() * a.length)];
  if (as = nam.find(i => i.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(as.message), i));
}, 1000);
module.exports.run = o => { };