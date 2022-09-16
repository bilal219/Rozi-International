import React from 'react'
import Slogans from '../Home/Slogans'
//import Breadcrumspic from './Breadcrumspic'
function Complainces() {
  return (
    <>
    <div className="breadcrumb-section breadcrumb-bg" >
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="breadcrumb-text">
          <p>We sale fresh items</p>
          <h1>COMPLAINCES</h1>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="product-section mt-150 mb-150">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2 text-center">
          <div className="section-title">
            <h3>
              <span className="orange-text">OUR</span> CERTIFICATES
            </h3>
            <p>
              Rozi International has got Certificated for their quality products
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="!#">
                <img src="assets/img/certificates/cert-2.jpg" alt="" />
              </a>
            </div>
            <h3>HACCP</h3>
            
          </div>
        </div>
        <div className="col-lg-6 col-md-6 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="!#">
              <img src="assets/img/certificates/cert-1.jpg" alt="" />
              </a>
            </div>
            <h3>ISO 9001</h3>
            
          </div>
        </div>
        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="!#">
              <img src="assets/img/certificates/cert-3.jpg" alt="" />
              </a>
            </div>
            <h3>ISO 22000</h3>
           
          </div>
        </div>
        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="!#">
              <img src="assets/img/certificates/cert-4.jpg" alt="" />
              </a>
            </div>
            <h3>HALAL</h3>
           
          </div>
        </div>
        <div className="col-lg-6 col-md-6 offset-md-3 offset-lg-0 text-center">
          <div className="single-product-item">
            <div className="product-image">
              <a href="!#">
              <img src="assets/img/certificates/cert-5.jpg" alt="" />
              </a>
            </div>
            <h3>Tax Payer Registration Certificate</h3>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  <Slogans/>
</>
  )
}

export default Complainces