import Tours from '../tours/Tours';
import Header from '../header/Header';
import Footer from '../footer/Footer';
const travelData = require('../../data/db.json');

function Home (props) {
    return (
        <>
        <Header />

            {
          travelData.map(element => {
              return (
                    <Tours 
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