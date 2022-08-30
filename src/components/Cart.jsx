import React , {useContext} from 'react';

// contexta
import { cartContext } from '../Contexts/CartContextProvider';

// function
import { sliceText } from './Helper/function';

// icons
import trash from "../assets/icons/trash.svg";

// styles
import styles from "../styles/Cart.module.css";


const Cart = ({data}) => {

    const {image , title , price , quantity} = data;
    const {dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImg} src={image} alt='product'/>
            <div className={styles.info}>
                <h3 className={styles.title}>{sliceText(title)}</h3>
                <p className={styles.price}>{price}</p>
            </div>
            <div className={styles.quantity}>
                <span>{quantity}</span>
            </div>
            <div className={styles.buttons}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE" , payload: data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: data})}><img className={styles.trash} src={trash} alt="product"/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;