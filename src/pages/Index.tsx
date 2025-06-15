
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import FilterSection from '../components/FilterSection';
import ReviewsSection from '../components/ReviewsSection';
import BulkOrderSection from '../components/BulkOrderSection';
import ContactSection from '../components/ContactSection';
import AIAssistant from '../components/AIAssistant';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';

const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-violet-900 text-white overflow-x-hidden">
      <CustomCursor />
      <Header onAuthClick={() => setShowAuthModal(true)} />
      
      <main className="relative">
        <Hero />
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Premium Wooden Press Oils Collection
            </motion.h2>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <FilterSection 
                  activeFilter={activeFilter}
                  setActiveFilter={setActiveFilter}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
              
              <div className="lg:col-span-3">
                <ProductGrid 
                  activeFilter={activeFilter}
                  priceRange={priceRange}
                />
              </div>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <BulkOrderSection />
        <ContactSection />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
