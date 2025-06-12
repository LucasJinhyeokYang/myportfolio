import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* 배경 오로라 효과 */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800/30 via-blue-800/10 to-black blur-2xl opacity-40" />

      {/* 움직이는 라인 (배경 장식) */}
      <div className="absolute w-full h-full pointer-events-none z-0">
        <div className="w-px h-full bg-purple-600/20 absolute left-1/4 animate-pulse" />
        <div className="w-px h-full bg-purple-600/20 absolute left-1/2 animate-pulse delay-500" />
        <div className="w-px h-full bg-purple-600/20 absolute right-1/4 animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-xl">
          Hello, I'm Jinhyeok 👋
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-400 font-mono">
          Passionate IT student & future developer 🚀
        </p>
        <div className="mt-8">
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:from-yellow-400 hover:to-purple-500 transition-all duration-300"
            >
              🚀 View My Journey
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* 하단 설명 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 mt-16 bg-white/10 border border-purple-600 backdrop-blur-md p-6 rounded-xl max-w-lg w-full text-center shadow-md"
      >
        <h2 className="text-2xl font-semibold text-purple-300 mb-2">🧠 Portfolio Highlights</h2>
        <p className="text-gray-300">
          Explore my projects, programming skills, and how I evolved from a student to a future-ready developer.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
