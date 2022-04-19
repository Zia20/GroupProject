// import logo from './logo.svg';
import './App.css';
import Maps from './Components/mapbox';
import GoogleApiWrappers from './Components/GoogleApiWrapper';
import Navigation from './Components/Navigation';
import WordCount from './Components/WordCount';
import Ratings from './Components/Ratings';

function App() {
  return (
    <>
      <Navigation />
      <WordCount />
      <Maps />
      <Ratings/>
    </>
  );
}

export default App;
