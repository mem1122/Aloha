const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

export const menuItems = {
  coffee: [
    { name: "Эспрессо", price: 180, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/d36e82869_generated_image.png", ingredients: "Арабика single origin, Бразилия Серрадо" },
    { name: "Капучино", price: 280, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/53f2abf3e_generated_image.png", ingredients: "Двойной эспрессо, вспененное молоко, латте-арт" },
    { name: "Флэт Уайт", price: 300, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/141f0c484_generated_image.png", ingredients: "Двойной ристретто, микропена молока" },
    { name: "Раф Лаванда", price: 340, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/5f06df5ef_generated_image.png", ingredients: "Эспрессо, сливки, лавандовый сироп домашнего приготовления" },
    { name: "Фильтр V60", price: 260, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/09c03c572_generated_image.png", ingredients: "Арабика light roast, Эфиопия Иргачеффе, ноты цитруса и жасмина" },
    { name: "Айс Латте", price: 320, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/281fc4893_generated_image.png", ingredients: "Двойной эспрессо, молоко, лёд, опционально: ваниль или карамель" },
  ],
  "non-coffee": [
    { name: "Матча Латте", price: 320, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/26ee3f516_generated_image.png", ingredients: "Церемониальная матча, вспененное молоко на выбор" },
    { name: "Какао Бельгийский", price: 280, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/c5e17acab_generated_image.png", ingredients: "Бельгийский шоколад, цельное молоко, маршмеллоу" },
    { name: "Чай Сенча", price: 220, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/4cea13c52_generated_image.png", ingredients: "Японский зелёный чай, подача в чайнике на двоих" },
    { name: "Лимонад Базилик", price: 260, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/0837eed9b_generated_image.png", ingredients: "Свежий лимон, базилик, тростниковый сахар, газированная вода" },
    { name: "Облепиховый Чай", price: 280, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/884119e32_generated_image.png", ingredients: "Облепиха, мёд, апельсин, корица, гвоздика" },
  ],
  pastry: [
    { name: "Круассан Классический", price: 180, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/d406e098f_generated_image.png", ingredients: "Слоёное тесто на сливочном масле 82%, 48 часов ферментации" },
    { name: "Круассан Миндальный", price: 240, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/5657f4feb_generated_image.png", ingredients: "Франжипан, обжаренные миндальные лепестки, сахарная пудра" },
    { name: "Тарт Цитрус", price: 280, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/83eaab2d4_generated_image.png", ingredients: "Песочное тесто, курд из лимона и юдзу, итальянская меренга" },
    { name: "Брауни", price: 220, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/616779c5a_generated_image.png", ingredients: "Бельгийский шоколад 70%, грецкий орех, морская соль" },
    { name: "Канелé", price: 200, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/ff80cb786_generated_image.png", ingredients: "Бордоский рецепт с ванилью и ромом, карамельная корочка" },
  ],
  breakfast: [
    { name: "Авокадо Тост", price: 380, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/a75f0bc0c_generated_image.png", ingredients: "Ремесленный хлеб, авокадо, яйцо пашот, микрозелень, чили флейкс" },
    { name: "Гранола Боул", price: 320, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/7e46dedd7_generated_image.png", ingredients: "Домашняя гранола, греческий йогурт, сезонные ягоды, мёд" },
    { name: "Скрэмбл с лососем", price: 420, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/2dd939b32_generated_image.png", ingredients: "Яйца скрэмбл, слабосолёный лосось, крем-чиз, каперсы" },
    { name: "Сырники", price: 300, image: "https://media.db.com/images/public/69f1d6c37edd54d65685f724/053b2bea2_generated_image.png", ingredients: "Фермерский творог, ваниль, подача с ягодным соусом и сметаной" },
  ],
};