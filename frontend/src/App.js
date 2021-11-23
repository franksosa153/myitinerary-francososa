import{browserRouter, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Citis from './pages/citis'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/citis" element={<Citis/>}/>
      </Route>
      </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
