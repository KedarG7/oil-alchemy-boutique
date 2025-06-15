
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  discount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountedPrice = product.price - (product.price * product.discount / 100);

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-violet-900/30 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-violet-400/50 transition-all duration-300 group"
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
        
        <motion.button
          className="absolute top-3 right-3 p-2 bg-black/20 backdrop-blur-lg rounded-full border border-white/20 hover:bg-white/20 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart 
            className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </motion.button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-white/70 text-sm">{product.description}</p>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">₹{Math.round(discountedPrice)}</span>
            {product.discount > 0 && (
              <span className="text-white/50 line-through text-lg">₹{product.price}</span>
            )}
          </div>
          
          <motion.button
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white font-medium hover:from-violet-700 hover:to-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
