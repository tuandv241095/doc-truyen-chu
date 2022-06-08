import React, { useState } from "react";
import ListBadge from "../components/ListBadge";
import Pagination from "../components/Pagination";
import Stories from "../components/Stories/Stories";
import Tabs from "../components/Tabs";
import Truyen from "../components/Truyen";

const ranks = [
  "Thinh hành",
  "Lượt đọc",
  "Đề cử",
  "Điểm đánh giá",
  "Lượt đánh giá",
  "Lượt thích",
  "Lượt bình luận",
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
    status: "done",
    countChap: "99",
    lastChap: new Date().toLocaleTimeString(),
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
    status: "done",
    countChap: "1451",
    lastChap: new Date().toLocaleTimeString(),
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
    status: "Hoan thanh",
    countChap: "541",
    lastChap: new Date().toLocaleTimeString(),
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
    status: "Dang ra",
    countChap: "145",
    lastChap: new Date().toLocaleTimeString(),
    countComment: "479",
  },
];

const selected = [
  "Huyền huyễn",
  "Tiên hiệp",
  "Đô thị",
  "Hoàn thành",
  "Chất lượng cao",
  "Thiết huyết",
  "Đông phương",
  "Phàm nhân",
  "Góc nhìn nam",
  "Ngôi thứ nhất",
];

const genre = [
  "Huyền huyễn",
  "Tiên hiệp",
  "Kiếm hiệp",
  "Huyền huyễn",
  "Tiên hiệp",
  "Kiếm hiệp",
  "Huyền huyễn",
  "Tiên hiệp",
  "Kiếm hiệp",
  "Huyền huyễn",
  "Tiên hiệp",
  "Kiếm hiệp",
];

const status = ["Hoàn thành", "Đang ra"];

const properties = ["Chọn lọc", "Chất lượng cao"];

const character = [
  "Sát phạt",
  "Quyết đoán",
  "Nhu nhược",
  "Thiết huyết",
  "Sát phạt",
  "Quyết đoán",
  "Nhu nhược",
  "Thiết huyết",
  "Sát phạt",
  "Quyết đoán",
  "Nhu nhược",
  "Thiết huyết",
  "Sát phạt",
  "Quyết đoán",
  "Nhu nhược",
  "Thiết huyết",
];

const background = [
  "Huyền huyễn Đông phương",
  "Dị thế",
  "Vương triều",
  "Dân gian",
  "Lịch sử",
  "Hồng hoang",
  "Mạt thế",
  "Thanh xuân",
  "Đô thị",
];

const Filter = () => {
  const [select, setSelect] = useState("Thinh hành");
  return (
    <div className="pt-[172px] max-w-[1280px] mx-auto p-4 flex space-x-3">
      {/* <div className="flex flex-col max-w-[250px]">
        <ListBadge items={selected} />
      </div> */}
      <div className="flex flex-col justify-between items-center w-full h-full">
        {/* <Tabs
          items={[
            "Thinh hành",
            "Lượt đọc",
            "Đề cử",
            "Điểm đánh giá",
            "Lượt đánh giá",
            "Lượt thích",
            "Lượt bình luận",
          ]}
          select={select}
          setSelect={setSelect}
        />
        <div></div>
        <div className="grid xl:grid-cols-2 max-w-[1280px] gap-2 md:gap-4 lg:gap-9">
          {list.map((t) => (
            <Truyen truyen={t} />
          ))}
        </div> */}
        <Stories ranks={ranks} stories={stories} filters={filters} />
        {/* <div>
          <Pagination />
        </div> */}
      </div>
    </div>
  );
};

export default Filter;
