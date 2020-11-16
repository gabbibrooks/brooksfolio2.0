export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'zbrooksfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontawesome',
    '@nuxtjs/svg',
    '@nuxtjs/cloudinary'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content', 'nuxt-webfontloader'],

  //Module Configuration
  cloudinary: {
    cloudName: 'zacharybrooks-dev',
    useComponent: true
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  content: {
    markdown: {
      prism: {
        //decide between the code highlighter themes
        // theme: 'prism-themes/themes/prism-shades-of-purple.css'
        theme: 'prism-themes/themes/prism-nord.css'
      }
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'faEnvelope',
        'faNewspaper',
        'faCode',
        'faUser',
        'faArrowRight',
        'faArrowLeft',
        'faShareAlt',
        'faThumbsUp',
        'faTimesCircle'
      ],
      brands: ['faGithub', 'faTwitter', 'faLinkedin']
    }
  },
  tailwindcss: {
    exposeConfig: true
  },
  webfontloader: {
    google: {
      families: [
        'Cabin:300,400,600,700&display=swap',
        'Open+Sans:300,400&display=swap'
      ]
    },
    //Eventually want to add Uni Neue W05 Regular, Bold, Semibold, Italic from
    monotype: {}
  }
}
