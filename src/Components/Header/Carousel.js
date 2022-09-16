import React from 'react'
import { Link } from 'react-router-dom'

function Carousel() {
 
  return (
   <>
   
      <div className="hero-area hero-bg">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 offset-lg-2 text-center">
        <div className="hero-text">
          <div className="hero-text-tablecell">
            <p className="subtitle">Fresh &amp; Organic</p>
            <h1>Serving The Natural Twist</h1>
            <div className="hero-btns">
              <Link to="/products" className="boxed-btn">
                Explre More
              </Link>
              <Link to="/contactus" className="bordered-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


   </>
  )
}

export default Carousel