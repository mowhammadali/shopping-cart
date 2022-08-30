import Reac , { useContext } from 'react';
import {Link} from "react-router-dom";

// components
import Cart from './Cart';

// contexts
import { cartContext } from '../Contexts/CartContextProvider';

// styles
import styles from "../styles/ShopCart.module.css";

const ShopCart = () => {
    const {state , dispatch } = useContext(cartContext);

    return (
        <div className={styles.container}>
            <div className={styles.carts}>
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            <div className={styles.actions}>
                {
                    state.itemCounter > 0 &&
                    <div className={styles.factor}>
                        <p><span style={{color: "#0a74df" , fontWeight: "bold"}}>Total Items:</span> {state.itemCounter}</p>
                        <p><span style={{color: "#0a74df" , fontWeight: "bold"}}>Total Payments:</span> {state.total}</p>
                        <div className={styles.buttons}>
                            <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                            <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                        </div>
                    </div>
                }

                {
                    state.checkout && 
                    <div className={styles.checkoutSection}>
                        <h3>Check Out Successfully</h3>
                        <Link to="/products">Buy More</Link>
                    </div>
                }

                {
                    !state.checkout && state.itemCounter === 0 &&
                    <div className={styles.clearSection}>
                        <h3 className={styles.want}>Want to Buy?</h3>
                        <Link to="/products">Go to Shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;