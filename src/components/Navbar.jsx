import React , { useContext } from 'react';
import {Link} from "react-router-dom";

import shopIcon from "../assets/icons/shop.svg";

// contexts
import { cartContext } from '../Contexts/CartContextProvider';

// styles
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <Link className={styles.goProduct} to="/products">Product</Link>
            <div className={styles.goShop}>
                <Link to="/cart">
                    <img src={shopIcon} alt="shop"/>
                </Link>
                <span>{state.itemCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;