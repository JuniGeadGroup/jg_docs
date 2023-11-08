import {defineConfig} from "vitepress";

export default defineConfig({
  title: "JuniGead",
  description: "JuniGead - это игровой бот для платформы Discord. В наличии крестики-нолики, дуэли, найди пару, бродилка и другие игры.",
  lang: "ru",
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { 
        text: "Помочь проекту", link: "/docs/support" 
      },
      {
        text: "Условия предоставления услуг", link: "/terms"
      },
      { 
        text: "Discord", link: "https://discord.gg/4jq5xFSksh"
      }
    ],
    search: {
      provider: "local",
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
        link: '/docs'
      },
      {
        text: 'Бонусы за поддержку',
        link: '/docs/support'
      },
      {
        text: "Игры для одного",
        link: "/docs/single_games"
      },
      {
        text: "Игры для двоих",
        link: "/docs/games_for_two"
      },
      {
        text: "Игры для 3+ игроков",
        link: "/docs/games_for_three"
      },
      {
        text: "Дополнительные функции",
        link: "/docs/other"
      },
      {
        text: "Список изменений",
        link: "/docs/changelog"
      },
      {
        text: "Условия использования",
        link: "/terms"
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/JuniGeadGroup/docs" }
    ],
    docFooter: {
      prev: "Предыдущая страница",
      next: "Следующая страница"
    },
    footer: {
      copyright: "(c) 2022-2023 danilacpp"
    },
    darkModeSwitchLabel: undefined,
    sidebarMenuLabel: "Меню",
    editLink: {
      pattern: "https://github.com/JuniGeadGroup/docs/edit/main/src/:path",
      text: "Редактировать страницу"
    },
    returnToTopLabel: "Вернуться в начало",
    outline: {
      label: "На этой странице",
      level: "deep"
    },
    lastUpdated: {
      text: "Отредактировано"
    },
    logo: "/favicon.ico"
  },
  head: [
    [
      "link",
      { 
        rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "discord, дискорд, бот, bot, игры, junigead, discord бот, дискорд бот, игровой бот, игры для двоих в дс, бот дс для игр на русском"
      }
    ]
  ],
  srcDir: "src/"
})
