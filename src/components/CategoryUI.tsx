import { useEffect, useState } from "react";
import categoryService from "../services/categoryService";
import { TCategory } from "../interface/category";
import { useGetCategoriesQuery } from "../services/API/categoryApi";


const CategoryUI = ({onClick}) => {
    // const [categories, setCategories] = useState<TCategory[]>([]);
    const {data: categories,error,isLoading,} = useGetCategoriesQuery();
    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         const data = await categoryService.getAllCategories();
    //         setCategories(data);
    //     };
    //     fetchCategories();
    // }, []);
    return (
        <div className="container mx-auto flex justify-between items-center mt-2" >
            {categories?.map((category) => (
                <button  
                key={category}
                onClick={() => onClick(category)}
                id={category} className="text-gray-500 hover:text-yellow-400">{category}</button>
            ))}
        </div>
    )
};
export default CategoryUI;