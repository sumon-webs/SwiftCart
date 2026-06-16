'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  // Animation variants for staggered orchestrations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white py-20 lg:py-32">
      {/* Decorative Background Blobs */}
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-orange-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Supercharged E-Commerce Experience
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
            >
              Shop Lightning Fast with <span className="text-blue-600">Swift</span><span className="text-orange-500">Cart</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Discover millions of products at unbeatable prices. Experience instant checkout, real-time tracking, and ultra-speedy delivery right to your doorstep.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
            >
            </motion.div>
          </div>

          {/* Right Column: Animated Visual */}
          <motion.div 
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Main Interactive Card */}
            <motion.div 
              className="relative w-full max-w-[450px] aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 shadow-2xl flex flex-col justify-between overflow-hidden group text-white"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Subtle grid pattern inside card */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-xl font-bold tracking-wider">SWIFT PASS</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">Premium</span>
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-2xl sm:text-3xl font-semibold tracking-wide">
                  Your Express Ticket to Smarter Shopping.
                </p>
                <div className="pt-4 border-t border-white/20 flex justify-between items-center text-sm text-blue-100">
                  <span>Priority Delivery</span>
                  <span className="font-mono">⚡ 00-STRT</span>
                </div>
              </div>
            </motion.div>

            {/* Floating micro-animation badge */}
            <motion.div 
              className="absolute -top-6 -right-4 bg-orange-500 text-white font-bold py-3 px-5 rounded-2xl shadow-xl text-sm z-20 flex items-center gap-2"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              🔥 50% OFF TODAY
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}