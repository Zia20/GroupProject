// import logo from './logo.svg';
import './App.css';
import GoogleApiWrappers from './Components/GoogleApiWrapper';
import Navigation from './Components/Navigation';
import WordCount from './Components/WordCount';

function App() {
  return (
    <>
      <Navigation />
      <WordCount />
      <GoogleApiWrappers />
    </>
  );
}

export default App;
