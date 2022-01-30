import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
import SingupScreen from './screens/SingUpScreen';
import LoginScreen from './screens/LoginScreen';
import Footer from './screens/Footer';
import AboutUss from './screens/About us';


// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer'

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/SingUp" element={<SingupScreen/>} />
          <Route exact path="/login" element={<LoginScreen/>}/>
          <Route exact path="/about-us" element={<AboutUss/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
