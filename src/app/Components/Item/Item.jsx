import React from 'react';
import styles from './Item.module.css';
import Link from 'next/link';

const Item = ({ element }) => {
  return (
    <Link href={`/itemDetail/${element.id}`} style={{ textDecoration: 'none' }}>
      <div className={styles.cardContainer}>
        <div className={styles.cardInformation}>
          <div className={styles.cardInformationContent}>
            <span>{element.name}</span>
            <span>{element.description}</span>
            <span>${element.price}</span>
          </div>
        </div>
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={element.image} alt="" />
          <span>+</span>
        </div>
      </div>
    </Link>
  );
};

export default Item;
