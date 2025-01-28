import  { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext ';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: Number(items), // ✅ Convert string ID to number
            quantity: item,
            total: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1='Your' text2='Cart' />
      </div>

      <div>
        {cartData.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product.id === item.id); // ✅ Fixed ID matching

            return (
              <div
                key={index}
                className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center'
              >
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData?.img} alt={productData?.name || "Product"} />
                </div>
                <p className='text-xs sm:text-lg font-medium'>
                  {productData?.name || "Unknown Product"}
                </p>
                <p className='text-xs sm:text-lg'>
                  {currency}
                  {productData?.price || 0} × {item.total} × {item.quantity} = {currency}
                  {(productData?.price || 0) * item.total * (parseInt(item.quantity) || 1)}
                </p>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
