import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Truyen from "./components/Truyen";
import Filter from "./pages/Filter";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
    element: <Filter />,
  },
];

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {listPage.map((page) => {
            return (
              <Route key={page.path} path={page.path} element={page.element} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
