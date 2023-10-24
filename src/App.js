import { Route, Routes } from "react-router-dom";
import './App.scss'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";



function App() {
  return (
    <>
    
    <Routes>
      {/* <Route path="/*" element={<LoadingPage />} /> */}
      <Route path="/" element={<Navbar />} >
       <Route path="/" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="portfolio" element={<Portfolio />} />
       <Route path="contact" element={<Contact />} />
      </Route>
      

    </Routes>
    
    
    
    
    

    </>
  );
}

export default App;
