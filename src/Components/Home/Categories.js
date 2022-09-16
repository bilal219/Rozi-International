import React, { useState } from 'react'
import CategoryCards from '../Cards/CategoryCards'
import Pagination from '../Pagination/Pagination'
import CategoryData from '../Data/CategoryData'
function Categories() {
  const [cardsdata,setCardsdata]=useState(CategoryData)
  const[pagenumber,setPagenumber]=useState(0)
  const filteritem=(catitems)=>{
    const updateditems=CategoryData.filter((curelem)=>{
           return curelem.category === catitems
    })
    setCardsdata(updateditems);
    setPagenumber(1);
   
  }
  const [showperpage,setShowPerPage]=useState(9);
  
  const [pagination,setPagination]=useState({
    start:0,
    end:showperpage,
    
  })
  const onpaginationchange=(start,end)=>{
   setPagination({start:start,end:end});
  };

  
//   function catCards(val)
//   {
//     return(
// <CategoryCards 
//        cname={val.cname}
//        imgpath={val.imgpath}
//        price={val.price}
//      />
//     )
//   }
  return (
    <>
    
    <div className="product-section mt-80 mb-80">
   
    <center>
    <h2 className="pb-5">
           OUR<span className="orange-text"> PRODUCTS</span>
    </h2>
   </center>
  
   
  <div className="container">
    {/* <div className="row">
      <div className="col-md-12">
        <div className="product-filters">
          <ul>
            <li className="active" data-filter="*" onClick={()=>(setCardsdata(CategoryData),setPagenumber(0))}>
              All
            </li>
            <li data-filter=".herbs" onClick={()=>filteritem('herbs')}>HERBS</li>
            <li data-filter=".spices" onClick={()=>filteritem('spices')}>SPICES</li>
            <li data-filter=".dryfruits" onClick={()=>filteritem('dryfruits')}>DRY FRUITS</li>
            <li data-filter=".oils" onClick={()=>filteritem('oils')}>OILS & ECTRACTS</li>
            <li data-filter=".gums" onClick={()=>filteritem('gums')}>GUMS</li>
            <li data-filter=".grains" onClick={()=>filteritem('grains')}>RICE,GRAINS AND PULSES</li>
            <li data-filter=".salt" onClick={()=>filteritem('salt')}>SALT AND VINEGARS</li>
            <li data-filter=".murabbas" onClick={()=>filteritem('murabbas')}>MURRABAS </li>
            <li data-filter=".minerals" onClick={()=>filteritem('minerals')}>MINERALS</li>
          </ul>
        </div>
      </div>
    </div> */}
    <div className="row " >

    {cardsdata.slice(pagination.start,pagination.end,pagination.pagenumber).map((data)=>(
     
      <CategoryCards 
       key={data.id}
       category={data.category}
       cname={data.cname}
       imgpath={data.imgpath}
      />
    ))
    }
      
    </div>
   {/* <Pagination showperpage={showperpage} onpaginationchange={onpaginationchange} total={cardsdata.length} pagenumber={pagenumber}/> */}
   
  </div>
</div>
</>
  )
}

export default Categories