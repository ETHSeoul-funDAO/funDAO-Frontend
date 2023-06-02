import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "../../pages/aboutPage";
import MainPage from "../../pages/mainPage";
import ExplorePage from "../../pages/explorePage";
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
        <Route path='/about' element={<AboutPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/createProject' element={<CreateProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}