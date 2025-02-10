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

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
];

export const Quotes = () => {
  const [count, setCount] = useState(0);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Inspirational Quotes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card-gradient rounded-xl p-8"
            >
              <Quote className="w-8 h-8 mb-4 text-cyan-400" />
              <p className="text-gray-300 italic mb-4 text-lg">{quote.text}</p>
              <p className="text-sm text-cyan-400">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
