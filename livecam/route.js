export default {
  routes: [
    {
      path: '/livecam_menu',
      name: 'livecam_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        itleStr: "Menu",
        items: [
          { text: 'News', path: "/news_menu/news"},
        ],
      }
    },
    {
      path: '/livecam_menu/livecam',
      name: 'livecam_menu__news',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        titleStr: "ContentsList",
        items: [
          { text: 'LIVE @ Santa Claus Village - Arctic Circle - Rovaniemi - Lapland Finland', icon: 'mdi-play' , contents: "VClJIez-w6Y"},
        ],
      }
    },
  ]
}