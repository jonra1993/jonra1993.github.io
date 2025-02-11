"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Chip } from "@heroui/chip";

import { siteConfig } from "@/config/site";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#141E30] to-[#243B55] p-10 rounded-2xl shadow-lg backdrop-blur-md bg-opacity-80 border-[#42A5E0] border-2"
        >
          {/* Header */}
          <h2 className="text-4xl font-bold mb-6 gradient-text text-center">
            About Me
          </h2>

          {/* Bio */}
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            {siteConfig.about.bio}
          </p>

          {/* Contact & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#42A5E0]">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-[#42A5E0]" />
                  <span>{siteConfig.about.email}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#42A5E0]">
                Location
              </h3>
              <p>{siteConfig.about.location}</p>
            </div>
          </div>

          {/* Interests Section (Chips) */}
          <h3 className="text-xl font-semibold my-6 text-[#42A5E0]">
            Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {siteConfig.about.interests.map((interest, index) => (
              <Chip
                key={`${interest}-${index}`}
                //className="px-4 py-2 rounded-full bg-[#243B55] text-[#42A5E0] border border-[#42A5E0] text-sm font-semibold shadow-md cursor-pointer transition-all duration-300"
              >
                {interest}
              </Chip>
            ))}
          </div>

          {/* Skills Section */}
          <h3 className="text-xl font-semibold my-6 text-[#42A5E0]">
            Expertise & Skills
          </h3>
          <div className="space-y-4">
            {siteConfig.about.expertise.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-300">{skill.value}%</span>
                </div>
                <motion.div
                  className="h-3 bg-[#243B55] rounded-lg mt-1 relative overflow-hidden"
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="h-full bg-[#42A5E0] rounded-lg"></div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
