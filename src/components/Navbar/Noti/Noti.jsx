import React from "react";
import Notilist from "./Notilist";
import img1 from "../../../images/1.jpg";
import { FaBell } from "react-icons/fa";

const Noti = ({ notiHidden, handleNoti, notiRef, bellRef }) => {
  return (
    <li className="hidden md:block px-2">
      <div ref={bellRef}>
        <FaBell className="w-5 h-5 cursor-pointer" onClick={handleNoti} />
      </div>

      {!notiHidden && (
        <Notilist
          notiRef={notiRef}
          notiList={[
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
            {
              user: {
                photo: img1,
              },
              text: "Nguyễn Thành Nam vừa bình luận về nhận xét của bạn",
              time: new Date().toLocaleString(),
            },
            {
              story: {
                poster: {
                  poster150: img1,
                },
              },
              text: "Đỉnh Cấp Khí Vận Lặng Lẽ Tu Luyện Ngàn Năm đã ra chương mới. Đọc Ngay!",
              time: new Date().toLocaleString(),
            },
          ]}
        />
      )}
    </li>
  );
};

export default Noti;
