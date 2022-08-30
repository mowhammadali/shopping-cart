import React , {useState , useEffect} from 'react';
import {getProduct} from "../Services/Api";

export const productContext = React.createContext();

const ProductContextProvider = ({children}) => {

    const [product , setProduct] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            setProduct(await getProduct());
        }

        fetchApi();
    } , [])


    return (
        <productContext.Provider value={product}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;