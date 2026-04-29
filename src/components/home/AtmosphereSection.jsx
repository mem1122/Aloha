const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";

const INTERIOR_IMAGE = "https://media.db.com/images/public/69f1d6c37edd54d65685f724/54e3ffce0_generated_0480264b.png";

export default function AtmosphereSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src={INTERIOR_IMAGE}
            alt="Интерьер кофейни Aloha"
            className="w-full h-64 sm:h-80 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-0 left-0 right-0 p-8 lg:p-14"
          >
            <h2 className="font-heading text-3xl lg:text-5xl text-white mb-3">
              Пространство тишины
            </h2>
            <p className="text-white/80 font-body text-sm lg:text-base max-w-md font-light leading-relaxed">
              Место, где утренний свет встречает аромат свежей обжарки. Здесь время замедляется.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}