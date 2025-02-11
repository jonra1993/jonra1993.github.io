"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/image/logo.png" // Replace with your actual image name in /public folder
              alt="Logo"
              width={300} // Adjust width as needed
              height={100} // Adjust height as needed
              className="h-auto w-40 object-contain"
            />
          </motion.div>

          {/* Add Menu Links (Optional) */}
          {/* <div className="flex gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
          </div> */}
        </div>
      </nav>
    </header>
  );
};
