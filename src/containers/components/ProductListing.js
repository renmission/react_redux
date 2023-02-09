import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/actions/productActions';
import Product from './Product';
import axios from 'axios';

const ProductListing = () => {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  console.log(products);

  return (
    <div>
      <Product />
    </div>
  )
}

export default ProductListing
