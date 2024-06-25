import React, { useEffect, useState } from 'react'
import { IProduct } from '../interface/product';
import productService from '../services/productService';
import { useParams } from 'react-router-dom';
import ProductDescriptionCard from '../components/common/ProductDescriptionCard';

function ProductDescription() {
    const { id } = useParams<{ id: string }>();
    const  productId = id ? parseInt(id, 10) : 0;
    const [product, setProduct] = useState<IProduct>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const data = await productService.getProductById(productId);
          setProduct(data);
        } catch (error) {
          setError('Failed to fetch product');
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>{error}</div>;
      }
  return (
    <>
      {product ? (
        <ProductDescriptionCard product={product} />
      ) : (
        <div>Product not found</div>
      )}
    </>
  )
}

export default ProductDescription