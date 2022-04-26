// import { ReactDOM } from 'react';
import "./App.css"; //Don't Remove please
import { Route, Routes } from "react-router-dom";
import Parks from "./Components/Parks";
import Recreation from "./Components/Recreation";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import Web from "./Components/Web";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
<<<<<<< HEAD
// import Dashboard from "./Components/Dashboard";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
=======
import Dog from "./Components/Dog";
import Dashboard from "./Components/Dashboard";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Engage from "./Components/Engage";
import offLeash from "./Components/property/dogs.json";
>>>>>>> b61b95cfaefc2b541bb7f999d3f65a7ee66ea0bc

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
<<<<<<< HEAD

        {/* <Route path="/about" element={
          <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        } />     */}

=======
        <Route path="/dog"
          element={offLeash.map((dogLists, index) => {
            if (index < 3) {
              return <Dog dogLists={dogLists} />;
            }
          })}
        />
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> b61b95cfaefc2b541bb7f999d3f65a7ee66ea0bc
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
