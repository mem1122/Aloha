const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

export const menuItems = {
  coffee: [
    { name: "Эспрессо", price: 180, image: "7539391c3_generated_f6db9531.png", ingredients: "Арабика single origin, Бразилия Серрадо" },
    { name: "Капучино", price: 280, image: "/public/images/7539391c3_generated_f6db9531.png", ingredients: "Двойной эспрессо, вспененное молоко, латте-арт" },
    { name: "Флэт Уайт", price: 300, image: "/public/images/7539391c3_generated_f6db9531.png", ingredients: "Двойной ристретто, микропена молока" },
    { name: "Раф Лаванда", price: 340, image: "/public/images/7539391c3_generated_f6db9531.png", ingredients: "Эспрессо, сливки, лавандовый сироп домашнего приготовления" },
    { name: "Фильтр V60", price: 260, image: "/public/images/7539391c3_generated_f6db9531.png", ingredients: "Арабика light roast, Эфиопия Иргачеффе, ноты цитруса и жасмина" },
    { name: "Айс Латте", price: 320, image: "/public/images/7539391c3_generated_f6db9531.png", ingredients: "Двойной эспрессо, молоко, лёд, опционально: ваниль или карамель" },
  ],
  "non-coffee": [
    { name: "Матча Латте", price: 320, image: "/public/images/f35ea2c80_generated_5f7f7f6f.png", ingredients: "Церемониальная матча, вспененное молоко на выбор" },
    { name: "Какао Бельгийский", price: 280, image: "/public/images/f35ea2c80_generated_5f7f7f6f.png", ingredients: "Бельгийский шоколад, цельное молоко, маршмеллоу" },
    { name: "Чай Сенча", price: 220, image: "/public/images/f35ea2c80_generated_5f7f7f6f.png", ingredients: "Японский зелёный чай, подача в чайнике на двоих" },
    { name: "Лимонад Базилик", price: 260, image: "/public/images/f35ea2c80_generated_5f7f7f6f.png", ingredients: "Свежий лимон, базилик, тростниковый сахар, газированная вода" },
    { name: "Облепиховый Чай", price: 280, image: "/public/images/f35ea2c80_generated_5f7f7f6f.png", ingredients: "Облепиха, мёд, апельсин, корица, гвоздика" },
  ],
  pastry: [
    { name: "Круассан Классический", price: 180, image: "/public/images/f424ed9d5_generated_ed3fa8c6.png", ingredients: "Слоёное тесто на сливочном масле 82%, 48 часов ферментации" },
    { name: "Круассан Миндальный", price: 240, image: "/public/images/f424ed9d5_generated_ed3fa8c6.png", ingredients: "Франжипан, обжаренные миндальные лепестки, сахарная пудра" },
    { name: "Тарт Цитрус", price: 280, image: "/public/images/f424ed9d5_generated_ed3fa8c6.png", ingredients: "Песочное тесто, курд из лимона и юдзу, итальянская меренга" },
    { name: "Брауни", price: 220, image: "/public/images/f424ed9d5_generated_ed3fa8c6.png", ingredients: "Бельгийский шоколад 70%, грецкий орех, морская соль" },
    { name: "Канелé", price: 200, image: "/public/images/f424ed9d5_generated_ed3fa8c6.png", ingredients: "Бордоский рецепт с ванилью и ромом, карамельная корочка" },
  ],
  breakfast: [
    { name: "Авокадо Тост", price: 380, image: "/public/images/1014594d1_generated_6bb89296.png", ingredients: "Ремесленный хлеб, авокадо, яйцо пашот, микрозелень, чили флейкс" },
    { name: "Гранола Боул", price: 320, image: "/public/images/1014594d1_generated_6bb89296.png", ingredients: "Домашняя гранола, греческий йогурт, сезонные ягоды, мёд" },
    { name: "Скрэмбл с лососем", price: 420, image: "/public/images/1014594d1_generated_6bb89296.png", ingredients: "Яйца скрэмбл, слабосолёный лосось, крем-чиз, каперсы" },
    { name: "Сырники", price: 300, image: "/public/images/1014594d1_generated_6bb89296.png", ingredients: "Фермерский творог, ваниль, подача с ягодным соусом и сметаной" },
  ],
};