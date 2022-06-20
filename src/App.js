import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import FilterStories from "./pages/FilterStories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import StoryInfo from "./pages/StoryInfo";

const listPage = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "filter",
    element: <FilterStories />,
  },
  {
    path: "truyen/:id",
    element: <StoryInfo />,
  },
];

const genres = [
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
];

const ranks = [
  { name: "Thịnh hành", id: "1" },
  { name: "Lượt đọc", id: "2" },
  { name: "Đề cử", id: "3" },
  { name: "Đánh giá", id: "4" },
  { name: "Lượt thích", id: "6" },
  { name: "Bình luận", id: "7" },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar genres={genres} ranks={ranks} />
        <div className="main">
          <Banner />
          <Routes>
            {listPage.map((page) => {
              return (
                <Route
                  key={page.path}
                  path={page.path}
                  element={page.element}
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
