import React from "react";
import { motion } from "framer-motion";

export default function AdvantageCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="p-8 lg:p-10 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all duration-500 h-full">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
          <Icon className="w-5 h-5 text-foreground" />
        </div>
        <h3 className="font-heading text-xl lg:text-2xl mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}