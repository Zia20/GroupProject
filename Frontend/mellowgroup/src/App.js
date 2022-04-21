// import { ReactDOM } from 'react';
import './App.css'; //Don't Remove please
import { Route, Routes } from "react-router-dom"
import Campground from "./Components/Campground";
import Parks from "./Components/Parks";
import Recreation from "./Components/Recreation";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Web from "./Components/Web";
import Footer from "./Components/Footer";
import Navigation from './Components/Navigation';
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

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
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
