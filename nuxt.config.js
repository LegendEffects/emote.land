export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Emote.land',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'For when Discord Nitro costs too much.' },
      { name: 'author', content: 'LegendEffects' },

      { property: 'og:title', content: 'Emote Land' },
      { property: 'og:image', content: 'https://emote.land/emojis/BongoCatHyper.gif' },
      { property: 'og:url', content: 'https://emote.land' },
      { property: 'og:description', content: 'For when Discord Nitro costs too much.' },
    ],
    link: [
      { rel: 'icon', type: 'image/gif', href: 'https://emote.land/emojis/BongoCatHyper.gif' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/scss/index.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/alert.js',
    '~/plugins/favorites.js',
    '~/plugins/nuxtClientInit.js',
    '~/plugins/theme.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    generate: {
      ignore: [
        'img'
      ],
      cache: () => ([
        '.nuxt/',
        'dist/',
        'node_modules',
        'README.md'
      ])
    }
  }
}
