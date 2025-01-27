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
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Cart from "./pages/Cart.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";


export default function App() {
    return (<main>
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
                <Router>
                <ToastContainer/>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/Shop" element={<Shop/>}/>
                    <Route path="/Drinks" element={<Drinks/>}/>
                    <Route path="/Contactus" element={<Contactus/>}/>
                    <Route path="/ProductInfo/:ProductId" element={<ProductInfo/>}/>
                    <Route path="/Cart" element={<Cart/>}/>

                    {/* <Route path="/FrozenFood" element={<Frozenfood/>}/> */}
                    <Route path="/Kerosene" element={<Kerosene/>}/>
                </Routes>
                <Footer/>
            </Router>
            </div>
        </main>

    )
}