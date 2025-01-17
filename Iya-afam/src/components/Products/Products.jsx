
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


// import required modules
import {Autoplay} from 'swiper/modules';

import {ShopContext} from "../";
import {useContext, useEffect, useState} from "react";

const Products = () => {


    const {products} = useContext(ShopContext);

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const data = products.slice(0,7);
        setPopularProducts(data)
    }, []);
    return (
        <section className="mt-14 mb-12">
            <div className="container">
                {/*Header section*/}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="rext-sm text-primary">Top Selling Products</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold ">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">Our best sellers with highly affordable
                        prices from your
                        favourite producers</p>
                </div>
                {/*Body Section*/}
                <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        300: {
                            slidesPerView:2,
                            spaceBetween: 10,
                            centeredSlides: false
                        },
                        666: {
                            slidesPerView:3,
                            spaceBetween: 30
                        },
                        900: {
                            slidesPerView:4,
                            spaceBetween: 30,
                            centeredSlides: false
                        },
                        1300: {
                            slidesPerView:5,
                            spaceBetween: 30
                        },

                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="h-[399px] mt-5"
                >
                    {popularProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                           <div>
                               <ProductCard product={product}/>
                           </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        
        {/* Rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
               popularProducts.map((products,index) =>(
                   <productItem key={index} id={products._id} image={products.image} name={products.name} price={products.price}/>
                   
               ))
            }
        </div>
        </section>
    )
}
export default Products


// < div >
// < div
// className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5" >
//     {/*card section*/}
// {
//     ProductsData.map((item) => (
//         <div
//             data-aos="fade-up"
//             data-aos-delay={item.aosDelay}
//             key={item.id} className="space-y-3">
//             <img src={item.img} alt="Products"
//                  className="h-[220px] w-[150px] object-cover rounded-md"/>
//             <div>
//                 <h3 className="font-semibold">{item.title}</h3>
//             </div>
//         </div>
//
//     ))
// }
// </div>
// </div>