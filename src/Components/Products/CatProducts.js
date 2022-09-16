import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Productsdata from '../Data/Productsdata'
import ProductCard from '../Cards/ProductCard'
import Pagination from '../Pagination/Pagination'
function CatProducts() {
  let subcat=useParams()
  const[productdata,setProductData]=useState(Productsdata)
  let filterprods=productdata.filter((items)=>items.sub_cat_name===subcat.sub_Cat_name)
  const[pagenumber,setPagenumber]=useState(0)
  const [showperpage,setShowPerPage]=useState(6);
  const [pagination,setPagination]=useState({
    start:0,
    end:showperpage,
    
  })
  const onpaginationchange=(start,end)=>{
   setPagination({start:start,end:end});
  };
  useEffect(()=>{
 setProductData(filterprods)
  },filterprods)
  
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
         
             {productdata.slice(pagination.start,pagination.end,pagination.pagenumber).map((prod)=>(
            
              <ProductCard
              key={prod.id}
              id={prod.id}
              code={prod.code}
              name={prod.english_name}
              img={prod.imagePath}
              />
              
             ))}
          </div>
          <Pagination showperpage={showperpage} onpaginationchange={onpaginationchange} total={productdata.length} pagenumber={pagenumber}/>
        </div>
    </div>
    </>
  )
}

export default CatProducts