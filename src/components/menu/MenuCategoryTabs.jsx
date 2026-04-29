import React from "react";
import { motion } from "framer-motion";

const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "pastry", label: "Выпечка" },
  { id: "breakfast", label: "Завтраки" },
];

export default function MenuCategoryTabs({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className="relative px-5 py-2.5 font-body text-xs tracking-widest uppercase transition-colors"
        >
          {active === cat.id && (
            <motion.div
              layoutId="menu-tab-bg"
              className="absolute inset-0 bg-secondary rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className={`relative z-10 ${active === cat.id ? "text-foreground" : "text-muted-foreground"}`}>
            {cat.label}
          </span>
        </button>
      ))}
    </div>
  );
}