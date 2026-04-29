import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuCategoryTabs from "../components/menu/MenuCategoryTabs";
import MenuItemCard from "../components/menu/MenuItemCard";
import { menuItems } from "../components/menu/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const items = menuItems[activeCategory] || [];

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Вкус, рождённый с любовью
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground">Наше меню</h1>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-10 lg:mb-14">
          <MenuCategoryTabs active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`grid gap-6 lg:gap-8 ${
              activeCategory === "pastry"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {items.map((item, i) => (
              <MenuItemCard key={item.name} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}