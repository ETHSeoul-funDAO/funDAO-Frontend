import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import MyPage from "../../pages/myPage";
import MainPage from "../../pages/mainPage";
import ExplorePage from "../../pages/explorePage";
import Detailpage from "../../pages/detailPage";
import CreateProjectPage from "../../pages/createProjectPage";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Main
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>
          About
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>
          Contact
        </NavLink>
      </nav> */}

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/createProject' element={<CreateProjectPage />} />
        <Route path='/detail/:id' element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
}