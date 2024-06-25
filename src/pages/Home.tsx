import React, { useState } from 'react'
import ProductComponent from '../components/product'
import CategoryUI from '../components/CategoryUI'
import { TCategory } from '../interface/category';

const Home: React.FC =()=>{
  const [category, setCategory] = useState<string>('');
  const handleCategoryClick = (selectedCategory: TCategory) => {
    setCategory(selectedCategory);
  };
  return (
    <>
    <CategoryUI onClick={handleCategoryClick}/>
    <div className="px-2 ">
    <ProductComponent  category={category}/>
    </div>
    </>
  )
}
export default Home
