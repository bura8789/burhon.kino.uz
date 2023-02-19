import { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const[data, setData] = useState([]);
    useEffect(()=>{
       axios.get('https://jk-tv.netlify.app/Trending_movies/get_all').then((d)=> setData(d.data));
    },[]);
  return (
    <div id="content">
      {data.map((d) => (
        <div          style={{
            width: "11rem",
            
          }}
        >
          <img className="Trending" alt='Sample' src={d.posterPath} />
       
        </div>
      ))}
    </div>
  );
}
export default Trending;