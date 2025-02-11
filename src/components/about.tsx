"use client";

import { useState } from "react";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Brain,
  GraduationCap,
  Quote,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const About = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-gradient rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {siteConfig.about.bio}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@example.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin size={16} />
                  <span>linkedin.com/in/jonathan-vargas</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p>San Francisco Bay Area</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
