import React , {useContext} from 'react';
import styles from "../styles/Store.module.css";

// components
import Product from './Shared/Product';

// contexts
import { productContext } from '../Contexts/ProductContextProvider';

const Store = () => {

    const products = useContext(productContext);

    return (
        <div className={styles.container}>
            {products.map(product => <Product key={product.id} productData={product}/>)}
        </div>
    );
};

export default Store;