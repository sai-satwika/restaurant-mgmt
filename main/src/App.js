import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin"
import AddItem from "./pages/AddItem"
import EditItem from "./pages/EditItem"
import Card from "./pages/Card"
import Navbar from "./pages/Navbar"

function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/EditItem" element={<EditItem />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
