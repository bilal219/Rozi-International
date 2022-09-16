import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from '../Data/NavbarLinks'

function Navbar() {
  const [links,Setlinks]=useState(NavbarLinks)
  
 
  
  return (
   <>
      
       <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              {/* logo */}
              <div className="site-logo">
                <Link to="/">
                  <img src="/assets/img/logo.png" style={{height:70,width:90}} alt="" />
                </Link>
              </div>
              {/* logo */}
              {/* menu start */}
              <nav className="main-menu">
                <ul>
                {
                  links.map((paths)=>(
                    <li key={paths.id}>
                    <Link to={paths.path}>{paths.name}</Link>
                   
                  </li>
                  ))
                }
                  {/* <li>
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
                    <Link to="/contactus">CONTACT US</Link>
                   
                  </li> */}
                  <li>
                    <div className="header-icons">
                      <a className="mobile-hide search-bar-icon" href="#">
                        <i className="fas fa-search" />
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="#">
                <i className="fas fa-search" />
              </a>
              <div className="mobile-menu" />
              {/* menu end */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end header */}
    {/* search area */}
    <div className="search-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="close-btn">
              <i className="fas fa-window-close" />
            </span>
            <div className="search-bar">
              <div className="search-bar-tablecell">
                <h3>Search For:</h3>
                <input type="text" placeholder="Keywords" />
                <button type="submit">
                  Search <i className="fas fa-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
            
    
   </>
  )
}

export default Navbar