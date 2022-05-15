import Tours from '../tours/Tours';
import Header from '../header/Header';
import Footer from '../footer/Footer';
// import Tour from '../tours/tour/Tour';
// import TourDetails from '../TourDetails/TourDetails';
// import { Link } from "react-router-dom";
import '../home/Home.css'
const travelData = require('../../data/db.json');

function Home () {
    return (
        <>
        <Header />
        <Tours tour={travelData} />
            {
          // travelData.map(element => {
          //     return (

          //       <Link to={`/city/${element.id}`} key={element.id}>
          //           <Tour className='Tours'  
          //           name={element.name} 
          //           image={element.image}
          //           />  
          //         </Link>
          //           );
          //      } )

        }
           
          <Footer />
          
          </>
          )
}

export default Home;