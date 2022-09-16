import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Productsdata from '../Data/Productsdata';
import SliderDetail from './SliderDetail';
import Description from './description';

function SingleProductPage() {
  const params=useParams();
 
  const[Prodata,setProdata]=useState(Productsdata)
 
 
 
   return (
       <>
       <div className="breadcrumb-section breadcrumb-bg4" >
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
    <div className="single-product mt-150 mb-150">
    <div className="container">
      <div className="row">
     {Prodata.filter((items)=>items.code===params.code).map((prods)=>(
      
       
       <>
      
         <SliderDetail 
        
           image1={prods.imagePath}
           image2={prods.img2}
           image3={prods.img3}
        
         />
         
         <Description
        
         english_name={prods.english_name}
           code={prods.code}
           description={prods.description}
           chns_name={prods.chniese_name}
           local_name={prods.local_name}
           botenical_name={prods.botenical_name}
           category={prods.Cat_name}
           sub_cat={prods.sub_cat_name}
         />

       </>
       
      
     )
       
     )}
      
      </div>
    </div>
  </div>
  </>
  )
}

export default SingleProductPage