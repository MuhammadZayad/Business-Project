import React from 'react'
import { Link } from 'react-router-dom';
import { TiTickOutline } from "react-icons/ti";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaUserCog, FaBrain, FaUsers, FaPalette, FaCheckCircle } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { FaFlutter } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaPhp,FaMagento,FaShopify,FaWordpress } from "react-icons/fa";
import { MdOutlineRocket } from "react-icons/md";
import { GiDarkSquad } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiReservedFill } from "react-icons/ri";
import { RiShakeHandsLine } from "react-icons/ri";
import { MdOutlineVerticalAlignTop } from "react-icons/md";


const Home = () => {
  return (
    <>
     <div className='container'>
  <div className='child1'>
    <h1>LET'S <span style={{ fontSize: "35px", fontWeight: "bold" }}>CREATE SOMETHING</span><br />PHENOMENAL</h1>
    <h3>IT ALL STARTS WITH A CONVERSATION</h3>
    <ul>
      <h4><TiTickOutline />Work with Top 1% Digital Service Provider</h4>
      <h4><TiTickOutline />ISO 9001 & 2015 certified</h4>
      <h4><TiTickOutline />200+ Professional Developers</h4>
    </ul>
    <button>Lets Build Together</button>
    <p><TiTickOutline />100% confidential</p>
  </div>
  <div className='child2'>
    <img src="wg.png" alt="home img" />
  </div>
</div>


        {/* 2nd portion...... */}
        <div className='container1'>
          <div className='c1child1'>
            <p>What we are Offering</p>
            <h1>Services Built Specifically <br/>for your <span style={{fontSize: "30px", fontWeight:'bold'}}>Business</span></h1>

          </div>
       
           <div className='c1child2'>
            <p>As a leading enterprise software development company, Ivan follows a solution-oriented approach. Thus, as a go-to custom software development company, we leverage the latest technologies like Blockchain, Artificial intelligence, AR, etc.</p>
           </div>
           
        </div>
{/* portion 3................ */}
<div className="container2">
      <div className="box">
        <FaLaptopCode className="icon" />
        <span>Web Development</span>
      </div>
      <div className="box">
        <FaShoppingCart className="icon" />
        <span>E-Commerce</span>
      </div>
      <div className="box">
        <FaUserCog className="icon" />
        <span>Software Development</span>
      </div>
      <div className="box">
        <FaMobileAlt className="icon" />
        <span>Mobile and TV App</span>
      </div>
      <div className="box">
        <FaUsers className="icon" />
        <span>Dedicated Teams</span>
      </div>
      <div className="box">
        <FaBrain className="icon" />
        <span>Artificial Intelligence</span>
      </div>
      <div className="box">
        <FaPalette className="icon" />
        <span>UI/UX Engineering</span>
      </div>
      <div className="box">
        <FaCheckCircle className="icon" />
        <span>QA</span>
      </div>
    </div>
    <div className="form-container">
      <input
        type="text"
        placeholder="Need custom enterprise software development ? "
        className="input-field"
        
      />
      <button className="submit-button">Send a Request Now</button>
      {/* portion 4.................. */}
    </div>
    <div style={{ textAlign: "center", padding: "1rem" }}>
  <h1
    style={{
      margin: "1rem auto",
      color: "#343A40",
      fontFamily: "sans-serif",
      fontSize: "2rem",
      lineHeight: "1.5",
    }}
  >
    Design. Develop. Maintain. Scale. Your{" "}
    <span style={{ color: "#0D70B2", fontSize: "2.5rem" }}>
      Full-Stack Development
    </span>
    <br />
    <span style={{ display: "block", fontSize: "2rem", marginTop: "0.5rem" }}>
      Partner
    </span>
  </h1>
  <p
    style={{
      color: "rgb(96,96,96)",
      fontSize: "1.1rem",
      maxWidth: "600px",
      margin: "0.5rem auto",
    }}
  >
    A Team of 50+ Experts Across 30+ Advanced Technologies
  </p>
</div>

    <div className="tech-container" >
  {/* First Row - 4 divs */}
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <BsApple className="tech-icon" />
    <span>iOS</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaFlutter className="tech-icon" />
    <span>Flutter</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaReact className="tech-icon" />
    <span>React Native</span>
  </div>
  <div className="tech-box"  data-aos="flip-left" data-aos-duration="1000">
    <FaAndroid className="tech-icon" />
    <span>Ionic</span>
  </div>

  {/* Second Row - 12 divs */}
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaJava className="tech-icon" />
    <span>Java</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaPython className="tech-icon" />
    <span>Python</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <SiDotnet className="tech-icon" />
    <span>DotNET</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaAngular className="tech-icon" />
    <span>Angular</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaReact className="tech-icon" />
    <span>ReactJS</span>
  </div>
  <div className="tech-box"data-aos="flip-left" data-aos-duration="1000" >
    <IoLogoJavascript className="tech-icon"  />
    <span>JavaScript</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <DiNodejs className="tech-icon" />
    <span>Nodejs</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaLaravel className="tech-icon" />
    <span>Laravel</span>
  </div>
  <div className="tech-box"data-aos="flip-left" data-aos-duration="1000">
    <FaPhp className="tech-icon" />
    <span>PHP</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaMagento className="tech-icon" />
    <span>Magento</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000"> 
    <FaShopify className="tech-icon" />
    <span>Shopify</span>
  </div>
  <div className="tech-box" data-aos="flip-left" data-aos-duration="1000">
    <FaWordpress className="tech-icon" />
    <span>WordPress</span>
  </div>
</div>
 {/* portion 5....................... */}
 <div className="team-container">
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineRocket className="team-icon" />
    <h2>8+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Years Experience</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <GiDarkSquad className="team-icon" />
    <h2>120+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Talented Squad</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <HiOutlineDesktopComputer className="team-icon" />
    <h2>500+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Projects Delivered</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiReservedFill className="team-icon" />
    <h2>40+</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Countries Served</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <RiShakeHandsLine className="team-icon" />
    <h2>99%</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Client Satisfaction</div>
  </div>
  <div className="team-box" data-aos="flip-left" data-aos-duration="1000">
    <MdOutlineVerticalAlignTop className="team-icon" />
    <h2>Top</h2>
    <div style={{ fontSize: '1rem', color: '#555' }}>Top Rating</div>
  </div>
</div>
{/* portion 6........................ */}


  
    <div className='convo-div'>
      <h1>LET'S CREATE <span style={{color:"#0D70B2", fontSize:"2.3rem"}}>SOMETHING PHENOMENAL</span></h1>
      <h2> <span style={{color:"#2ABCB0", fontSize:"1.5rem"}}>IT ALL STARTS WITH A </span> CONVERSATION</h2>
      </div>
    
    {/* portion 7.............last */}
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-section">
          <img src="logo.png" alt="Logo" className="logo" />
          <h3 className="company-name">Ivan Infotech Pvt. Ltd.</h3>
        </div>
        <div className="contact-details">
          <p>Address: 123 Main St, Some City, Some Country</p>
          <p>Email: contact@ivaninfotech.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <button className="build-btn">
          <i className="fas fa-handshake"></i> Lets Build Together
        </button>
      </div>

      <div className="footer-right">
        <div className="office-location">
          <h4>Our Office</h4>
          <p>1234 Business Rd, Suite 500, Some City, Some Country</p>
        </div>
        <div className="social-media">
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2016 - 2024 Ivan Infotech Pvt. Ltd. All Rights Reserved</p>
        <div className="footer-links">
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms and Conditions</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/user-agreement">User Agreement</Link>
          <Link to="/cancellation-refund">Cancellation and Refund Policy</Link>
          <Link to="/delivery-guidelines">Delivery Guidelines</Link>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Home



 

