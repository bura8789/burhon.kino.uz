import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  
} from "reactstrap";
function Cards() {
  const arr = [1, 1, 1, 1, 1, 1,1, 1, 1,2,1, 1, 1,1 ,1, 1, 1, 1,1,1];
  const[data, setData] = useState([]);
    useEffect(()=>{
       axios.get('https://jk-tv.netlify.app/cartoons/get_all').then((d)=> setData(d.data));
    },[]);
    console.log (data)
  return (
    <div id="content">
      {data.map((d) => (
        <Card
          style={{
            width: "11rem",
            
          }}
        >
          <img alt='Sample' src={d.posterPath} />
       
        </Card>
      ))}
    </div>
  );
}
export default Cards;
