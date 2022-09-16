import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
  return (
    <div className={"col-lg-4 col-md-6 text-center "}>
    <div className="single-product-item">
    <Link to={`/singleproduct/${props.code}`}>
      <div className="product-image">
        
          <img src={props.img} alt="" />
        
      </div>
      <h3>{props.name}</h3>
      </Link>
    </div>
  </div>
  )
}

export default ProductCard