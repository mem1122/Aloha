import React from "react";
import { motion } from "framer-motion";

export default function StaffCard({ person, index, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
        reverse ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>
      </div>

      {/* Text */}
      <div className={`${reverse ? "lg:order-1 lg:text-right" : ""}`}>
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
          {person.role}
        </p>
        <h3 className="font-heading text-2xl lg:text-4xl text-foreground mb-4">
          {person.name}
        </h3>
        <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-light max-w-md">
          {person.bio}
        </p>
      </div>
    </motion.div>
  );
}