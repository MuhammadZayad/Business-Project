import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
    const handleClick = () => {
      console.log("Button Clicked!");
        navigate('/ContactForm'); // Redirect to the contact page when button is clicked
      };
  return (
    <>
      
  
    <div className='convo-div'>
      <h1>LETS CREATE <span style={{color:"#0D70B2", fontSize:"2.3rem"}}>SOMETHING PHENOMENAL</span></h1>
      <h2> <span style={{color:"#2ABCB0", fontSize:"1.5rem"}}>IT ALL STARTS WITH A </span> CONVERSATION</h2>
      </div>
    
    {/* portion 7.............last */}
    <footer className="footer">
      <div className="footer-left">
        <div className="logo-section">
          <img src="logo.png" alt="Logo" className="logo" />
          <h3 className="company-name">CraftHive Solutions</h3>
        </div>
        <div className="contact-details">
          <p>Address: 123 Main St, Some City, Some Country</p>
          <p>Email: contact@ivaninfotech.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      
        <button onClick={handleClick} className="build-btn">
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
          {/* <Link to="/blog">Blog</Link> */}
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms and Conditions</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/user-agreement">User Agreement</Link>
          <Link to="/cancellation-refund">Cancellation and Refund Policy</Link>
          <Link to="/ContactForm">Contact Us</Link>
        </div>
      </div>
    </footer>


    </>
  )
}

export default Footer
