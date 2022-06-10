import React from "react";
import Recommend from "../components/Stories/Recommend";

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

const Home = () => {
  return (
    <div className="page grid grid-cols-6 gap-10">
      <div className="col-span-4">
        <Recommend items={stories} />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Home;
