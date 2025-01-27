import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext ';
import star from '../assets/Images/star.png';
import dullstar from '../assets/Images/dullstar.png';


const ProductInfo = () => {
    const { ProductId } = useParams();
    const { products, currency,addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find((item) => item.id.toString() === ProductId);
            if (foundProduct) {
                setProductData(foundProduct);
                console.log("Found Product:", foundProduct);
            } else {
                console.log("Product not found!");
            }
        }
    }, [ProductId, products]);

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* left and right sections */}
            <div className='flex flex-col sm:flex-row sm:gap-8 lg:gap-12'>
                {/* left section (image) */}
                <div className='flex-1 flex justify-center p-4 sm:p-6'>
                    <img
                        className='w-full max-w-md md:max-w-lg lg:max-w-xl h-96 object-cover rounded-lg shadow-md'
                        src={productData.img}
                        alt={productData.name || "Product Image"}
                    />
                </div>
                {/* right section (text) */}
                <div className='flex-1 flex flex-col justify-between sm:justify-start lg:h-full sm:mt-4 lg:mt-0'>
                    <h1 className='font-medium text-2xl'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={star} alt="" className='w-3 5' />
                        <img src={star} alt="" className='w-3 5' />
                        <img src={star} alt="" className='w-3 5' />
                        <img src={star} alt="" className='w-3 5' />
                        <img src={dullstar} alt="" className='w-3 5' />
                        <p>(4.9)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-black-500'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='font-medium'>Select Quantity</p>
                        <div className='flex gap-2'>
                            {
                                productData.quantity.map((item, index) => (
                                    <button onClick={() => setQuantity(item)} className={`border py-2 px-4 bg-gray-100 ${item === quantity ? 'bg-[#F42C5D] text-white' : ''} `} key={index}>{item}</button>
                                ))
                            }

                        </div>

                    </div>
                    <button  onClick= {()=>addToCart(productData.id,quantity)} className='bg-[#F42C5D] text-white  px-8 py-3  text-sm active:bg-gray-700 w-40'>ADD TO CART</button>
                    <hr className=' mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>

                        <div className="text-center leading-relaxed">
                            <p className="font-medium mb-2">100% guaranteed freshness for all frozen foods.</p>
                            <p className="font-medium mb-2">Original taste for all soft drinks.</p>
                            <p className="text-red-600 font-semibold">No returns, no refunds.</p>
                        </div>


                    </div>
                </div>
            </div>

            {/* Description and reviews */}
            <div className='mt-20'>  
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description </b>

                    <p className='border px-5 py-3 text-sm'>Reviews ()</p>

                </div>
                <div className='flex flex-col gap-4 border px-6 py6 text-sm text-gray-900'>
               <p>Ordered a mix of frozen foods and soft drinks for a family gathering. Everything was as described, and the drinks were authentic. Will be ordering again!</p>
                <p>The frozen chicken and fish I bought were top-quality. Once cooked, you’d never guess they were frozen. Highly recommend!</p>

                </div>

               
                



            </div>
        </div>



    ) : <div className='opacity-0'></div>;
}

export default ProductInfo;
