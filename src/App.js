import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
// import Navbar from './components/Navbar/Navbar';
import TourDetails from "./components/TourDetails/TourDetails";
import travelData from "./data/db.json" ;



function App() {
  return (
    <>
      {/* <Routes className='Routes'>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={travelData} />} />
      </Routes> */}
      <Routes className='Routes'>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails data={travelData} />} />
      </Routes>

    </>
  );
}

export default App;
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>