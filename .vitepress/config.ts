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
    search: {
      provider: 'local',
      options: {
        translations:{
          button: {
            buttonText: "Поиск",
            buttonAriaLabel: "Поиск"
          },
          modal: {
            displayDetails: "Подробнее",
            resetButtonTitle: "Сбросить",
            noResultsText: "Ничего не найдено для",
            footer: {
              navigateText: "для навигации",
              selectText: "для выбора",
              closeText: "для закрытия"
            }
          }
        }
      }
    },
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
    footer: {
      copyright: "(c) 2022-2023 danilacpp"
    },
    darkModeSwitchLabel: "Переключить тему",
    sidebarMenuLabel: "Меню",
    editLink: {
      pattern: "https://github.com/JuniGeadGroup/docs/edit/main/src/:path",
      text: "Редактировать страницу"
    },
    returnToTopLabel: "Вернуться в начало"
  },
  srcDir: "src/"
})
