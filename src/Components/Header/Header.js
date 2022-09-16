import Carousel from './Carousel'
import Navbar from './Navbar'
import Breadcrumspic from './Breadcrumspic'
import { useLocation } from 'react-router-dom'
function Header() {
  const {pathname}=useLocation()
  return ( 
   <>
    <Navbar/>
    {
      pathname ==="/" ?<Carousel/>:""
      
    }
    
   </>
  )
}

export default Header