import React from "react";
import { motion } from "framer-motion";
import { Bean, CakeSlice, Leaf } from "lucide-react";
import AdvantageCard from "./AdvantageCard";

const advantages = [
  {
    icon: Bean,
    title: "Direct Trade",
    description: "Прямые поставки зелёного зерна от фермеров Бразилии, Эфиопии и Колумбии. Свежая обжарка каждую неделю — вкус, который невозможно подделать.",
  },
  {
    icon: CakeSlice,
    title: "Своя кондитерская",
    description: "Наш цех начинает работу в 4 утра. Круассаны, тарты и брауни — всё готовится вручную из натуральных ингредиентов, без полуфабрикатов.",
  },
  {
    icon: Leaf,
    title: "Эко-философия",
    description: "Никакого пластика. Култьтовые плейлисты, живые растения и натуральные материалы — пространство, где хочется остаться подольше.",
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-3">
            Почему мы
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl text-foreground max-w-lg">
            Три причины прийти к нам
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((adv, i) => (
            <AdvantageCard key={i} {...adv} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}