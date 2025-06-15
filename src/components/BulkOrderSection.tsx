
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Percent } from 'lucide-react';

const BulkOrderSection = () => {
  const bulkTiers = [
    {
      quantity: "5-10 bottles",
      discount: "10%",
      savings: "Save ₹200+",
      icon: Package,
      color: "from-green-500 to-emerald-500"
    },
    {
      quantity: "11-25 bottles",
      discount: "15%",
      savings: "Save ₹500+",
      icon: Truck,
      color: "from-blue-500 to-cyan-500"
    },
    {
      quantity: "25+ bottles",
      discount: "20%",
      savings: "Save ₹1000+",
      icon: Percent,
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Bulk Order Discounts
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Save more when you buy more! Perfect for families, restaurants, and health-conscious communities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {bulkTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-violet-900/30 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-violet-400/50 transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                }}
              >
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">{tier.quantity}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {tier.discount}
                </div>
                <p className="text-green-400 font-semibold mb-6">{tier.savings}</p>
                
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Order Now
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="bg-gradient-to-r from-violet-900/50 to-blue-900/50 backdrop-blur-lg rounded-3xl p-8 border border-violet-400/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Custom Bulk Orders
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Need larger quantities? We offer custom pricing for institutional buyers, 
                restaurants, and wholesale distributors. Contact us for personalized quotes 
                and exclusive partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Custom Quote
                </motion.button>
                <motion.button
                  className="px-6 py-3 border border-white/30 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download Catalog
                </motion.button>
              </div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                50+
              </motion.div>
              <p className="text-white/80 text-lg">
                Bulk Orders Delivered
              </p>
              <p className="text-white/60">This Month</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkOrderSection;
