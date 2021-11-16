export default {
  routes: [
    {
      path: '/readout_menu',
      name: 'readout_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        titleStr: "Menu",
        items: [
          { text: 'News', path: "/news_menu/news"},
        ],
      }
    },
    {
      path: '/readout_menu/readout',
      name: 'readout_menu__readout',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        titleStr: "ContentsList",
        items: [
          { text: 'Alizé lit Du coté de chez Swann, Marcel Proust - Voyage au bout de la nuit (1/9)', icon: 'mdi-play' , contents: "OdhXs3nNLn0"},
          { text: "ALICE'S ADVENTURES IN WONDERLAND - FULL AudioBook | by Lewis Carroll - Adventure & Fantasy V2", icon: 'mdi-play' , contents: "jJHBtOu5aX0"},
          { text: '', icon: 'mdi-play' , contents: ""},
        ],  
      }
    },
  ]
}