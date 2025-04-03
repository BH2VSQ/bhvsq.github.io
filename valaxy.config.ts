import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '風凪の猫窝',
    },
    say:{
      enable: false
    },

    pages: [
      /*
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },*/
    ],

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '萌ICP备20250599号',
      },
    },
  },

  unocss: { safelist },
})
