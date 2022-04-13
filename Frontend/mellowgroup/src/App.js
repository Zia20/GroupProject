// import logo from './logo.svg';
import './App.css';
import GoogleApiWrappers from './Components/GoogleApiWrapper';
import Navigation from './Components/Navigation';
import WordCount from './Components/WordCount';
import Ratings from './Components/Ratings';
import Cross from './Components/Cross';
import Maps from "./Components/Maps"

function App() {
  return (
    <>
      <Navigation />
      <WordCount />
      <Cross />
      <Ratings/>
      <Cross />
      <Maps />
      <Cross />
      <GoogleApiWrappers />
    </>
  );
}

export default App;
