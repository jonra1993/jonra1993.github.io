"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { Button } from "@heroui/button";

import { siteConfig } from "@/config/site";

export const Hero = () => {
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideArrow(window.scrollY > 50); // Hide arrow when user scrolls down
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="homepage-background"
      className="w-full min-h-[95vh] flex items-center justify-center relative"
    >
      <Script id="script">
        {`VANTA.BIRDS({
      el: "#homepage-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 500,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x232c4a,
        color1: 0x115f48,
        color2: 0x971e6,
        birdSize: 1.20,
        wingSpan: 23.00,
        speedLimit: 6.00,
        separation: 75.00,
        alignment: 48.00,
        cohesion: 24.00
    });`}
      </Script>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center gap-10 "
        >
          <h1 className="text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Jonathan Vargas</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Software Expert & Solutions Architect
          </p>
          <div className="flex justify-center gap-4 mb-8">
            {siteConfig.social.map((social) => (
              <motion.a
                key={`key_${social.name}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-50 transition-colors duration-300 hover:text-[#42A5E0]"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <img
            src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1604790122/wordpress_Jonathan/oie_42Yv0CR18gxi_qxnjn7.png"
            alt="Jonathan Vargas"
            className="mx-auto w-56 h-56 rounded-full shadow-lg"
          />
          <Button
            className="relative bg-gradient-to-tr from-[#141E30] to-[#243B55] text-white shadow-lg mt-20 
             backdrop-blur-md bg-opacity-80 border-[#42A5E0] border-2 
             transition-all duration-300 ease-in-out 
             hover:scale-105 hover:border-[#66D9EF] 
             hover:shadow-[0_0_15px_#42A5E0]"
            radius="full"
            variant="bordered"
            onPress={() => window.open("https://www.allient.io", "_blank")}
          >
            Company
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator (Arrow) */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 1, y: 0 }}
        animate={hideArrow ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 text-gray-400 animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
