import { useState, useEffect } from "react";
import axios from "axios";

function War() {
  const[data, setData] = useState([]);
    useEffect(()=>{
       axios.get('https://jk-tv.netlify.app/war_movies/get_all').then((d)=> setData(d.data));
    },[]);
  return (
    <div id="content">
      {data.map((d) => (
        <div          style={{
            width: "11rem",
            
          }}
        >
          <img className="War" alt='Sample' src={d.posterPath} />
       
        </div>
      ))}
    </div>
  );
}
export default War;