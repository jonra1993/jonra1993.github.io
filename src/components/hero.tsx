"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Script from "next/script";

export const Hero = () => {
  return (
    <section
      id="homepage-background"
      className="w-full min-h-screen flex items-center justify-center pt-20"
    >
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="beforeInteractive"
      />
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
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* PROFILE IMAGE ADDED ABOVE THE NAME */}
          <img
            src="https://res.cloudinary.com/dnv0qwkrk/image/upload/v1604790122/wordpress_Jonathan/oie_42Yv0CR18gxi_qxnjn7.png"
            alt="Jonathan Vargas"
            className="mx-auto w-56 h-56 rounded-full shadow-lg"
          />

          <h1 className="text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text">Jonathan Vargas</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-8">
            Software Expert & Solution Architect
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 hover:text-cyan-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
