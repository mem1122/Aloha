import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const contactBlocks = [
  { icon: MapPin, label: "Адрес", value: "ул. Дзержиского, 18, Тюмень" },
  { icon: Phone, label: "Телефон", value: "+7 (999) 123-45-67" },
  { icon: Mail, label: "Email", value: "hello@aloha.coffee" },
  { icon: Clock, label: "Часы работы", value: "Пн–Пт: 7:30 – 21:00\nСб–Вс: 9:00 – 22:00" },
];

export default function Contacts() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Ждём вас в гости
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground">Контакты</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-muted aspect-square lg:aspect-auto lg:min-h-[500px]"
          >
            <iframe
              title="Aloha Coffee Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=65.53955733776094%2C57.15850441598141%2C65.54206788539888%2C57.15949499015386&amp;layer=mapnik"
              className="w-full h-full border-0 grayscale opacity-80"
              loading="lazy"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-10">
              {contactBlocks.map((block) => (
                <div key={block.label} className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <block.icon className="w-4 h-4 text-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                      {block.label}
                    </p>
                    <p className="text-foreground text-base lg:text-lg font-light whitespace-pre-line">
                      {block.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-14 pt-10 border-t border-border/50">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-5">
                Мы в сети
              </p>
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  Instagram <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-lg text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                >
                  Telegram <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}