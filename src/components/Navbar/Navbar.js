import {Routes, Route} from "react-router-dom";
import Home from "../home/Home"; 
import '../Navbar/Navbar.css'
 
 export default function Navbar() {
          return (
              <>
              
    <Routes className='Routes'>
        <Route path="/" element={<Home />} />
    </Routes>

              </>
          )
      }