import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer'

function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle}/>
      <Backdrop show={sideToggle}/>
      <main>
        <Routes>
          <Route exact path="/homescreen" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cartscreen" component={CartScreen}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
