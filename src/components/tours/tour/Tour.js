import { Link } from "react-router-dom";

export default function Tour (props) {
return (

<div>

<h2>{props.name}</h2>
<img src={props.image} alt="" />  
</div>
)

}