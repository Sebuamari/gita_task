import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../styles/App.scss';
import Header from '../components/Header';
import Products from "./Products";
import Customers from "./Customers";
import Orders from "./Orders";
import Reports from "./Reports";

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
        <footer>
          &copy; 2022 - Online Shop Admin - <Link href="#">Privacy</Link>
        </footer>
      </Router>
    </div>
  );
}

export default App;
