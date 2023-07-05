'use client';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';
import { getProducts } from '@/app/Services/products.service';
import { ProductsSkeleton } from '../../Utils/Skeletons';
// import SyncLoader from "react-spinners/SyncLoader";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      const mappedProducts = res.map((product: any) => {
        return {
          id: product.id,
          name: product.name,
          image: product.image,
          description: product.description,
          price: product.price,
          category: product.category.name,
          blocked: product.blocked,
        };
      });
      setItems(mappedProducts);
      setLoading(false);
    });
  }, [items]);

  // useEffect(() => {
  //   setLoading(true);
  //   const itemCollection = collection(db, 'products');
  //   let consulta = undefined;

  //   if (categoryName) {
  //     const q = query(
  //       itemCollection,
  //       where('category', '==', `${categoryName}`)
  //     );
  //     consulta = getDocs(q);
  //   } else if (searchedItem) {
  //     const searchedItemLowerCase = searchedItem.toLowerCase();
  //     const q = query(
  //       itemCollection,
  //       where('title', '>=', `${searchedItemLowerCase}`),
  //       where('title', '<=', `${searchedItemLowerCase}\uf8ff`)
  //     );
  //     consulta = getDocs(q);
  //   } else {
  //     consulta = getDocs(itemCollection);
  //   }
  //   consulta.then((res) => {
  //     let products = res.docs.map((element) => {
  //       return {
  //         ...element.data(),
  //         id: element.id,
  //       };
  //     });
  //     setItems(products);
  //     setLoading(false);
  //   });
  // }, [categoryName, searchedItem]);

  // useEffect(() => {
  //   const itemCollection = collection(db, 'products');
  //   getDocs(itemCollection).then((res) => {
  //     let products = res.docs.map((element) => {
  //       return {
  //         ...element.data(),
  //         id: element.id,
  //       };
  //     });
  //     setItems(products);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div className={styles.itemListContainer}>
      {!!loading ? <ProductsSkeleton /> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
