import React, { useContext } from 'react';
import {Link} from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// components
import { sliceText , isInCart , quantityCount} from '../Helper/function';

// contexts
import { cartContext } from '../../Contexts/CartContextProvider';

// icon
import trash from "../../assets/icons/trash.svg";

// styles
import styles from "../../styles/Product.module.css";

const Product = ({productData}) => {

    const {state , dispatch} = useContext(cartContext);

    const notify1 = () => toast.info('Added Successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });

    const notify2 = () => toast.info('Removed Product!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        });

    return (
        <div className={styles.container}>
            <img className={styles.productImg} src={productData.image} alt="img"/>
            <h3>{sliceText(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.links}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={styles.buttons}>
                    {quantityCount(state , productData.id) === 1 && <button className={styles.removeItem}  onClick={() =>{notify2(); dispatch({type: "REMOVE_ITEM" , payload: productData})}}><img src={trash} alt="trash" style={{width: "20px"}}/></button>}
                    {quantityCount(state , productData.id) > 1 && <button className={styles.decrease} onClick={() => dispatch({type: "DECREASE" , payload: productData})}>-</button>}
                    {quantityCount(state , productData.id) > 0 && <span className={styles.quantity}>{quantityCount(state , productData.id)}</span>}

                    {
                        isInCart(state , productData.id) ?
                        <button className={styles.increase} onClick={(e) => dispatch({type: "INCREASE" , payload: productData})}>+</button> :
                        <button className={styles.addItem} onClick={() => {notify1(); dispatch({type: "ADD_ITEM" , payload: productData})}}>add to cart</button>
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Product;