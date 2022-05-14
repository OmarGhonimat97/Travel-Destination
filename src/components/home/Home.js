import Tours from '../tours/Tours';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../home/Home.css'
const travelData = require('../../data/db.json');

function Home (props) {
    return (
        <>
        <Header />
        
            {
          travelData.map(element => {
              return (
                    <Tours className='Tours' 
                    name={element.name}
                    image={element.image}
                    
                    />
                    );
               } )

        }
           
          <Footer />
          
          </>
          )
}

export default Home;