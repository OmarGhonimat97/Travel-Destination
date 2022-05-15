// import { Link } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useState } from "react";
import { useParams } from "react-router-dom";
let data = require("../../data/db.json");


export default function TourDetails() {
  //1.getting pet id
    let {id} = useParams();
    //2.filtering for the wanted data
    let result = data.filter(data => data.id === id)
    console.log(result);
    //3/render its data 
    const [showMore, setShowMore] = useState(false);
    return (
      <>
       <Header />
        <div key={result[0].id}>
          <img src={result[0].image} alt={result[0].name} />
          <ul>
            <li> Name :{result[0].name} </li>
            <li>Info : {result[0].info}</li>
            {showMore ? result[0].info : `${result[0].info.slice(0, 0)}`}
          <br />
             <button className="btn" onClick={() => setShowMore(!showMore)}>
            
             {showMore ? "Show less" : "Show more"}</button>
            <li>Image : {result[0].image}</li>
            <li>Price : {result[0].price}</li>
          </ul>
        </div>
        
        <Footer />
      </>
    );

  
}
// {showMore ? text : `${text.substring(0, 250)}`}
//   <button className="btn">Show more</button>

/* <button className="btn" onClick={() => setShowMore(!showMore)}>Show more</button> */
// {showMore ? "Show less" : "Show more"}