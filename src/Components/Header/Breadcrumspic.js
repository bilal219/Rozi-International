import React, { useState } from 'react'
import BreadcrumsData from '../Data/BreadcrumsData'
function Breadcrumspic(props) {
  const[bdata,setBdata]=useState(BreadcrumsData)
  
  return (
      <>
{
  bdata.filter((filterdata)=>filterdata.path===props.name).map((data)=>(

    <div className={`breadcrumb-section ${data.imgpath}`}>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2 text-center">
        <div className="breadcrumb-text">
          <p>{data.Slogon}</p>
          <h1>{data.Name}</h1>
        </div>
      </div>
    </div>
  </div>
</div>
  ))
}


      </>

  )
}

export default Breadcrumspic