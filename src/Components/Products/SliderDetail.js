import React, { useEffect } from 'react'
import { ImageGallery } from 'react-image-gallery'
import './style.css'
function SliderDetail(props) {
    
  return (
    <div class="col-md-5">
   <div className='container' style={{marginBottom:120}}>
       <div className="">
    <div className="row">
      <div className="col-md-12">
        <div
          id="custCarousel"
          className="carousel slide"
          data-ride="carousel"
          align="center"
        >
          {/* slides */}
          <div className="carousel-inner">
            <div className="carousel-item active">
             
              <img src={props.image1} alt="Products" />
            </div>
            <div className="carousel-item">
              {" "}
              <img src={props.image2} alt="Products" />{" "}
            </div>
            <div className="carousel-item">
              {" "}
              <img src={props.image3} alt="Products" />{" "}
            </div>
          
          </div>
          {/* Left right */}{" "}
          <a
            className="carousel-control-prev"
            href="#custCarousel"
            data-slide="prev"
            style={{color:"gray"}}
          >
            {" "}
            <span className="carousel-control-prev-icon" />{" "}
          </a>{" "}
          <a
            className="carousel-control-next"
            href="#custCarousel"
            data-slide="next"
            style={{color:"gray"}}
          >
            {" "}
            <span className="carousel-control-next-icon" />{" "}
          </a>{" "}
          {/* Thumbnails */}
          <ol className="carousel-indicators list-inline">
            <li className="list-inline-item active">
              {" "}
              <a
                id="carousel-selector-0"
                className="selected"
                data-slide-to={0}
                data-target="#custCarousel"
              >
               
                <img
                  src={props.image1}
                  className="img-fluid"
                />{" "}
              </a>{" "}
            </li>
            <li className="list-inline-item">
              {" "}
              <a
                id="carousel-selector-1"
                data-slide-to={1}
                data-target="#custCarousel"
              >
                {" "}
                <img
                  src={props.image2}
                  className="img-fluid"
                />{" "}
              </a>{" "}
            </li>
            <li className="list-inline-item">
              {" "}
              <a
                id="carousel-selector-2"
                data-slide-to={2}
                data-target="#custCarousel"
              >
                {" "}
                <img
                  src={props.image3}
                  className="img-fluid"
                />{" "}
              </a>{" "}
            </li>
           
          </ol>
        </div>
        </div>
        </div>
  </div>
  
    </div>
</div>
   
   
  
        //   <ImageGallery items={images}/>
   
  )
}

export default SliderDetail