import { createContext } from "react";
import {products} from "../assets/data.js";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "₦";
    const delivery_Fee = 500;

    const Value={
        products,
        currency,
        delivery_Fee



    }

    return (
        <ShopContext.Provider value={Value}>
            {props.children}
        </ShopContext.Provider>
    )


}

export default ShopContextProvider
