<<<<<<< HEAD
// import logo from './logo.svg';
import './App.css';
import Maps from './Components/mapbox';
import GoogleApiWrappers from './Components/GoogleApiWrapper';
=======
// import { ReactDOM } from 'react';
import { Route, Routes } from "react-router-dom"
import Campground from "./Components/Campground";
import Parks from "./Components/Parks";
import Recreation from "./Components/Recreation";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Web from "./Components/Web";
import Footer from "./Components/Footer";
>>>>>>> e8a52671713699ddf1babc1f281c2d77af5b8410
import Navigation from './Components/Navigation';
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";



function App() {
  return (
    <>
      <Navigation />
<<<<<<< HEAD
      <WordCount />
      <Maps />
      <Ratings/>
=======
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/campground" element={<Campground />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
>>>>>>> e8a52671713699ddf1babc1f281c2d77af5b8410
    </>
  );
}

export default App;
