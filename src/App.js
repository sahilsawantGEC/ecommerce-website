import './App.css';

import {Navbar} from './components/navbar'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';

function App() {
  return(
    
  <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
