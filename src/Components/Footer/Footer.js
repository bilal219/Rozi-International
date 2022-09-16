import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    {/* footer */}
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-box about-widget">
              <h2 className="widget-title">About us</h2>
              <p style={{textAlign:'justify'}}>
              ROZI INTERNATIONAL (PVT) LIMITED is committed to be a dominant and respected player in its field creating value additions and cost effective solutions to its suppliers and clients.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box get-in-touch">
              <h2 className="widget-title">Get in Touch</h2>
              <ul>
                <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                <li>info@roziinternational.com</li>
                <li>+92 42 37379067</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box pages">
              <h2 className="widget-title">Pages</h2>
              <ul>
                  <li className="current-list-item">
                    <Link to='/'>HOME</Link>
                   
                  </li>
                  <li>
                    <Link to='/company'>COMPANY</Link>
                  </li>
                  <li>
                    <Link to="/products">PRODUCTS</Link>
                   
                  </li>
                  
                  <li>
                    <Link to="/botentialname">BOTANICAL NAME</Link>
                  </li>
                  <li>
                    <Link to="/complainces">COMPLAINCES</Link>
                   
                  </li>
                  <li>
                    <Link to="/events">EVENTS</Link>
                   
                  </li>
                  <li>
                    <Link to='/contactus'>CONTACT US</Link>
                   
                  </li>
                 
                </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box pages">
              <h2 className="widget-title">Follow Us</h2>
              <ul>
            <li className='current-list-item'>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f" />
                &nbsp; &nbsp;Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter" />
                &nbsp; &nbsp;Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram" />
                &nbsp; &nbsp;Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-linkedin" />
                &nbsp; &nbsp;LinkedIn
              </a>
            </li>
           
          </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end footer */}


    <div className="copyright">
  <div className="container">
    <center>
      <div className="col-lg-12 col-md-12">
        <p>
          Copyrights © 2022 -{" "}
          <a href="#">Rozi International</a>, All Rights
          Reserved.
          <br />
          Develop with Love by 
          <a href="https://technicmentors.com/" target={"_blank"}>{" "} TechnicMentors</a>
        </p>
        
      </div>
      
        
      
     
      </center>
  </div>
</div>


  </>
  
  )
}

export default Footer