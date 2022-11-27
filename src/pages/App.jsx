import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.scss';
import Header from '../components/Header';
import Products from "./Products";
import Customers from "./Customers";
import Orders from "./Orders";
import Reports from "./Reports";
import Product from '../components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/Customers" element={<Customers />} />
          <Route exact path="/Orders" element={<Orders />} />
          <Route exact path="/Reports" element={<Reports />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
