import React from 'react'
//import Breadcrumspic from './Breadcrumspic'
function ContactUs() {
  return (
    <>
    <div className="breadcrumb-section breadcrumb-bg5" >
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="breadcrumb-text">
          <p>We sale fresh items</p>
          <h1>CONTACT US</h1>
        </div>
      </div>
    </div>
  </div>
</div>
    <div className="contact-from-section mt-80 mb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
              <h2>Have you any question?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                esse natus!
              </p>
            </div>
            <div id="form_status" />
            <div className="contact-form">
              <form
                type="POST"
                id="fruitkha-contact"
                onsubmit="return valid_datas( this );"
              >
                <p>
                  <input type="text" placeholder="Name" name="name" id="name" />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                  />
                </p>
                <p>
                  <input type="tel" placeholder="Phone" name="phone" id="phone" />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                  />
                </p>
                <p>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    defaultValue={""}
                  />
                </p>
                <input type="hidden" name="token" defaultValue="FsWga4&@f6aw" />
                <p>
                  <input type="submit" defaultValue="Submit" />
                </p>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-wrap">
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-map" /> Shop Address
                </h4>
                <p>
                Rozi Ineternational(Pvt. Ltd),
                Feroz Wala Road Tower Street,
                <br /> Gujranwala, <br /> Pakistan.
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="far fa-clock" /> Shop Hours
                </h4>
                <p>
                  MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-address-book" /> Contact
                </h4>
                <p>
                  Phone: +92 42 37379067 <br /> Email: info@roziinternational.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* end contact form */}
    {/* find our location */}
    <div className="find-location blue-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p>
              {" "}
              <i className="fas fa-map-marker-alt" /> Find Our Location
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* end find our location */}
    {/* google map section */}
    <div className="embed-responsive embed-responsive-21by9">
      <iframe
        src="https://maps.google.com/maps?q=Feroz%20Wala%20Road%20Gujranwala%20Pakistan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen=""
        className="embed-responsive-item"
        title='grwlocation'
      />
    </div>
  </>
  
  )
}

export default ContactUs