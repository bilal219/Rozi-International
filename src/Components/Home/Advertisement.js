import React from 'react'
import { Link } from 'react-router-dom'

function Advertisement() {
  return (
    <div className="abt-section mb-70">
  <div className="container">
    <div className="row">
     
      <div className="col-lg-12 col-md-12">
        <div className="abt-text">
          <p className="top-sub">Since Year 1999</p>
          <h2>
            We are <span className="orange-text">Rozi International</span>
          </h2>
          {/* <p>
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            facilis illo repellat veritatis minus, et labore minima mollitia qui
            ducimus.
          </p> */}
          <div className="about-text">
  <h5>
    ROZI INTERNATIONAL (PVT. LIMITED) is an Importers, Exporters and Whole
    sellers of Raw Herbs, Natural Gums, Spices, Dry Fruits, Salts, Essential
    Oils and Extracts, Basmati Rice, Grains and Pulses. Headquartered in Lahore,
    Pakistan
  </h5>
  <p>
    You will find finest quality basmati Rice, himalayan rock salt, licorice
    roots, botanical herbs and plant based raw materials, gums and resins like
    guggal, gum aloe, opoponax, dragon blood, Licorice extract, rose flowers,
    frankincense, myrrh resin and essential oils. We also carry flavored carrier
    oils, handmade soaps, 100% vegan candles, mother of pearl shells, red coral
    stone, spices and dried fruits. Our products are used in industries like
    pharma, extract, orthodox diocese, ayurveda, cosmetic, confectionery, food
    and beverage. You can view complete list of products at <br />
  </p>{" "}
  {/* <h2>Rozi International Limited is the supplier of specialty food, natural products and functional ingredients.
   */}
</div>

          <Link to="/company" className="boxed-btn mt-4">
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Advertisement