import React, { useState } from "react";
import Filters from "../components/Filters/Filters";
import NavRank from "../components/NavRank/NavRank";
import NavRankItem from "../components/NavRank/NavRankItem";
import Pagination from "../components/Pagination/Pagination";
import FilterResults from "../components/Section/FilterResults";
import Select from "../components/Select/Select";
import SelectItem from "../components/Select/SelectItem";
import { stories } from "../data/stories";

const ranks = [
  "Thinh hành",
  "Lượt đọc",
  "Đề cử",
  "Đánh giá",
  "Lượt thích",
  "Bình luận",
];

const filters = ["Theo ngày", "Theo tháng", "Theo năm", "Tất cả"];

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
];

const FilterStories = () => {
  const [selectRank, setSelectRank] = useState(ranks[0]);
  const [selectRange, setSelectRange] = useState(filters[0]);
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className="page grid grid-cols-7 gap-x-10 gap-y-3">
      <div className="col-span-7 lg:col-span-2">
        <Filters filters={filterStories} />
      </div>
      <div className="col-span-7 lg:col-span-5 flex flex-col justify-between items-center w-full gap-y-3">
        <NavRank>
          {ranks.map((rank) => (
            <NavRankItem
              key={rank}
              href="#"
              func={setSelectRank}
              isActive={rank === selectRank}
              item={rank}
            />
          ))}
        </NavRank>
        <Select select={selectRange} show={showSelect} setShow={setShowSelect}>
          {filters.map((filter) => (
            <SelectItem
              key={filter}
              func={setSelectRange}
              item={filter}
              isActive={filter === selectRange}
              showOff={() => setShowSelect(false)}
            />
          ))}
        </Select>
        <FilterResults items={stories} />
        <Pagination />
      </div>
    </div>
  );
};

export default FilterStories;
