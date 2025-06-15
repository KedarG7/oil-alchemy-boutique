
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "The coconut oil is absolutely pure and fresh. The wooden press process really makes a difference in taste and quality.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b69eb75d?w=100&h=100&fit=crop&crop=face",
      product: "Coconut Oil",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Been using their sesame oil for months. My family loves the authentic taste. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      product: "Sesame Oil",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 4,
      comment: "Great quality mustard oil. The packaging is excellent and delivery was super fast.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      product: "Mustard Oil",
      date: "2 weeks ago"
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
            What Our Customers Say
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real experiences from our satisfied customers who trust our premium wooden press oils
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-gradient-to-br from-slate-800/50 to-violet-900/30 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-violet-400/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-violet-400 mb-4" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                "{review.comment}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-violet-400/30"
                />
                <div>
                  <h4 className="text-white font-semibold">{review.name}</h4>
                  <p className="text-white/60 text-sm">{review.product}</p>
                  <p className="text-white/40 text-xs">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full text-white font-semibold hover:from-violet-700 hover:to-blue-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
