import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'

// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
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
