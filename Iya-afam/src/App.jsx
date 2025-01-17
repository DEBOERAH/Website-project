import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Drinks from "./components/Drinks/Drinks.jsx";
// import Frozenfood from "./components/FrozenFood/Frozenfood.jsx";
import Kerosene from "./components/Kerosene/Kerosene.jsx";
import Shop from "./pages/Shop.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contactus from "./pages/Contactus.jsx";
import Product from "./pages/productItem.jsx";
import Cart from "./pages/Cart.jsx";


export default function App() {
    return (<main>
            <Router>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/Drinks" element={<Drinks/>}/>
                    <Route path="/Contactus" element={<Contactus/>}/>
                    <Route path="/Product/:ProductId" element={<Product/>}/>
                    <Route path="/Cart" element={<Cart/>}/>

                    {/* <Route path="/FrozenFood" element={<Frozenfood/>}/> */}
                    <Route path="/Kerosene" element={<Kerosene/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>

    )
}