import React, { useEffect, useState } from 'react';
import { IProduct } from '../interface/product';
import productService from '../services/productService';
import ProductCard from './common/ProductCard';
import { useNavigate } from 'react-router-dom';
import { useGetProductsByCategoryQuery, useGetProductsQuery } from '../services/API/productApi';

interface ProductListProps {
  category: string;
}
const ProductComponent: React.FC <ProductListProps>= ({category}) => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
 
  const navigate = useNavigate();
  const {data: products,error,isLoading,} = useGetProductsQuery(category);
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       let data;
  //       if (category) {
  //         data = await productService.getProductByCategoryName(category);
  //       } else {
  //         data = await productService.getAllProducts();
  //       }
  //       setProducts(data);
  //     } catch (error) {
  //       setError('Failed to fetch products');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProduct();
  // }, [category]);

  const handleProductClick = (product: IProduct) => {
    console.log('Product clicked:', product);
    navigate(`/product/${product.id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{(error as { error: { message: string } }).error.message}</div>;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-3 py-4 bg-white">
    {products?.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        cardHeight="300px" 
        cardWidth="200px" 
        imageHeight="150px" 
        imageWidth="100%" 
        showDescription={false} 
        // onClick={() => handleProductClick(product)
        // }
      />
    ))}
  </div>
  );
};

export default ProductComponent;
