import { createContext, useEffect } from "react";
import { products } from "../assets/data.js";
import { useState } from "react";
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₦";
    const delivery_Fee = 500;
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemid, quantity) => {
      if (!quantity) {
          toast.error("select quantity");
          return;
      }


        let cartData = structuredClone(cartItems);

        if (cartData[itemid]) {
            if (cartData[itemid][quantity]) {
                cartData[itemid][quantity] += 1;
            }
            else {
                cartData[itemid][quantity] = 1
            }

        }
        else {
            cartData[itemid] = {}

            cartData[itemid][quantity] = 1;
        }
        setCartItems(cartData)
    }
   
    const getCartCount = () => {
        let totalCount = 0;
        
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try{
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                  
                }

            }
        }

        return totalCount;


    }


    const Value = {
        products,
        currency,
        delivery_Fee,
        cartItems, addToCart,getCartCount



    }

    return (
        <ShopContext.Provider value={Value}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider
