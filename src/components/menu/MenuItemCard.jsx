import React, { useState } from "react";
import { motion } from "framer-motion";

export default function MenuItemCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card/60 mb-4 aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay with ingredients */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-foreground/50 flex items-end p-5 transition-opacity"
        >
          <p className="text-white text-xs font-light leading-relaxed">
            {item.ingredients}
          </p>
        </motion.div>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-heading text-base lg:text-lg text-foreground">{item.name}</h3>
        <span className="font-body text-sm text-muted-foreground whitespace-nowrap">{item.price} ₽</span>
      </div>
    </motion.div>
  );
}