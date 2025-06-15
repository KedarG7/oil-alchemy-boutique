
import React from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/slider';

interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
}

const FilterSection = ({ activeFilter, setActiveFilter, priceRange, setPriceRange }: FilterSectionProps) => {
  const categories = [
    { id: 'all', name: 'All Oils', count: 12 },
    { id: 'coconut', name: 'Coconut Oil', count: 3 },
    { id: 'sesame', name: 'Sesame Oil', count: 2 },
    { id: 'mustard', name: 'Mustard Oil', count: 2 },
    { id: 'groundnut', name: 'Groundnut Oil', count: 2 },
    { id: 'sunflower', name: 'Sunflower Oil', count: 2 },
    { id: 'olive', name: 'Olive Oil', count: 1 }
  ];

  const ratings = [5, 4, 3, 2, 1];
  const deals = ['Flash Sale', 'Weekly Deal', 'Bulk Discount', 'New Arrival'];

  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800/50 to-violet-900/30 backdrop-blur-lg rounded-3xl p-6 border border-white/10 sticky top-24"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Filters</h3>
      
      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="text-sm opacity-70">({category.count})</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={1000}
            min={0}
            step={50}
            className="mb-4"
          />
          <div className="flex justify-between text-white/70 text-sm">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-white mb-4">Rating</h4>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <motion.label
              key={rating}
              className="flex items-center space-x-3 text-white/70 hover:text-white cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <input type="checkbox" className="rounded border-white/30" />
              <div className="flex items-center space-x-1">
                {[...Array(rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <span key={i} className="text-white/30">★</span>
                ))}
                <span className="ml-2">& above</span>
              </div>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Deals */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Special Deals</h4>
        <div className="space-y-2">
          {deals.map((deal) => (
            <motion.label
              key={deal}
              className="flex items-center space-x-3 text-white/70 hover:text-white cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <input type="checkbox" className="rounded border-white/30" />
              <span>{deal}</span>
            </motion.label>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSection;
