export default {
  routes: [
    {
      path: '/misc_menu',
      name: 'misc_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        titleStr: "Menu",
        items: [
          { text: 'News', path: "/news_menu/news"},
        ],

      }
    },
    {
      path: '/misc_menu/misc',
      name: 'misc_menu__misc',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        titleStr: "miscellaneous",
        items: [
          { text: 'English Listening Practice Level 4 😎 Listen English everyday to Improve English Listening Skills 👍', icon: 'mdi-play' , contents: "MMpuN6VZJ-4"},
          { text: 'Listening Practice Level 2 | Improve Listening Skill | Learn to Speak English Fluently', icon: 'mdi-play' , contents: "VnJoTzww24k"},
          { text: '', icon: 'mdi-play' , contents: ""},
          { text: '', icon: 'mdi-play' , contents: ""},
          { text: '', icon: 'mdi-play' , contents: ""},
          { text: '', icon: 'mdi-play' , contents: ""},
          { text: '', icon: 'mdi-play' , contents: ""},
        ],
      }
    },
  ]
}