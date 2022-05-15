import Tour from './tour/Tour'
import { Link } from "react-router-dom";
const travelData = require('../../data/db.json');
function Tours() {
    return (
        <>
      
 {
        travelData.map(element => {
            return (

                <Link to={`/city/${element.id}`} key={element.id}>
                    <Tour className='Tours'  key={element.id}
                         name={element.name}
                         image={element.image}
                         element={element}
                    />
                </Link>
            );
        })
    }
    
    </>
        )

}
export default Tours;

/* <div>
<h2>{props.name}</h2>
<img src={props.image}  />  
</div> */