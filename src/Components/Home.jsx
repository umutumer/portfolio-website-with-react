import React, { useEffect, useState } from "react";
import "../Styles/Home.css";
import personalPicture from "../Pictures/personal-picture.jpeg";
import { FiGithub } from "react-icons/fi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const text = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      const currentText = text.slice(0, currentIndex + 1);
      setDisplayText(currentText);

      if (currentIndex === text.length - 1) {
        setIsReversed(true);
      } else if (currentIndex === 1) {
        setIsReversed(false);
      }

      if (isReversed) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 150);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [displayText, currentIndex, isReversed]);
    const instagramURL = "https://www.instagram.com/umutumer/";
    const githubURL = "https://github.com/umutumer/";
    const linkedinURL = "https://www.linkedin.com/in/umutumer/";
  
    const openInNewTab = (url) => {
      window.open(url, '_blank');
    };
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-img">
          <img src={personalPicture} alt="HomeImg" />
        </div>
        <div className="home-content">
          <p className="home-title">
            I'M <span>UMUT CAN TUMER</span>
          </p>
          <p className="home-title front-dev">{displayText}</p>
          <p style={{fontSize:"20px"}}>
          Hello, I am Umut Can. I have been interested in front-end development for about a year and gaining experience in this field. I developed various projects with HTML, CSS and JavaScript programs. Currently, I am creating websites with React. I continue to improve myself in this field and try to stay informed about the updates in my field.
          </p>
          <div className="home-icons">
            
            <button className="home-btn" onClick={()=> openInNewTab(githubURL)}><FiGithub className="home-icon" /></button>
            <button className="home-btn" onClick={()=> openInNewTab(instagramURL)}><BiLogoInstagramAlt className="home-icon"  /></button>
            <button className="home-btn" onClick={()=> openInNewTab(linkedinURL)}><FaLinkedinIn className="home-icon"  /></button>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
