import { Route, Routes } from "react-router-dom";
import './App.scss'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";



function App() {
  return (
    <>
    
    <Routes>
      {/* <Route path="/*" element={<LoadingPage />} /> */}
      <Route path="/*" element={<Navbar />} >
       <Route path="home" element={<Home />} />
       <Route path="about" element={<About />} />
       {/* <Route path="gallery" element={<Gallery />} /> */}
       {/* <Route path="contact" element={<Contact />} /> */}
       {/* <Route path="news" element={<News />} /> */}
       {/* <Route path="news/:newsId" element={<Content />} /> */}
      </Route>
      

    </Routes>
    
    
    
    
    

    </>
  );
}

export default App;
