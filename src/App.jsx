import HomeMain from "./components/Home/HomeMain"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductMain from "./components/Product/ProductMain";
import ContactMain from "./components/Contact/ContactMain";
function App() {


  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomeMain />} />
            <Route path="/product" element={<ProductMain />} />
            <Route path="/contact" element={<ContactMain />} />

          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
