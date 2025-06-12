import React from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 배경 오로라 효과 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-black to-yellow-700/10 blur-2xl opacity-40 z-0" />

      {/* 헤더 */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-yellow-400 drop-shadow-md z-10 mb-8"
      >
        📬 Get in Touch
      </motion.h2>

      {/* 설명 텍스트 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-400 text-center max-w-xl z-10 mb-10"
      >
        Have a question, idea, or just want to say hi? Drop a message below and let’s connect!
      </motion.p>

      {/* ContactForm 컴포넌트 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="z-10 w-full max-w-xl bg-white/5 border border-purple-500 p-8 rounded-xl shadow-xl backdrop-blur-md"
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}

export default Contact;
