import React from 'react'
import { Link } from 'react-router-dom'

function SubCategoryCards(props) {
  return (
    <div className={"col-lg-4 col-md-6 text-center"}>
    <div className="single-product-item">
    <Link to={`/catproducts/${props.sub_cat_name}`}>
      <div className="product-image">
        
          <img src={props.imgPath} alt="" />
        
      </div>
      <h3>{props.name}</h3>
      </Link>
    </div>
  </div>
  )
}

export default SubCategoryCards