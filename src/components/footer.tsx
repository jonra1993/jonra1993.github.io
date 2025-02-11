"use client";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-900">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4 flex-wrap justify-center">
            {siteConfig.social.map((social) => (
              <motion.a
                key={`key_${social.name}`}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 text-white"
                whileTap={{ scale: 0.9 }}
                aria-label={social.name} // Improves accessibility
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Copyright Text */}
          <p className="text-center text-muted-foreground">
            © {currentYear} Jonathan Vargas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
