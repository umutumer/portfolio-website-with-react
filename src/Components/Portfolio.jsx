import React from 'react'
import '../Styles/Portfolio.css'
import BoxImg from '../Pictures/personal-picture.jpeg'
const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className="portfolio-container">
        <div className="portfolio-title">
            <h3>Portfolio</h3>
        </div>
        <div className="portfolio-content">
            <div className="portfolio-box">
                <img src={BoxImg} alt="" />
                <h3>Lorem, ipsum.</h3>
                <button>View Code</button>
            </div>
            <div className="portfolio-box">
                <img src={BoxImg} alt="" />
                <h3>Lorem, ipsum.</h3>
                <button>View Code</button>
            </div>
            <div className="portfolio-box">
                <img src={BoxImg} alt="" />
                <h3>Lorem, ipsum.</h3>
                <button>View Code</button>
            </div>
            <div className="portfolio-box">
                <img src={BoxImg} alt="" />
                <h3>Lorem, ipsum.</h3>
                <button>View Code</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
