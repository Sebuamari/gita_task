import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../styles/App.scss';
import Header from '../components/Header';
import Products from "./Products";
import Customers from "./Customers";
import Orders from "./Orders";
import Reports from "./Reports";
import Edit from "./Edit";
import Delete from "./Delete";
import CreateNewProduct from "./CreateNewProduct";
import { DataProvider } from "../Context/DataContext"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <DataProvider>
          <Routes>
            <Route exact path="/App" element={<Products />} />
            <Route exact path="/Customers" element={<Customers />} />
            <Route exact path="/Orders" element={<Orders />} />
            <Route exact path="/Reports" element={<Reports />} />
            <Route exact path="/Edit" element={<Edit />} />
            <Route exact path="/Delete" element={<Delete />} />
            <Route
              exact
              path="/CreateNewProduct"
              element={<CreateNewProduct />}
            />
          </Routes>
        </DataProvider>
        <footer>
          &copy; 2022 - Online Shop Admin - <Link href="#">Privacy</Link>
        </footer>
      </Router>
    </div>
  );
}

export default App;
