import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import SubCategoryData from '../Data/SubCategoryData';
import SubCategoryCards from '../Cards/SubCategoryCards';
import Slogans from '../Home/Slogans';
function SubCategories() {
    let catg=useParams();
    const[subcatdata,setSubCatData]=useState(SubCategoryData)
  
    
    
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
    <div className="product-section mt-150 mb-150">
       <div className="container">
          <div className="row " >
          {
              subcatdata.map((data)=>(
                data.cat_name===catg.category ?
               <SubCategoryCards
                   key={data.id}
                   sub_cat_name={data.sub_Cat_name}
                   name={data.scname}
                   imgPath={data.imgPath}
               /> : ''
               ))
          }
          
             
         </div>
       </div>
    </div>
    <Slogans/>
    </>
  )
}

export default SubCategories