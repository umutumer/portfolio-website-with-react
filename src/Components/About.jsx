import React from "react";
import "../Styles/About.css";
import {IoIosSchool} from 'react-icons/io'

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="personal-info">
            <h3>Personal Infos:</h3>
            <p>
              Full Name:<span>Umut Can Tumer</span>
            </p>
            <p>
              Age:<span>21</span>
            </p>
            <p>
              Freelance:<span>Avabile</span>
            </p>
            <p>
              E-mail:<span>utumer6@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="experience">
          <div className="experience-title">
            <h3>My Experience</h3>
          </div>
          <div className="experience-items">
            <div className="experience-item">
              <div className="experience-info">
                <h3>HTML</h3>
                <p>80%</p>
              </div>
              <div className="progess-line">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-info">
                <h3>CSS</h3>
                <p>80%</p>
              </div>
              <div className="progess-line">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-info">
                <h3>SASS</h3>
                <p>60%</p>
              </div>
              <div className="progess-line">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-info">
                <h3>JavaScript</h3>
                <p>60%</p>
              </div>
              <div className="progess-line">
                <span style={{ width: "60%" }}></span>
              </div>
            </div>
            <div className="experience-item">
              <div className="experience-info">
                <h3>React</h3>
                <p>70%</p>
              </div>
              <div className="progess-line">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
          </div>
        </div>
        <div className="education">
            <div className="education-title">
            <h3>EDUCATION</h3>
            </div>
            <div className="education-items">
            <div className="education-item">
              <IoIosSchool className="education-icon" />
              <h3>2023-2025 </h3>
              <p>Istanbul University Web Design and Coding</p>
            </div>
            <div className="education-item">
              <IoIosSchool className="education-icon" />
              <h3>2023</h3>
              <p> Bilge Adam Academy Frontend Developer Course</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
