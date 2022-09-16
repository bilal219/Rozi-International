import React from 'react'
import Categories from '../Home/Categories'
import Slogans from '../Home/Slogans'
//import Breadcrumspic from './Breadcrumspic'
function Products() {
  return (
    <>
    <div className="breadcrumb-section breadcrumb-bg" >
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="breadcrumb-text">
          <p>We sale fresh items</p>
          <h1>PRODUCTS</h1>
        </div>
      </div>
    </div>
  </div>
</div>
    <Categories/>
    <Slogans/>
    </>

  )
}

export default Products