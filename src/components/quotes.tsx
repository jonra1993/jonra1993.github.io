"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardBody } from "@heroui/card";

const quotes = [
  {
    id: 0,
    text: "Twenty years from now you will be more disappointed by the things you didn't do than by the things you did. So let go. Sail away from the safe harbor. Catch the trade winds in your sails. Explore, dream, discover.",
    author: "Mark Twain",
  },
  {
    id: 1,
    text: "The only freedom that exists is in the mind, and it is called willpower. If we do not use it, we are not free.",
    author: "Pepe Mujica",
  },
];

export const Quotes = () => {
  const controls = useAnimation();

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Inspirational Quotes
        </h2>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="grid sm:grid-cols-1 md:flex md:space-x-8 justify-center gap-6"
            animate={controls}
          >
            {quotes.map((quote) => (
              <Card
                key={quote.id}
                className="max-w-96 min-h-48 p-6 flex flex-col bg-gray-800 rounded-xl shadow-lg 
                  hover:backdrop-blur-lg hover:bg-opacity-70 hover:border-opacity-50 hover:shadow-xl"
              >
                <CardBody className="flex-grow flex flex-col justify-between overflow-visible">
                  <p className="text-gray-300 italic text-lg leading-relaxed break-words whitespace-normal text-center">
                    {quote.text}
                  </p>
                  <div className="mt-4 text-center">
                    <p className="text-white font-semibold">{quote.author}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
