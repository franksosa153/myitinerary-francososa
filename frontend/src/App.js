import{ Routes, Route} from 'react-router-dom'
import React from 'react';
import Home from './pages/home'
import Cities from './pages/cities'
import ElementoSinProps from './pages/Elemento'
import {withRouter} from './utils/withRouter'

const Elemento = withRouter(ElementoSinProps)

const App=()=>{  
  
  return (
    
    
    
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/:endpoint/:id" element={<Elemento />} />
      </Route>
      </Routes>
     
    
  );
}

export default App;
