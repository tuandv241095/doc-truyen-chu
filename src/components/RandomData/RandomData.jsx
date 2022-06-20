const textData = [
  "Xuyên",
  "qua",
  "toàn",
  "dân",
  "ngự",
  "thú",
  "thời",
  "đại",
  "Tô",
  "Dịch",
  "phát",
  "hiện",
  "mình",
  "sủng",
  "thú",
  "lại",
  "có",
  "thể",
  "lựa",
  "chọn",
  "một",
  "đầu",
  "đặc",
  "thù",
  "tiến",
  "hóa",
  "lộ",
  "tuyến",
  "Đây",
  "là",
  "một",
  "cái",
  "yêu",
  "ma",
  "hoành",
  "hành",
  "nguy",
  "cơ",
  "tứ",
  "phía",
  "thế",
  "giới",
  "Xuyên",
  "việt",
  "đến",
  "đây",
  "Tần",
  "Thiểu",
  "Du",
  "hết",
  "lần",
  "này",
  "tới",
  "lần",
  "khác",
  "lại",
  "là",
  "đầu",
  "thai",
  "dẫn",
  "đầu",
  "cao",
  "nhất",
  "trấn",
  "yêu",
  "ti",
  "bên",
  "trong",
  "một",
  "thành",
  "viên",
  "Nhìn",
  "xem",
  "từng",
  "cái",
  "quỷ",
  "dị",
  "mặt",
  "nạ",
  "giảo",
  "hoạt",
  "hồ",
  "yêu",
  "đáng",
  "sợ",
  "xà",
  "tinh",
  "cùng",
  "giả",
  "mạo",
  "thần",
  "phật",
  "tà",
  "ma",
  "yêu",
  "quỷ",
  "Tần",
  "Thiểu",
  "Du",
  "chảy",
  "ra",
  "muốn",
  "ăn",
  "nước",
  "bọt",
  "Đóng",
  "cửa",
  "nấu",
  "nước",
  "chúng",
  "ta",
  "hôm",
  "nay",
  "ăn",
  "tiệc",
];

export const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const randomText = (p, c) => {
  let text = "";
  let total = c;
  for (var i = 0; i < p; i++) {
    let x;
    if (i == p - 1) x = total;
    else x = randomInterval(10, total - 10);
    total -= x;
    let aa = textData.sort(() => Math.random() - Math.random()).slice(0, x);
    let subtext = "";
    aa.forEach((a, id) => {
      if (id != aa.length - 1) subtext += a + " ";
      else if (p != 1) subtext += a + ".";
      else subtext += a;
    });
    if (i != p - 1) text += capitalizeFirstLetter(subtext) + "{'\n'}";
    else text += capitalizeFirstLetter(subtext);
  }
  return text;
};
