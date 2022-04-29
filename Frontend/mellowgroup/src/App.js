// import { ReactDOM } from 'react';
import "./App.css"; //Don't Remove please
import { Route, Routes } from "react-router-dom";
import Parks from "./Components/Parks/Parks";
import Recreation from "./Components/Recreation/Recreation";
import Signup from "./Components/SignIn/Signup";
import Signin from "./Components/SignIn/Signin";
import Web from "./Components/Web";
import Footer from "./Components/Headers/Footer";
import Navigation from "./Components/Headers/Navigation";
import ErrorPage from "./Components/Headers/ErrorPage";
import About from "./Components/About/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import Engage from "./Components/Engage/Engage";
import Dogpage from "./Components/Dog/Dogpage";
import DogId from "./Components/Dog/DogId";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/recreation" element={<Recreation />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/dog" element={<Dogpage />} />
        <Route path="/dog/:id" element={<DogId />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
