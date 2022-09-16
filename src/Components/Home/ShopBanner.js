import React from 'react'
import { Link } from 'react-router-dom'

function ShopBanner() {
  return (
    <section className="shop-banner">
      <div className="container">
        <h3>
        Providing some magic, <br /> flavors and{" "}
          <span className="orange-text">good mood</span>
        </h3>
        <div className="sale-percent">
          <span>
          for.<br/>your
          </span>
          every <span>food</span>
        </div>
        <Link to="/products" className="cart-btn btn-lg">
          Explore More
        </Link>
      </div>
    </section>

  )
}

export default ShopBanner