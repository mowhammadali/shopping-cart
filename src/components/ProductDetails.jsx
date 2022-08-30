import React, { useContext , useEffect, useState } from 'react';
import {useParams , Link} from "react-router-dom";

// contexts
import { productContext } from '../Contexts/ProductContextProvider';

// styles 
import styles from "../styles/Details.module.css";

import { getProduct } from '../Services/Api';

const ProductDetails = () => {
    
    const {id} = useParams();

    const data = useContext(productContext);
    const product = data[id - 1];
    
    const {image , title , description , category , price} = product;

    return (
        <div className={styles.container}>
            <img src={image} alt='product'/>
            <div className={styles.info}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span style={{color: "#e7bb0b", fontWeight: "bold"}}>Category: </span> {category}</p>
                <div className={styles.buttons}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;