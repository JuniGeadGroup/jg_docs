import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JuniGead",
  description: "JuniGead - игровой бот для платформы Discord на русском языке.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Поддержать меня', link: '/support' }
    ],

    sidebar: [
      {
        text: 'Начало работы',
        link: '/intro'
      },
      {
        text: 'Бонусы за поддержку',
        link: '/support'
      },
      {
        text: 'Игры для одного',
        link: '/for_single_player',
        items: [
          { text: 'Скоро...' }
        ],
        collapsed: true
      },
      {
        text: 'Игры для двоих',
        link: '/for_two_players',
        items: [
          { text: 'Скоро...' }
        ],
        collapsed: true
      },
      {
        text: 'Игры для 3+ игроков',
        link: '/for_more_players',
        items: [
          { text: 'Скоро...' }
        ],
        collapsed: true
      },
      {
        text: 'Мультиплеер',
        link: '/multiplayer',
        items: [
          { text: 'Скоро...' }
        ],
        collapsed: true
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JuniGeadGroup/docs' }
    ],
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница"
    },
    darkModeSwitchLabel: "Переключить тему"
  },
  srcDir: "src/",
})
