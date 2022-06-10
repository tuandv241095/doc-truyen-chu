import React, { useState } from "react";
import Filters from "../components/Filters/Filters";
import Stories from "../components/Stories/Stories";

const ranks = [
  "Thinh hành",
  "Lượt đọc",
  "Đề cử",
  "Đánh giá",
  "Lượt thích",
  "Bình luận",
];

const filters = ["Theo ngày", "Theo tháng", "Theo năm", "Tất cả"];

const stories = [
  {
    id: "1",
    name: "Luyện khí ba ngàn năm",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Huyền huyễn",
    rate: "4.8",
    countRate: "110",
    status: "Hoàn thành",
    countChap: "99",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
  {
    id: "2",
    name: "Tôi là một con cá",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Tiên hiệp",
    rate: "4.8",
    countRate: "110",
    status: "Đang ra",
    countChap: "1451",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
  {
    id: "3",
    name: "Tru tiên",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Kiếm hiệp",
    rate: "4.8",
    countRate: "110",
    status: "Đang ra",
    countChap: "541",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
  {
    id: "4",
    name: "Trở lại tuổi 15",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Trọng sinh",
    rate: "4.8",
    countRate: "110",
    status: "Đang ra",
    countChap: "145",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
  {
    id: "5",
    name: "Trở lại tuổi 15",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Trọng sinh",
    rate: "4.8",
    countRate: "110",
    status: "Hoàn thành",
    countChap: "145",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
  {
    id: "6",
    name: "Trở lại tuổi 15",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    converter: "Lorem Ipsum is simply",
    author: "Lorem Ipsum is simply",
    category: "Trọng sinh",
    rate: "4.8",
    countRate: "110",
    status: "Hoàn thành",
    countChap: "145",
    lastChap: new Date().toLocaleString(),
    countComment: "479",
  },
];

const filterStories = [
  {
    type: "Thể loại",
    many: true,
    items: [
      { name: "Tu tiên", id: "1" },
      { name: "Huyền huyễn", id: "2" },
      { name: "Kiếm hiệp", id: "3" },
      { name: "Lịch sử", id: "4" },
      { name: "Đô thị", id: "5" },
      { name: "Quân sự", id: "6" },
      { name: "Khoa huyễn", id: "7" },
      { name: "Canh kỹ", id: "8" },
      { name: "Kỳ ảo", id: "9" },
      { name: "Võng du", id: "10" },
      { name: "Huyền nghi", id: "11" },
      { name: "Tất cả", id: "12" },
    ],
  },
  {
    type: "Tính cách",
    many: true,
    items: [
      { name: "Sát phạt", id: "1" },
      { name: "Quyết đoán", id: "2" },
      { name: "Nhu nhược", id: "3" },
      { name: "Thiết huyết", id: "4" },
      { name: "Điềm đạm", id: "5" },
      { name: "Nhẹ nhàng", id: "6" },
      { name: "Cơ trí", id: "7" },
      { name: "Lãnh khốc", id: "8" },
      { name: "Giảo hoạt", id: "9" },
      { name: "Kiêu ngạo", id: "10" },
      { name: "Ngu ngốc", id: "11" },
      { name: "Vô sỉ", id: "12" },
    ],
  },
  {
    type: "Tình trạng",
    many: false,
    items: [
      { name: "Đang ra", id: "1" },
      { name: "Hoàn thành", id: "2" },
    ],
  },
  {
    type: "Thuộc tính",
    many: false,
    items: [
      { name: "Chọn lọc", id: "1" },
      { name: "Chất lượng cao", id: "2" },
    ],
  },
  {
    type: "Bối cảnh thế giới",
    many: true,
    items: [
      { name: "Huyền huyễn Đông Phương", id: "1" },
      { name: "Dị thế", id: "2" },
      { name: "Mạt thế", id: "3" },
      { name: "Vương triều", id: "4" },
      { name: "Lịch sử", id: "5" },
      { name: "Đô thị", id: "6" },
      { name: "Thanh xuân", id: "7" },
      { name: "Vườn trường", id: "8" },
      { name: "Xuyên không", id: "9" },
    ],
  },
  {
    type: "Bối cảnh thế giới",
    many: true,
    items: [
      { name: "Huyền huyễn Đông Phương", id: "1" },
      { name: "Dị thế", id: "2" },
      { name: "Mạt thế", id: "3" },
      { name: "Vương triều", id: "4" },
      { name: "Lịch sử", id: "5" },
      { name: "Đô thị", id: "6" },
      { name: "Thanh xuân", id: "7" },
      { name: "Vườn trường", id: "8" },
      { name: "Xuyên không", id: "9" },
    ],
  },
  {
    type: "Bối cảnh thế giới",
    many: true,
    items: [
      { name: "Huyền huyễn Đông Phương", id: "1" },
      { name: "Dị thế", id: "2" },
      { name: "Mạt thế", id: "3" },
      { name: "Vương triều", id: "4" },
      { name: "Lịch sử", id: "5" },
      { name: "Đô thị", id: "6" },
      { name: "Thanh xuân", id: "7" },
      { name: "Vườn trường", id: "8" },
      { name: "Xuyên không", id: "9" },
    ],
  },
  {
    type: "Bối cảnh thế giới",
    many: true,
    items: [
      { name: "Huyền huyễn Đông Phương", id: "1" },
      { name: "Dị thế", id: "2" },
      { name: "Mạt thế", id: "3" },
      { name: "Vương triều", id: "4" },
      { name: "Lịch sử", id: "5" },
      { name: "Đô thị", id: "6" },
      { name: "Thanh xuân", id: "7" },
      { name: "Vườn trường", id: "8" },
      { name: "Xuyên không", id: "9" },
    ],
  },
];

const FilterStories = () => {
  return (
    <div className="page grid grid-cols-8 gap-x-10 gap-y-3">
      <div className="col-span-8 lg:col-span-2">
        <Filters filters={filterStories} />
      </div>
      <div className="col-span-8 lg:col-span-6 flex flex-col justify-between items-center w-full h-full">
        <Stories ranks={ranks} stories={stories} filters={filters} />
      </div>
    </div>
  );
};

export default FilterStories;
