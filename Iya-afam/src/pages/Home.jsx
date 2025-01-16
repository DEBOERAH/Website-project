import Hero from "../components/Hero/Hero.jsx";
import SubHero from "../components/subHero/SubHero.jsx";
import Products from "../components/Products/Products.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";


const Home = () => {
    useEffect(() => {
        AOS.init({
            offset:100,
            duration:800,
            easing:"ease-in-sine",
            delay:100
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <Hero/>
            <SubHero />
            <Products/>

        </div>
    )
}
export default Home
