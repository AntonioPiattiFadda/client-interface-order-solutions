import axios from 'axios';
import endPoints from './index';

const getProducts = async () => {
  const response = await axios.get(endPoints.products.getAllProduct);
  return response.data;
};

export { getProducts };
