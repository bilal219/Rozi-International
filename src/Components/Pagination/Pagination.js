import React, { useState ,useEffect} from "react";
const Pagination=({showperpage,onpaginationchange,total})=>{
   
    
    const[count,setCount]=useState(1);
    const[pagenumberlimit,setPageNumberLimit]=useState(5);
    const[maxpageNumberLimit,setMaxPageNumberLimit]=useState(5);
    const[minpageNumberLimit,setMinPageNumberLimit]=useState(0);
    
    useEffect(()=>{
       // console.log(count);
       const value=count * showperpage
       onpaginationchange(value-showperpage ,value)
      
            },[count])
      
       
       

      
       const onbuttonClick=(type)=>{
           if(type==='prev'){
               if(count===1)
               {
                 setCount(1);
               }
               else{
                 setCount(count-1)
               }
               if((count)%pagenumberlimit===0)
               {
                setMaxPageNumberLimit(maxpageNumberLimit -pagenumberlimit);
                setMinPageNumberLimit(minpageNumberLimit-pagenumberlimit);
               }

           }else if(type==='next')
           {
               if(Math.ceil(total/showperpage)===count)
               {
                   setCount(count);
               }
               else{

                   setCount(count +1);
               }
               if(count+1 > maxpageNumberLimit)
               {
                   setMaxPageNumberLimit(maxpageNumberLimit +pagenumberlimit);
                   setMinPageNumberLimit(minpageNumberLimit+pagenumberlimit);
               }
           }
          
       }
      
       
return(
    <div className="row">
				<div className="col-lg-12 text-center">
					<div className="pagination-wrap">
						<ul>
							<li><a onClick={()=>onbuttonClick("prev")}>Prev</a></li>
							
							{
                               
                                new Array(Math.ceil(total/showperpage)).fill("").map((el,index)=>{
                                    
                                    if((index+1) < maxpageNumberLimit+1 && (index + 1) > minpageNumberLimit)
                                {
                                    return(
                                    <li key={index+1}><a className={`${index+1===count?"active":null}`} onClick={()=>setCount(index+1)}>{index +1}</a></li>
                                    )
                                }else{
                                    return null;
                                }
                               
                                })
                            }
							<li><a onClick={()=>onbuttonClick("next")}>Next</a></li>
						</ul>
					</div>
				</div>
			</div>
)
}
export default Pagination;