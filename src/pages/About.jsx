const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import StaffCard from "../components/about/StaffCard";

const BARISTA_IMG = "https://media.db.com/images/public/69f1d6c37edd54d65685f724/3d28e9a7a_generated_8b67e4ee.png";
const CONFECTIONER_IMG = "https://media.db.com/images/public/69f1d6c37edd54d65685f724/a04656d7a_generated_5680bc80.png";
const MANAGER_IMG = "https://media.db.com/images/public/69f1d6c37edd54d65685f724/a5eb8815f_generated_a1c8d0b8.png";

const staff = [
  {
    name: "Артём Волков",
    role: "Шеф-бариста",
    image: BARISTA_IMG,
    bio: "Артём влюбился в кофе во время стажировки в Мельбурне и привёз оттуда философию «зерно решает всё». Его латте-арт — маленькие произведения искусства, которые жалко пить. Каждое утро он калибрует помол под настроение погоды.",
  },
  {
    name: "Мария Соколова",
    role: "Кондитер",
    image: CONFECTIONER_IMG,
    bio: "Мария просыпается в 3:30 утра, чтобы к открытию кофейни свежие круассаны уже остывали на решётке. Её рецепт канелé она привезла из Бордо, а тарт с юдзу — результат года экспериментов с цитрусовым курдом.",
  },
  {
    name: "Елена Кузнецова",
    role: "Управляющая",
    image: MANAGER_IMG,
    bio: "Елена — сердце Aloha. Она выстраивает атмосферу, подбирает плейлисты и следит за тем, чтобы каждый гость чувствовал себя как дома. До кофейни она десять лет работала в ресторанном бизнесе Петербурга.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Люди, которые создают вкус
          </p>
          <h1 className="font-heading text-4xl lg:text-6xl text-foreground max-w-lg">
            Наша команда
          </h1>
        </motion.div>

        {/* Staff Cards */}
        <div className="space-y-20 lg:space-y-32">
          {staff.map((person, i) => (
            <StaffCard key={person.name} person={person} index={i} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
}