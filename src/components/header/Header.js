import {Link} from "react-router-dom";
import '../header/Header.css';


function Header () {
    return (
        <>
        <h1 className='header'> Travel Destinations</h1>
        <nav id='navBar'>
            <Link to = '/'>Home</Link>
        </nav>
        </>
    )
}
export default Header;