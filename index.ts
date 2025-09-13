import React from "react";
import { motion } from "framer-motion";

export default function SriramParisaPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-72 h-72 rounded-full bg-purple-600/40 blur-3xl absolute top-10 left-20"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="w-96 h-96 rounded-full bg-blue-600/30 blur-3xl absolute bottom-10 right-20"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
        />
      </div>

      {/* Name with glowing effect */}
      <motion.h1
        className="text-6xl md:text-8xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        Sriram Parisa
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="mt-6 text-xl md:text-2xl text-gray-300 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Connect more and achieve more
      </motion.h2>

      {/* Floating interactive elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full opacity-70"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: Math.random() * 5 + 5, delay: i * 0.2 }}
            style={{ position: "absolute" }}
          />
        ))}
      </div>
    </div>
  );
}
