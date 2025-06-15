
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface ProductGridProps {
  activeFilter: string;
  priceRange: number[];
}

const ProductGrid = ({ activeFilter, priceRange }: ProductGridProps) => {
  const products = [
    {
      id: 1,
      name: "Coconut Oil",
      price: 299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=400",
      category: "coconut",
      description: "Pure cold-pressed coconut oil",
      discount: 15
    },
    {
      id: 2,
      name: "Sesame Oil",
      price: 399,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      category: "sesame",
      description: "Traditional wooden pressed sesame oil",
      discount: 0
    },
    {
      id: 3,
      name: "Mustard Oil",
      price: 249,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      category: "mustard",
      description: "Premium quality mustard oil",
      discount: 20
    },
    {
      id: 4,
      name: "Groundnut Oil",
      price: 279,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=400",
      category: "groundnut",
      description: "Fresh cold-pressed groundnut oil",
      discount: 10
    },
    {
      id: 5,
      name: "Sunflower Oil",
      price: 199,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
      category: "sunflower",
      description: "Light and healthy sunflower oil",
      discount: 5
    },
    {
      id: 6,
      name: "Olive Oil",
      price: 599,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1542843137-8791a6904d14?w=400",
      category: "olive",
      description: "Extra virgin olive oil",
      discount: 25
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {filteredProducts.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
