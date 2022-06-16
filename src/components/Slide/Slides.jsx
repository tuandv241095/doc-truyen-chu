import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slide from "./Slide";
import SlideInfo from "./SlideInfo";

export const slides = [
  {
    title: "Vạn Cổ Thần Đế",
    subtitle: "Tiên Hiệp",
    author: "Nhĩ Căn",
    description:
      "800 năm trước, Minh Đế chi tử Trương Nhược Trần, bị vị hôn thê của hắn Trì Dao công chúa giết chết, thiên kiêu một đời, liền như vậy ngã xuống. Tám trăm năm sau, Trương Nhược Trần một lần nữa sống lại, lại phát hiện vị hôn thê đã từng giết chết hắn, đã thống nhất Côn Lôn Giới, mở ra Đệ Nhất Trung Ương đế quốc, được xưng Trì Dao Nữ Hoàng",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Vũ Luyện Điên Phong",
    subtitle: "Huyền Huyễn",
    author: "Nhĩ Căn",
    description:
      "Dương Khai đệ tử thí luyện của Lăng Tiêu Các, kiêm gã quét rác, sai vặt, vì vô tình mặt được một cuốn Hắc thư thần bí, từ đó bước vào con đường võ đạo dài đằng đẵng.”",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm",
    subtitle: "Tiên Hiệp",
    author: "Nhĩ Căn",
    description:
      "Chuyển thế đi vào tu tiên thế giới, Hàn Tuyệt phát hiện chính mình mang theo trò chơi thuộc tính, vậy mà có thể đổ xúc xắc đổi mới linh căn tư chất cùng Tiên Thiên khí vận.",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Đế Bá",
    subtitle: "Huyền Huyễn",
    author: "Nhĩ Căn",
    description:
      "Ngàn vạn năm trước, Lý Thất Dạ trồng xuống một cây Thúy Trúc.Tám trăm vạn năm trước, Lý Thất Dạ nuôi một đầu cá chép.Năm trăm vạn năm trước, Lý Thất Dạ thu dưỡng một cái tiểu cô nương.... ... ... ... ...Hôm nay, Lý Thất Dạ tỉnh lại sau giấc ngủ, Thúy Trúc tu luyện thành thần linh, cá chép hóa thành Kim Long, tiểu cô nương trở thành Cửu Giới Nữ Đế.Đây là một cái dưỡng thành cố sự, một cái bất tử Nhân tộc tiểu tử dưỡng thành Yêu Thần, dưỡng thành Tiên thú, dưỡng thành Nữ Đế cố sự.",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Trấn Quốc Phò Mã Gia",
    subtitle: "Dã Sử",
    author: "Nhĩ Căn",
    description:
      "Trầm mê Tam Quốc Sát Quý Bình An chơi game chơi đến hôn mê, tỉnh lại sau giấc ngủ, lại xuyên việt đến Đại Vũ Vương Triều, còn không cẩn thận thành Đại Vũ Vương Triều lớn nhất mềm chân người ở rể, đương triều phò mã gia, còn thuận tiện kích hoạt 1 cái Tam Quốc anh linh hệ thống, chỉ cần có vàng, liền có thể triệu hoán ba trong nước sở hữu võ tướng mưu thần, kiêu hùng mỹ nhân, từ nay về sau, Quý Bình An đi đến một đầu vì vàng không từ thủ đoạn đường!",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

const Slides = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prev = () => {
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  const next = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  return (
    <div className="grid grid-cols-6 bg-gray-light bg-opacity-20 rounded-md">
      <div className="col-span-6 md:col-span-3 lg:col-span-6 p-4">
        <div className="flex justify-center overflow-hidden h-[150px] items-center ">
          <div className="slides relative grid">
            <button
              className="absolute top-[40%] w-[20%] h-[20%] left-[-50%] bg-opacity-0 text-white  border-none focus:outline-none z-10 "
              onClick={prev}
            >
              <FaArrowLeft />
            </button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button
              className="absolute top-[40%] w-[20%] h-[20%] right-[-50%] bg-opacity-0 text-white  border-none focus:outline-none z-10 "
              onClick={next}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 lg:col-span-6 p-4 flex items-center">
        <SlideInfo slide={slides[slideIndex]} />
      </div>
    </div>
  );
};

export default Slides;
