import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    genre: "Tiên hiệp",
    name: "Khí vũ trụ",
    chapterName: "Chương 125: Ngẫu nhiên gặp mặt",
    author: "Ta là Đoàn Văn Tuấn",
    chapterTime: "1 phút trước",
  },
  {
    genre: "Kiếm hiệp",
    name: "Linh cảnh hành giả",
    chapterName: "Chương 23: Lại thấy hoa đào nở",
    author: "Ngã Cật Cây Hồng Thị",
    chapterTime: "1 phút trước",
  },
  {
    genre: "Tiên hiệp",
    name: "Phàm nhân tu tiên",
    chapterName: "Chương 10: Lòng người như giếng sâu",
    author: "Ngũ Trưởng",
    chapterTime: "2 phút trước",
  },
  {
    genre: "Đô thị",
    name: "Hóa ra ta là tu tiên đại lão",
    chapterName: "Chương 657: Ai rồi cũng vậy",
    author: "Hữu Phỉ",
    chapterTime: "5 phút trước",
  },
  {
    genre: "Lịch sử",
    name: "Mộng ước uyên ương",
    chapterName: "Chương 73: Nguyện vạn kiếp yêu nàng!",
    author: "An Văn Dật",
    chapterTime: "10 phút trước",
  },
  {
    genre: "Hệ thống",
    name: "Thiên Khai",
    chapterName: "Chương 234: Thời cơ",
    author: "Phạm Thị Chi Hồn",
    chapterTime: "16:24 14/6",
  },
  {
    genre: "Đô thị",
    name: "Biên hiệp",
    chapterName: "Chương 234: Phát động",
    author: "Thượng Thiên",
    chapterTime: "16:24 14/6",
  },
  {
    genre: "Kiếm hiệp",
    name: "Đây là truyện tiên hiệp",
    chapterName: "Chương 2234: Cửu long quy hồn trảm",
    author: "Nguyệt Nha",
    chapterTime: "16:24 14/6",
  },
  {
    genre: "Xuyên không",
    name: "Địa ngục chi chủ",
    chapterName: "Chương 1125: Chấn động bát phương",
    author: "Cửu Nghi Đăng Sơn",
    chapterTime: "16:24 14/6",
  },
  {
    genre: "Đồng nhân",
    name: "Thiên không vĩ ngạn",
    chapterName: "Chương 22: Phản ứng của Chu Mộng Dương",
    author: "Mại Báo Tiểu Lang Quân",
    chapterTime: "16:24 14/6",
  },
];

const NewUpdate = ({ itemss }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">Mới cập nhật</span>
        <span className="text-xs hover:text-my-theme cursor-pointer">
          Xem tất cả
        </span>
      </div>
      <div className="">
        <table className="border-collapse w-full table-auto text-xs">
          <tbody>
            {items.map((item) => (
              <tr className=" odd:bg-opacity-10 even:bg-opacity-5 bg-gray-light">
                <td className="hidden md:table-cell p-3 pl-6">
                  <span className=" line-clamp-1">{item.genre}</span>
                </td>
                <td className="p-3 pl-6">
                  <Link to="/">
                    <span className="line-clamp-1 font-semibold text-dark dark:text-white hover:text-my-theme dark:hover:text-my-theme">
                      {item.name}
                    </span>
                  </Link>
                </td>
                <td className="p-3 pl-6">
                  <Link to="/">
                    <span className="line-clamp-1 hover:text-my-theme">
                      {item.chapterName}
                    </span>
                  </Link>
                </td>
                <td className="hidden sm:table-cell p-3 pl-6">
                  <Link to="/">
                    <span className="line-clamp-1 hover:text-my-theme">
                      {item.author}
                    </span>
                  </Link>
                </td>
                <td className="hidden md:table-cell p-3 pl-6">
                  <span className="line-clamp-1">{item.chapterTime}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewUpdate;
