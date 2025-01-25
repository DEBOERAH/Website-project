import { useContext, useState, useEffect } from 'react';
import React from 'react';
import { ShopContext } from '../context/ShopContext .jsx';
import Dropdown from "../assets/Images/Dropdown.png"
import Title from '../components/Title.jsx';
import ProductItem from '../pages/ProductItem.jsx';

const Shop = () => {
    const { products } = useContext(ShopContext);
    const [showFilter, setshowFilter] = useState(false);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setsubCategory] = useState([]);
    const [sortType, setSortType] = useState("All")


    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            setCategory(prev => [...prev, e.target.value]);
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setsubCategory(prev => prev.filter(item => item !== e.target.value));
        }
        else {
            setsubCategory(prev => [...prev, e.target.value]);
        }
    }

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
        }


        setfilteredProducts(productsCopy);
    }



    const sortProduct = () => {
        let fpCopy = filteredProducts.slice();

        switch (sortType) {
            case "Low to High":
                setfilteredProducts(fpCopy.sort((a, b) => (a.price - b.price)))
                break;

            case "High to Low":
                setfilteredProducts(fpCopy.sort((a, b) => (b.price - a.price)))

                break;

            default:
                applyFilter();
                break;

        }

    }


    useEffect(() => {
        setfilteredProducts(products);
    }, [])

    useEffect(() => {

        applyFilter();
    }, [category, subCategory])

    useEffect(() => {

        sortProduct();
    }, [sortType])



    return (
        <div className='container mx-auto px-2 sm:px-0 '>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                {/* filter Option */}
                <div className='min-w-60'>
                    <p onClick={() => setshowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                        <img src={Dropdown} alt="" className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} />
                    </p>
                    {/* Category Filter */}
                    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-black'>
                            <p className="flex gap-2">
                                <input type="checkbox" className='w-3' value={"FrozenFood"} onChange={toggleCategory} /> Frozenfood
                            </p>
                            <p className="flex gap-2">
                                <input type="checkbox" className='w-3' value={"SoftDrink"} onChange={toggleCategory} /> Soft Drinks
                            </p>
                            <p className="flex gap-2">
                                <input type="checkbox" className='w-3' value={"Water"} onChange={toggleCategory} /> Water
                            </p>

                        </div>


                    </div>
                    {/* subCategory filter */}
                    <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? " " : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-black'>
                            <p className="flex gap-2">
                                <input type="checkbox" className='w-3' value={"Discount"} onChange={toggleSubCategory} /> Discount
                            </p>
                            <p className="flex gap-2">
                                <input type="checkbox" className='w-3' value={"Bestseller"} onChange={toggleSubCategory} /> BestSeller
                            </p>


                        </div>


                    </div>


                </div>
                {/* right side */}
                <div className='flex-1'>
                    <div className='flex justify-between  text-base sm:text-2xl mb-4'>
                        <Title text1={"All"} text2={"Products"} />
                        {/* product sort */}
                        <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-700 text-sm px-2'>
                            <option value="All"> Sort By: All</option>
                            <option value="Low to High"> Sort By: Low to High</option>
                            <option value="High to Low"> Sort By: High to Low</option>
                        </select>

                    </div>
                    {/* map products */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                        {
                            filteredProducts.map((item, index) => (
                                <ProductItem key={index}
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />

                            ))
                        }

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Shop