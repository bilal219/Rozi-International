import React from 'react'
import {Routes,Route} from 'react-router-dom'

//Pages Components
import Home from './Home'
import BotentialName from './BotentialName'
import Company from './Company'
import Complainces from './Complainces'
import ContactUs from './ContactUs'
import Events from './Events'
import Products from './Products'
import NotFound from './NotFound'
import SingleProductPage from '../Products/SingleProductPage'
import SubCategories from '../Products/SubCategories'
import CatProducts from '../Products/CatProducts'

function Pages() {
  return (
   <Routes>
       <Route path='/' exact element={<Home/>}/>
       <Route path='/botentialname' exact element={<BotentialName/>}/>
       <Route path='/company' exact element={<Company/>}/>
       <Route path='/complainces' exact element={<Complainces/>}/>
       <Route path='/contactus' exact element={<ContactUs/>}/>
       <Route path='/events' exact element={<Events/>}/>
       <Route path='/products' exact element={<Products/>}/>
       <Route path='/singleproduct/:code' exact element={<SingleProductPage/>}/>
       <Route path='/subcategories/:category' exact element={<SubCategories/>}/>
       <Route path='/catproducts/:sub_Cat_name' exact element={<CatProducts/>}/>
       <Route path='*' exact element={<NotFound/>}/>
   </Routes> 
  )
}

export default Pages