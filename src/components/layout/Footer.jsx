import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-2xl mb-4">ALOHA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Кофейня с душой острова. Свежая обжарка, домашняя выпечка и атмосфера утренней тишины.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Навигация</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-foreground hover:text-muted-foreground transition-colors">Главная</Link>
              <Link to="/menu" className="text-sm text-foreground hover:text-muted-foreground transition-colors">Меню</Link>
              <Link to="/about" className="text-sm text-foreground hover:text-muted-foreground transition-colors">О нас</Link>
              <Link to="/contacts" className="text-sm text-foreground hover:text-muted-foreground transition-colors">Контакты</Link>
            </div>
          </div>
          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm">
              <span>ул. Цветочная, 12</span>
              <span>+7 (999) 123-45-67</span>
              <span>hello@aloha.coffee</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2026 ALOHA Coffee. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}