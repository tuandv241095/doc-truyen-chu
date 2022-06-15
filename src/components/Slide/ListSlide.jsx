import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slidesReducer from "../../helpers/slidesReducer";
import Slide from "./Slide";
import "./slide.css";

export const slides = [
  {
    title: "Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm",
    subtitle: "Tiên Hiệp",
    description:
      "Chuyển thế đi vào tu tiên thế giới, Hàn Tuyệt phát hiện chính mình mang theo trò chơi thuộc tính, vậy mà có thể đổ xúc xắc đổi mới linh căn tư chất cùng Tiên Thiên khí vận.",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Vạn Cổ Thần Đế",
    subtitle: "Tiên Hiệp",
    description:
      "800 năm trước, Minh Đế chi tử Trương Nhược Trần, bị vị hôn thê của hắn Trì Dao công chúa giết chết, thiên kiêu một đời, liền như vậy ngã xuống. Tám trăm năm sau, Trương Nhược Trần một lần nữa sống lại, lại phát hiện vị hôn thê đã từng giết chết hắn, đã thống nhất Côn Lôn Giới, mở ra Đệ Nhất Trung Ương đế quốc, được xưng Trì Dao Nữ Hoàng",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Vũ Luyện Điên Phong",
    subtitle: "Huyền Huyễn",
    description:
      "Dương Khai đệ tử thí luyện của Lăng Tiêu Các, kiêm gã quét rác, sai vặt, vì vô tình mặt được một cuốn Hắc thư thần bí, từ đó bước vào con đường võ đạo dài đằng đẵng.”",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Đế Bá",
    subtitle: "Huyền Huyễn",
    description:
      "Ngàn vạn năm trước, Lý Thất Dạ trồng xuống một cây Thúy Trúc.Tám trăm vạn năm trước, Lý Thất Dạ nuôi một đầu cá chép.Năm trăm vạn năm trước, Lý Thất Dạ thu dưỡng một cái tiểu cô nương.... ... ... ... ...Hôm nay, Lý Thất Dạ tỉnh lại sau giấc ngủ, Thúy Trúc tu luyện thành thần linh, cá chép hóa thành Kim Long, tiểu cô nương trở thành Cửu Giới Nữ Đế.Đây là một cái dưỡng thành cố sự, một cái bất tử Nhân tộc tiểu tử dưỡng thành Yêu Thần, dưỡng thành Tiên thú, dưỡng thành Nữ Đế cố sự.",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
  {
    title: "Trấn Quốc Phò Mã Gia",
    subtitle: "Dã Sử",
    description:
      "Trầm mê Tam Quốc Sát Quý Bình An chơi game chơi đến hôn mê, tỉnh lại sau giấc ngủ, lại xuyên việt đến Đại Vũ Vương Triều, còn không cẩn thận thành Đại Vũ Vương Triều lớn nhất mềm chân người ở rể, đương triều phò mã gia, còn thuận tiện kích hoạt 1 cái Tam Quốc anh linh hệ thống, chỉ cần có vàng, liền có thể triệu hoán ba trong nước sở hữu võ tướng mưu thần, kiêu hùng mỹ nhân, từ nay về sau, Quý Bình An đi đến một đầu vì vàng không từ thủ đoạn đường!",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
  },
];

const initialState = {
  slideIndex: 0,
};

const ListSlide = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="flex justify-center items-center overflow-hidden w-[50%]">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>
          <FaArrowLeft />
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ListSlide;
