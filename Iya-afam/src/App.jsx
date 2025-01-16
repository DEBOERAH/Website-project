import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Drinks from "./components/Drinks/Drinks.jsx";
// import Frozenfood from "./components/FrozenFood/Frozenfood.jsx";
import Kerosene from "./components/Kerosene/Kerosene.jsx";
import Shop from "./pages/Shop.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App() {
    return (<main>
            <Router>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/Drinks" element={<Drinks/>}/>
                    {/* <Route path="/FrozenFood" element={<Frozenfood/>}/> */}
                    <Route path="/Kerosene" element={<Kerosene/>}/>
                </Routes>
                <Footer/>
            </Router>
        </main>

    )
}