// import { ReactDOM } from 'react';
import { Route, Routes } from "react-router-dom"
import Campground from "./Components/Campground";
import Parks from "./Components/Parks";
import Recreation from "./Components/Recreation";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import Web from "./Components/Web";
import Footer from "./Components/Web";
import Navigation from './Components/Navigation';
import ErrorPage from "./Components/ErrorPage";


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
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
