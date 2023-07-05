'use client';
import { useContext } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';
import styles from './CartWidget.module.css';
import Link from 'next/link';

const CartWidget = () => {
  // const { getCartQuantity } = useContext(CartContext);
  // const total = getCartQuantity();

  return (
    <div className={styles.cart__container}>
      <Link href="/cart">
        <span className={styles.cart__count}>5</span>
        <BsCart2 className={styles.cart__icon} />
      </Link>
    </div>
  );
};

export default CartWidget;
