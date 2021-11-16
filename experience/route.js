export default {
  routes: [
    {
      path: '/experience_menu',
      name: 'experience_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        titleStr: "Menu",
        items: [
          { text: 'News', path: "/news_menu/news"},
        ],
      }
    },
    {
      path: '/experience_menu/news',
      name: 'experience_menu__news',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        itleStr: "ContentsList",
        items: [
          { text: '[Cab Ride] Toulouse Matabiau ~ Paris Montparnasse', icon: 'mdi-play' , contents: "7nOR_BFym-w"},
          { text: '4K】WALK the BEACH at NICE FRANCE 4k video FR Travel vlog', icon: 'mdi-play' , contents: "vaXLdF6sRhg"},
          { text: 'Nice, France Walking Tour (4k Ultra HD 60fps) – With Captions', icon: 'mdi-play' , contents: "5KWEjn839lc"},
          { text: 'Old Town walk in Nice, France (French Riviera) | Spring 2021【4K】', icon: 'mdi-play' , contents: "TOG_SZW8r7s"},
          { text: 'Nice, France Walking tour [4K Ultra HD]', icon: 'mdi-play' , contents: "vYSgrBtxVvQ"},
          { text: 'Nice, French Riviera-France Walking tour[4K Ultra HD]', icon: 'mdi-play' , contents: "5cCsoaOwEc4"},
          { text: 'Nice French Riviera in 4K ULTRA HD Drone', icon: 'mdi-play' , contents: "CNseTOiosQw"},
          { text: "Nice France in 4K. Côte d'Azur. Nice Aerial.", icon: 'mdi-play' , contents: "HDZsO7105Ds"},
          { text: 'Nice France at night 4K', icon: 'mdi-play' , contents: "uZ5_eB0DAKY"},
          { text: 'Nice - FRANCE 4K', icon: 'mdi-play' , contents: "RBrgYFU6Ivo"},
          { text: 'Nice and Cannes in 4K', icon: 'mdi-play' , contents: "jLP-n7tAQJ0"},
          { text: 'San Sebastian, Spain 🇪🇸 [4K]', icon: 'mdi-play' , contents: "fSugT6Mm2uM"},
          { text: 'San Sebastian (Donostia), Spain - 4K UHD Drone Video', icon: 'mdi-play' , contents: "Ye7s84hCDrk"},
          { text: 'DRIVING SAN SEBASTIAN, Donostia, Gipuzkoa, Basque Country, SPAIN I 4K 60fps', icon: 'mdi-play' , contents: "uiXFlJXlynE"},
          { text: 'San Sebastian, Basque Country Spain 4K Drone', icon: 'mdi-play' , contents: "AnLXdzxyxUA"},
          { text: 'Donostia — San Sebastián 4K', icon: 'mdi-play' , contents: "dx0X-i_qpvQ"},
          { text: '4Kウォーキングツアーダウンタウンドノスティア/サンセバスティアン、バスク地方、スペイン', icon: 'mdi-play' , contents: "LGb1rfoALa8"},
          { text: 'ウォーキングツアーサンセバスティアン|スペイン北部[4K]', icon: 'mdi-play' , contents: "h2Jx8kZqxxM"},
          { text: '🇪🇸【FullHD】WALK IN San Sebastián SPAIN at night【美食の 街・サンセバスチャンのスペインバル街】', icon: 'mdi-play' , contents: "HI80bF2cJwA"},
          { text: 'San Sebastián - Donostia (España) - DJI OSMO 4K', icon: 'mdi-play' , contents: "C4bnz60aw84"},
          { text: 'Tiny Tour | San Sebastián Spain | Around the old town between mountain Urgull and river Urumea 2019', icon: 'mdi-play' , contents: "Qnv3I7A_V7M"},
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