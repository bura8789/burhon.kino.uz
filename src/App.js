import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Cards from "./Section";
import Footer from "./Footer";
import War from "./var";
import Popular from "./Popular";
import Trending from "./Trending";
import Fantasy from "./Fantasy";
import Scince from "./Science";
import { BrowserRouter,Route,Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <Routes>
      
      <Route path="/war-movies" element={<War/>} />
      <Route path="/cartoons" element={<Cards/>} />
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/fantasy" element={<Fantasy/>}/>
      <Route path="/science" element={<Scince/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
