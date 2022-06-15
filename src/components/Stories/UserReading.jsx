import React from "react";
import Pagination from "../Pagination/Pagination";
import Reading from "./Reading";
import Tabs from "./Tabs";

const UserReading = ({ mini }) => {
  return (
    <div className="space-y-3">
      <Tabs />
      <Reading
        items={[
          { name: "Ta đến từ tương lai 300 năm", text: "Đã đọc: 100/121" },
          { name: "Cuộc sống thật khó khăn", text: "Đã đọc: 100/121" },
          { name: "Năm nay hoa lại nở", text: "Đã đọc: 100/121" },
          { name: "Xuân hạ thu đông", text: "Đã đọc: 100/121" },
          { name: "Trở lại tuổi 18", text: "Đã đọc: 100/121" },
          { name: "Ta trường sinh vô địch", text: "Đã đọc: 100/121" },
          { name: "Ta đến từ tương lai 3000 năm", text: "Đã đọc: 100/121" },
        ]}
      />
      {mini ? (
        <div className="flex justify-end text-xs hover:text-my-theme pr-[8px]">
          <span className="cursor-pointer">Xem tất cả</span>
        </div>
      ) : (
        <Pagination />
      )}
    </div>
  );
};

export default UserReading;
