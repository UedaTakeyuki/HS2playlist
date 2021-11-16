export default {
  routes: [
    {
      path: '/news_menu',
      name: 'news_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        titleStr: "Menu",
        items: [
          { text: 'News', path: "/news_menu/news"},
        ],
      }
    },
    {
      path: '/news_menu/news',
      name: 'news_menu__news',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        titleStr: "ContentsList" ,
        items: [
          { text: 'Sky News', icon: 'mdi-play' , contents: "9Auq9mYxFEE"},
          { text: 'Euronews français', icon: 'mdi-play' , contents: "MsN0_WNXvh8"},
          { text: 'FRANCE 24', icon: 'mdi-play' , contents: "6x7lV6E32lA"},
          { text: 'CNA 24/7 LIVE', icon: 'mdi-play' , contents: "XWq5kBlakcQ"},
          { text: 'Africanews français en direct -', icon: 'mdi-play' , contents: "b6R9-7KZ8YM"},
          { text: 'Africa24 Live', icon: 'mdi-play' , contents: "L5Ppr0JvPws"},
          { text: 'LIVE: Latest News Headlines and Events l ABC News Live', icon: 'mdi-play' , contents: "w_Ma8oQLmSM"},
          { text: 'News 12', icon: 'mdi-play' , contents: "RmmRlztXETI"},
          { text: 'franceinfo - DIRECT TV', icon: 'mdi-play' , contents: "Z-Nwo-ypKtM"},
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