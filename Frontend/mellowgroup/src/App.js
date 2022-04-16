// import { ReactDOM } from 'react';
import { Route, Routes } from "react-router-dom"
import Campground from "./Components/Campground";
import Parks from "./Components/Parks";
import Recreation from "./Components/Recreation";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import Web from "./Components/Web";
import Footer from "./Components/Footer";
import Navigation from './Components/Navigation';
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";



function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/campground" element={<Campground />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
