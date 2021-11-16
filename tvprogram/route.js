export default {
  routes: [
    {
      path: '/tvprogram_menu',
      name: 'tvprogram_menu',
      component: () => import(/* webpackChunkName: "about" */ '@/components/MenuList'),
      props: {
        titleStr: "Programs",
        items: [
          { text: 'Miraculous saison 4', path: "/tvprogram_menu/miraculous_saison_4"},
          { text: 'LES ANIMAUX', path: "/tvprogram_menu/les_animaux"},
        ],
      }
    },
    {
      path: '/tvprogram_menu/tvprogram',
      name: 'tvprogram_menu__tvprogram',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        titleStr:"ContentsList",
        items: [
          { text: 'Sky News', icon: 'mdi-play' , contents: "9Auq9mYxFEE"},
          { text: 'Euronews français', icon: 'mdi-play' , contents: "MsN0_WNXvh8"},
          { text: 'FRANCE 24', icon: 'mdi-play' , contents: "6x7lV6E32lA"},
          { text: 'LES ANIMAUX DE LA 8 FONT DU SPORT - ÉMISSION INTÉGRALE', icon: 'mdi-play' , contents: "jrYeCVVtMvw"},
          { text: 'LES ANIMAUX DE LA 8 AU COSTA RICA - ÉMISSION INTÉGRALE', icon: 'mdi-play' , contents: "1Bdyg795DmA"},
          { text: "LES ANIMAUX DE LA 8 SUR LA CÔTE D'OPALE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "Dn24wQ9_8tY"},
          { text: 'Alizé lit Du coté de chez Swann, Marcel Proust - Voyage au bout de la nuit (1/9)', icon: 'mdi-play' , contents: "OdhXs3nNLn0"},
          { text: '[Cab Ride] Toulouse Matabiau ~ Paris Montparnasse', icon: 'mdi-play' , contents: "7nOR_BFym-w"},
          { text: 'LOU! - LIVE Episodes complets HD [Officiel] Dessin animé pour enfants', icon: 'mdi-play' , contents: "Ibr_EL31XF4"},
          { text: 'Miraculous saison 4 episode 1 vérité en français 🇨🇵', icon: 'mdi-play' , contents: "rxzDWKOLZx8"},
        ],
      }
    },
    {
      path: '/tvprogram_menu/miraculous_saison_4',
      name: 'tvprogram_menu__miraculous_saison_4',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        title: "Miraculous saison 4",
        items: [
          { text: 'Miraculous saison 4 episode 1 vérité en français 🇨🇵', icon: 'mdi-play' , contents: "rxzDWKOLZx8"},
          { text: 'Miraculous saison 4 episode 2 mansonge en français 🇨🇵', icon: 'mdi-play' , contents: "YAy0XUblDhc"},
          { text: 'Miraculous saison 4 episode 3 gang des secrets en français 🇨🇵', icon: 'mdi-play' , contents: "jzl4QmrRGHE"},
          { text: 'Miraculous saison 4 episode 4 Mr pigeon 72 en français 🇨🇵', icon: 'mdi-play' , contents: "wt1XtSgijMM"},
  
          { text: 'Miraculous saison 4 episode 5 Psycomédien en français 🇨🇵', icon: 'mdi-play' , contents: ""},
  
          { text: 'Miraculous saison 4 episode 6 fu furieux en français 🇨🇵', icon: 'mdi-play' , contents: "aM4yUmnpgXA"},
          { text: 'Miraculous saison 4 episode 7 pirkel en français 🇨🇵', icon: 'mdi-play' , contents: "b9KiROlB37c"},
          { text: 'Miraculous saison 4 episode 8 queen banana  en français 🇨🇵', icon: 'mdi-play' , contents: "7IzNXL4Sghg"},
  
          { text: 'Miraculous saison 4 episode 9 Gabriel Agreste en français 🇨🇵', icon: 'mdi-play' , contents: ""},
  
          { text: 'Miraculous saison 4 episode 10 Sangsure en français 🇨🇵', icon: 'mdi-play' , contents: "nsFQRyrcOlY"},
          { text: 'Miraculous saison 4 episode 11 Culpabyss en français 🇨🇵', icon: 'mdi-play' , contents: "h1dz-BdIcnQ"},
          { text: 'Miraculous saison 4 episode 12 crocoduel en français 🇨🇵', icon: 'mdi-play' , contents: "TH7HSJtnfnY"},
          { text: 'Miraculous saison 4 episode 13 optigami en français 🇨🇵', icon: 'mdi-play' , contents: "dcRQlcclAGQ"},
          { text: 'Miraculous saison 4 episode 14 Sentibulleur en français 🇨🇵', icon: 'mdi-play' , contents: "iYqea-sECCo"},
          { text: 'Miraculous saison 4 episode 15 Glaciator 2[ en français 🇨🇵', icon: 'mdi-play' , contents: "xocGwWKNGbs"},
          { text: 'Miraculous saison 4 episode 16 Hack-San en français 🇨🇵', icon: 'mdi-play' , contents: "h96Hm2THNwQ"},
          { text: 'Miraculous saison 4 episode 17 Larme Ultime en français 🇨🇵', icon: 'mdi-play' , contents: "FZ49FTbAZIQ"},
          { text: 'Miraculous saison 4 episode 18 Exauceur en français 🇨🇵', icon: 'mdi-play' , contents: "MQUuqLGPLEc"},
          { text: 'Miraculous saison 4 episode 19 Simplificator en français 🇨🇵', icon: 'mdi-play' , contents: "eEAe5rugHbE"},
          { text: 'Miraculous saison 4 episode 20 Qilin en français 🇨🇵', icon: 'mdi-play' , contents: ""},
          { text: 'Miraculous saison 4 episode 21 Chère Famille en français 🇨🇵', icon: 'mdi-play' , contents: "sAI7ffeFemk"},
          { text: 'Miraculous saison 4 episode 22 Éphémère en français 🇨🇵', icon: 'mdi-play' , contents: ""},
          { text: 'Miraculous saison 4 episode 23 Kuro Neko en français 🇨🇵', icon: 'mdi-play' , contents: ""},
          { text: 'Miraculous saison 4 episode 24 Penalteam en français 🇨🇵', icon: 'mdi-play' , contents: ""},
          { text: 'Miraculous saison 4 episode 25 Risque (La Dernière Attaque de Papillombre - 1ère Partie) en français 🇨🇵', icon: 'mdi-play' , contents: ""},
          { text: 'Miraculous saison 4 episode 26 Réplique (La Dernière Attaque de Papillombre - 2ème Partie) en français 🇨🇵', icon: 'mdi-play' , contents: ""},
  
        ]   
      }
    },
    {
      path: '/tvprogram_menu/les_animaux',
      name: 'tvprogram_menu__les_animaux',
      component: () => import(/* webpackChunkName: "about" */ '@/components/ContentsList'),
      props: {
        title: "LES ANIMAUX DE LA 8",
        items: [
          { text: 'LES ANIMAUX DE LA 8 EN ILE DE FRANCE - ÉMISSION INTÉGRALE', icon: 'mdi-play' , contents: "66A9vmrytEA"},
          { text: 'LES ANIMAUX DE LA 8 FONT DU SPORT - ÉMISSION INTÉGRALE', icon: 'mdi-play' , contents: "jrYeCVVtMvw"},
          { text: 'LES ANIMAUX DE LA 8 AU COSTA RICA - ÉMISSION INTÉGRALE', icon: 'mdi-play' , contents: "1Bdyg795DmA"},
          { text: "LES ANIMAUX DE LA 8 SUR LA CÔTE D'OPALE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "Dn24wQ9_8tY"},
          { text: "LES ANIMAUX DE LA 8 À LYON - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "SB3PFDNtkyk"},
          { text: "LES ANIMAUX DE LA 8 DANS LE PAYS BASQUE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "ICvbIw_ncVI"},
          { text: "LES ANIMAUX DE LA 8 EN AUVERGNE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "R510OjiYOTc"},
          { text: "LES ANIMAUX DE LA 8 EN LOZERE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "-TWkPIx-ORc"},
          { text: "LES ANIMAUX DE LA 8 EN AUVERGNE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "w_Hc7UfkAak"},
          { text: "LES ANIMAUX DE LA 8 À ETRETAT - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "JE5-HvQ1wqk"},
          { text: "LES ANIMAUX DE LA 8 À NOIRMOUTIER - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "CcPmG08O1SQ"},
          { text: "LES ANIMAUX DE LA 8 EN CORSE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "2-10D6_I2-Y"},
          { text: "LES ANIMAUX DE LA 8 DANS LE VAL D'ISÈRE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "JYzj-ywHIOM"},
          { text: "LES ANIMAUX DE LA 8 EN CAMARGUE - ÉMISSION INTÉGRALE", icon: 'mdi-play' , contents: "caTUI0oCLLo"},
          { text: "Les Animaux de la 8 à Paris - Intégrale", icon: 'mdi-play' , contents: "0CPrrNXYQg8"},
          { text: "Les Animaux de la 8 dans l'Aveyron - Émission intégrale", icon: 'mdi-play' , contents: "Gp9gtoqPnDk"},
          { text: "Les Animaux de la 8 en Suisse - Émission intégrale", icon: 'mdi-play' , contents: "LOcaXw3npZY"},
          { text: "Les Animaux de la 8 à Abu Dhabi - Émission intégrale", icon: 'mdi-play' , contents: "jK1UZlDBa90"},
          { text: "Les Animaux de la 8 en Normandie - Émission intégrale", icon: 'mdi-play' , contents: "u13Jnuq8mfY"},
          { text: "Les deux sèvres, une terre animale peu connue - Emission intégrale", icon: 'mdi-play' , contents: "Gaen2yiepFc"},
          { text: "Découvrez tout sur les bébés animaux - Émission intégrale", icon: 'mdi-play' , contents: "IQkvGTex88Y"},
          { text: "Les Animaux de la 8 en Corse - Émission intégrale", icon: 'mdi-play' , contents: "xEJLHNznRPI"},
          { text: "Les Animaux de 8 dans le Var - Émission Intégrale", icon: 'mdi-play' , contents: "xhCoczakuzE"},
          { text: "Les Animaux de la 8 en Haut de Garonne - Emission Intégrale", icon: 'mdi-play' , contents: "RA0_53KOvCY"},
          { text: "Les Animaux de la 8 à Marseille - Emission Intégrale", icon: 'mdi-play' , contents: "w1qURYOqqvI"},
          { text: "Les Animaux de la 8 à Aix-les-bains - Emission Intégrale", icon: 'mdi-play' , contents: "UQObrpocEHE"},
          { text: "Les Animaux de la 8 en Picardie - Emission Intégrale", icon: 'mdi-play' , contents: "cecPUHEWsp4"},
          { text: "Les Animaux de la 8 en Haut de Vienne - Emission intégrale", icon: 'mdi-play' , contents: "mdEdNxxH3PE"},
          { text: "Les Animaux de la 8 à Paris - EMISSION INTÉGRALE", icon: 'mdi-play' , contents: "LZUFz7EWZSA"},
          { text: "Les Animaux de la 8 en Finlande - Intégrale", icon: 'mdi-play' , contents: "7qIvSbNozDw"},
          { text: "Les Animaux de la 8 Spéciale Cheval - Intégrale", icon: 'mdi-play' , contents: "vAp4nGcdMEY"},
          { text: "Les Animaux de la 8 dans la Loire - Intégrale", icon: 'mdi-play' , contents: "p1-oYXtd9Fs"},
          { text: "Les Animaux de la 8 en Bourgogne - Emission Intégrale", icon: 'mdi-play' , contents: "IKjgU6lnfO8"},
          { text: "Les Animaux de la 8 en Ile de Ré - Emission intégrale", icon: 'mdi-play' , contents: "H3ShIeM6IRI"},
          { text: "Les Animaux de la 8 en Tunisie - Intégrale", icon: 'mdi-play' , contents: "1JglNbE3cno"},
          { text: "Les Animaux de la 8 en Alsace - Intégrale", icon: 'mdi-play' , contents: "PrvRBjTpZXI"},
          { text: "Spéciale Chiens & Chats - Intégrale", icon: 'mdi-play' , contents: "ecT9pdHu3pk"},
          { text: "Les Animaux de la 8 en Haute-Garonne - Intégrale", icon: 'mdi-play' , contents: "GWjbnfNvGpg"},
          { text: "Les Animaux de la 8 à Montpellier - Intégral", icon: 'mdi-play' , contents: "uOT3mbC181A"},
          { text: "Les Animaux de la 8 dans l'Hérault - Episode Intégral", icon: 'mdi-play' , contents: "OqknUqudh4Y"},
          { text: "Les Animaux de la 8 dans la Sarthe - Intégral", icon: 'mdi-play' , contents: "Uyqu3-4fRgA"},
          { text: "Les Animaux de la 8 en Lorraine - Episode Intégral", icon: 'mdi-play' , contents: "zaLlRqbuOIg"},
          { text: "Les Animaux de la 8 en Côte D'Azur - Episode Intégral", icon: 'mdi-play' , contents: "nu9tYTr89j0"},
          { text: "Une experte en comportement canin vous donne des conseils", icon: 'mdi-play' , contents: "FF-MffVS1SU"},
          { text: "Un docteur vétérinaire et expert comportementaliste répond à vos questions", icon: 'mdi-play' , contents: "I0s0VyLHYKY"},
          { text: "Petit agneau deviendra grand - Les Animaux de la 8", icon: 'mdi-play' , contents: "4Y7X8E8mYzo"},
          { text: "Balade équestre entre plages et vagues corses - Les Animaux de la 8", icon: 'mdi-play' , contents: "QuhCj5XQbhg"},
          { text: "", icon: 'mdi-play' , contents: ""},  
        ]   
      }
    },
  ]
}