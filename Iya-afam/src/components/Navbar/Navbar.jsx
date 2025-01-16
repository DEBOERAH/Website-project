import {useState} from 'react';
import {IoMdSearch} from "react-icons/io";
import {RxHamburgerMenu} from "react-icons/rx";
import {FaCartShopping} from "react-icons/fa6";
import {MdOutlinePerson} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MenuLinks = [
    {id: 1, name: "Home", link: "/home"},
    {id: 2, name: "Shop", link: "/shop"},
    {id: 3, name: "About us", link: "/#"},
    {id: 4, name: "Contact us", link: "/#"},
];

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };


    return (
        <div className="bg-white duration-200 sticky top-0 z-50">
            <div className="py-4">
                <div className="container mx-auto px-2 flex justify-between items-center ">
                    {/* Logo and Navbar */}
                    <div className="flex items-center justify-between lg:justify-start lg:gap-4">
                        {/* Logo */}
                        <a
                            href="/home"
                            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-1xl"
                        >
                            IyaAfam
                        </a>

                        {/* Navbar Items (hidden on small screens) */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-500 hover:text-black"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>


                    </div>
                    {/*Search Bar & Cart Icon*/}
                    <div className="flex items-center gap-2">
                        {/*Search Bar*/}
                        <div className="relative group sm:block">
                            <input type="text" placeholder="Search" className="search-bar"/>
                            <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary absolute top-1/2 -translate-y-1/2
                            right-3 duration-200"/>
                        </div>
                        {/*Cart Icon*/}
                        <button className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600"/>
                            <div
                                className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-x5">
                                4
                            </div>
                        </button>
                        <div></div>
                        {/* Hamburger Menu (visible on small screens) */}
                        <button onClick={goToLogin}>
                            <MdOutlinePerson className="text-3xl text-gray-600" />
                        </button>
                        <button
                            className="lg:hidden text-2xl focus:outline-none"
                            onClick={toggleDrawer}
                        >
                            <RxHamburgerMenu/>
                        </button>


                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                    onClick={toggleDrawer} // Close drawer when clicking outside
                >
                    <div
                        className="w-64 bg-white h-full p-6 shadow-lg transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the drawer
                    >
                        <button
                            className="text-gray-700 text-xl mb-6 focus:outline-none"
                            onClick={toggleDrawer}
                        >
                            ✕ Close {/* Close Icon */}
                        </button>

                        <ul className="flex flex-col gap-4">
                            {MenuLinks.map((data, index) => (
                                <li key={index}>
                                    <a
                                        href={data.link}
                                        className="inline-block px-4 font-semibold text-gray-500 hover:text-black"
                                        onClick={toggleDrawer} // Close drawer on navigation
                                    >
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
