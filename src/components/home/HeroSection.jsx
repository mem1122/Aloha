const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/public/images/71a19671c_generated_81f98933.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Эспрессо с золотистой крема"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight text-foreground leading-none">
            ALOHA
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground font-body font-light leading-relaxed max-w-lg">
            Кофейня с духом острова, где каждое утро начинается с аромата свежей обжарки и тёплого круассана.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-3.5 bg-foreground text-background font-body text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-opacity"
            >
              Наше меню
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3.5 border border-foreground/20 text-foreground font-body text-sm tracking-widest uppercase rounded-full hover:bg-foreground/5 transition-colors"
            >
              О нас
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}