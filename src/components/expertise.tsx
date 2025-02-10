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

export const Expertise = () => {
  const [count, setCount] = useState(0);

  return (
    <section id="expertise" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Expertise & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-xl p-6 hover-card"
          >
            <Code className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Cloud Architecture</li>
              <li>DevOps & CI/CD</li>
              <li>System Design</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-gradient rounded-xl p-6 hover-card"
          >
            <Brain className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-4">Specializations</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Distributed Systems</li>
              <li>API Design</li>
              <li>Performance Optimization</li>
              <li>Tech Leadership</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="card-gradient rounded-xl p-6 hover-card"
          >
            <GraduationCap className="w-12 h-12 mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <ul className="space-y-2 text-gray-300">
              <li>M.S. Computer Science</li>
              <li>B.S. Software Engineering</li>
              <li>Multiple Technical Certifications</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
