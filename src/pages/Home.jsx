import React from "react";
import RecommendList from "../components/Section/Recommend";
import Slides from "../components/Slide/Slides";
import NewUpdate from "../components/Stories/NewUpdate";
import RankCollection from "../components/Stories/RankCollection";
import RankCollection2 from "../components/Stories/RankCollection2";
import Recommend from "../components/Stories/Recommend";
import UserReading from "../components/Stories/UserReading";
import Story from "../components/Story.jsx/Story";

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
  {
    id: "7",
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
    id: "8",
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
    <div className="page flex flex-col space-y-16">
      <div className="grid grid-rows-1 grid-flow-row md:grid-flow-col grid-cols-6 gap-10">
        <div className="md:col-start-5 col-span-6 md:col-span-2">
          <UserReading mini />
        </div>
        <div className="md:col-start-1 col-span-6 md:col-span-4">
          {/* <Recommend items={stories} /> */}
          <RecommendList items={stories} />
        </div>
      </div>
      <div className="hidden sm:block">
        <RankCollection />
      </div>
      <div className="sm:hidden">
        <RankCollection2 />
      </div>
      <div>
        <NewUpdate />
      </div>
      <div className="grid grid-cols-6 gap-8">
        {/* <Carousel
          imgs={[
            "https://picsum.photos/id/1043/300/400",
            "https://picsum.photos/id/1044/300/400",
            "https://picsum.photos/id/1045/300/400",
            "https://picsum.photos/id/1051/300/400",
            "https://picsum.photos/id/1047/300/400",
            "https://picsum.photos/id/1048/300/400",
            "https://picsum.photos/id/1049/300/400",
            "https://picsum.photos/id/1050/300/400",
            "https://picsum.photos/id/1042/300/400",
          ]}
        /> */}
        <div className="col-span-6 md:col-span-6 lg:col-span-2">
          <Slides />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <Recommend items={stories} />
        </div>
      </div>
      <div className="flex">
        <Story story={stories[0]} size={1} />
        <Story story={stories[0]} size={2} />
        <Story story={stories[0]} size={3} />
        <Story story={stories[0]} size={4} />
      </div>
    </div>
  );
};

export default Home;
