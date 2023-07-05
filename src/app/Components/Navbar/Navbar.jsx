'use client';
import CartWidget from '../CartWidget/CartWidget';
import SearchBar from '../SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   const itemCollection = collection(db, 'category');
  //   getDocs(itemCollection).then((res) => {
  //     let newCategories = res.docs.map((category) => {
  //       return {
  //         ...category.data(),
  //         id: category.id,
  //       };
  //     });
  //     let firstCategory = newCategories.find(
  //       (category) => category.title === 'Todas'
  //     );
  //     let otherCategories = newCategories.filter(
  //       (category) => category.title !== 'Todas'
  //     );
  //     setCategories([firstCategory, ...otherCategories]);
  //   });
  // }, []);

  return (
    <div className={styles.navbar__container}>
      <Link href="/">
        <img
          src="../../assets/green-and-blue-investment-building.webp"
          alt="Logo"
          className={styles.LogoPrincipal}
        />
      </Link>
      <SearchBar />
      <div className={styles.navbar__right}>
        <ul className={styles.navbar__uList}>
          {' '}
          {categories.map((category) => {
            return (
              <li key={category.id} className={styles.navbar__listItem}>
                {' '}
                <Link href={category.path} className={styles.navbar__link}>
                  {' '}
                  {category.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
