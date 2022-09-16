

import {BrowserRouter as Router} from 'react-router-dom'
import Pages from './Components/Body/Pages';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PreLoader from './Components/Header/PreLoader';
import Scrolltotop from './Components/Body/Scrolltotop';
function App() {
  return (  
   <Router>
     <div>
        <Scrolltotop>
          <PreLoader/>
          <Header/>
          <Pages/> 
          <Footer/>
        </Scrolltotop>
     </div>
   </Router>  
  );
}

export default App;
