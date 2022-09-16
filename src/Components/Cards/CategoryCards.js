import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCards(props) {
  return (
    <div className={"col-lg-4 col-md-6 text-center "}>
    <div className="single-product-item">
    <Link to={`/subcategories/${props.category}`}>
      <div className="product-image">
          <img src={props.imgpath} alt="" />
      </div>
      <h3>{props.cname}</h3>
    </Link>
    </div>
  </div>
  )
}

export default CategoryCards