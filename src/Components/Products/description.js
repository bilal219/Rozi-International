import React from 'react'

function description(props) {
  return (
    <div className="col-md-7">
    <div className="single-product-content mt-1">
      <h3>{props.english_name}</h3>
      <p className="single-product-pricing">
        <span>Code :</span> {props.code}
      </p>
      <p>
       {props.description}
      </p>
      <div className="single-product-form">
       
        <p>
          <strong>English Name: </strong>{props.english_name} <br/>
          <strong>Botenical Name: </strong>{props.botenical_name}<br/>
          <strong>Local Name: </strong>{props.local_name}<br/>
          <strong>Chinese Name: </strong>{props.chns_name}
        </p>
      </div>
      
     
    </div>
  </div>
  )
}

export default description