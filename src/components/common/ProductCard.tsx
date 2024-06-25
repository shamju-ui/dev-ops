import React from 'react';
import { IProduct }  from '../../interface/product';
interface ProductCardProps {
    product: IProduct;
    // onClick: () => void;
    cardHeight?: string;
    cardWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    showDescription?: boolean;
  }

 
const ProductCard: React.FC<ProductCardProps> = ({ product, 
                                                  //   onClick, 
                                                   cardHeight = 'auto', 
                                                   cardWidth = 'auto', 
                                                   imageHeight = '150px', 
                                                   imageWidth = '100%', 
                                                   showDescription = true, }) => {
                                                    const cardStyle = {
                                                      height: cardHeight,
                                                      width: cardWidth,
                                                    };
                                                  
                                                    const imageStyle = {
                                                      height: imageHeight,
                                                      width: imageWidth,
                                                    }

                                                    const handleTitleClick = () => {
                                                      const url = `${window.location.origin}/product/${product.id}`;
                                                      window.open(url, '_blank', 'noopener,noreferrer');
                                                    };
  return (
<div  style={cardStyle} onClick={handleTitleClick} className="p-2 max-w-xs rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <img className="w-full" src={product.image} alt={product.title} 
        style={imageStyle}
      />
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-md mb-2">
        <span onClick={handleTitleClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        {product.title}
        </span>
          
          </div> 
        <p className="text-gray-700 text-base">{product.price}</p>
        <p className="text-gray-500 text-sm">{product.category}</p>
        { showDescription &&  <p className="text-gray-600 text-base">{product.description}</p> }
      </div>
    </div>
  );
}
export default ProductCard;


