// Здесь ты можешь менять игры, товары и новости без редактирования script.js.
// Для публикации новой игры добавь объект в массив games.
// Для запуска Godot Web укажи путь к index.html экспорта в поле url.
window.DZB_CONTENT = {
  games: [
    {
      title: "Твоя первая игра",
      category: "browser",
      status: "DEMO",
      description: "Здесь появится описание твоего первого игрового проекта.",
      art: "linear-gradient(135deg,#163e5b,#27235c 60%,#101522)",
      symbol: "PLAY",
      url: "",
      button: "Скоро появится"
    },
    {
      title: "Новый проект",
      category: "soon",
      status: "В РАЗРАБОТКЕ",
      description: "Следи за разработкой и не пропусти выход следующей игры.",
      art: "linear-gradient(135deg,#49306f,#24204b 60%,#111522)",
      symbol: "DZB",
      url: "",
      button: "Следить за проектом"
    },
    {
      title: "Следующая идея",
      category: "soon",
      status: "В ПЛАНАХ",
      description: "Место для будущего приключения от DzB Games.",
      art: "linear-gradient(135deg,#14514e,#172a4b 60%,#101522)",
      symbol: "NEW",
      url: "",
      button: "Скоро"
    }
  ],
  products: [
    { title: "Pixel Starter Pack", type: "СПРАЙТЫ", description: "Демонстрационная карточка набора пиксельной графики.", icon: "▦", price: "Скоро", art: "linear-gradient(135deg,#285b66,#26335f)" },
    { title: "Game UI Kit", type: "ИНТЕРФЕЙС", description: "Демонстрационная карточка элементов игрового интерфейса.", icon: "▣", price: "Скоро", art: "linear-gradient(135deg,#5b3d76,#29264f)" },
    { title: "Indie Sound Pack", type: "ЗВУКИ", description: "Демонстрационная карточка звуковых эффектов для игр.", icon: "♫", price: "Скоро", art: "linear-gradient(135deg,#66502c,#34315f)" }
  ],
  news: [
    { date: "08.11.2026", title: "DzB Games начинает свой путь", text: "Это первая запись в журнале студии. Здесь будут появляться новости о разработке, релизах и обновлениях." },
    { date: "СЛЕДИТЕ", title: "Новые игры уже в разработке", text: "В этом разделе можно рассказывать о процессе создания игр и делиться скриншотами." },
    { date: "СКОРО", title: "Магазин цифровых ресурсов", text: "В будущем здесь появятся авторские спрайты, текстуры, звуки и другие материалы." }
  ]
};
