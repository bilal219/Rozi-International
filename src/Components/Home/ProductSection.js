import React from 'react'
import CategoryCards from '../Cards/CategoryCards'
import CategoryData from '../Data/CategoryData'
function ProductSection() {
  function catCards(val)
  {
    return(
<CategoryCards 
       cname={val.cname}
       imgpath={val.imgpath}
       price={val.price}
     />
    )
  }
  return (
    <div className="product-section mt-150 mb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="section-title">
          <h3>
            <span className="orange-text">Our</span> Products
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            fuga quas itaque eveniet beatae optio.
          </p>
        </div>
      </div>
    </div>
    <div className="row product-lists">
     {/* <CategoryCards 
       cname={CategoryData[0].cname}
       imgpath={CategoryData[0].imgpath}
       price={CategoryData[0].price}
     />
      <CategoryCards 
       cname={CategoryData[1].cname}
       imgpath={CategoryData[1].imgpath}
       price={CategoryData[1].price}
     />
      <CategoryCards 
       cname={CategoryData[2].cname}
       imgpath={CategoryData[2].imgpath}
       price={CategoryData[2].price}
     /> */}
     {CategoryData.map(catCards)}
      {/* <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="assets/img/products/product-img-1.jpg" alt="" />
            </a>
          </div>
          <h3>Strawberry</h3>
          <p className="product-price">
            <span>Per Kg</span> 85${" "}
          </p>
          <a href="cart.html" className="cart-btn">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="assets/img/products/product-img-2.jpg" alt="" />
            </a>
          </div>
          <h3>Berry</h3>
          <p className="product-price">
            <span>Per Kg</span> 70${" "}
          </p>
          <a href="cart.html" className="cart-btn">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
        <div className="single-product-item">
          <div className="product-image">
            <a href="single-product.html">
              <img src="assets/img/products/product-img-3.jpg" alt="" />
            </a>
          </div>
          <h3>Lemon</h3>
          <p className="product-price">
            <span>Per Kg</span> 35${" "}
          </p>
          <a href="cart.html" className="cart-btn">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </a>
        </div>
      </div> */}
    </div>
  </div>
</div>

  )
}

export default ProductSection