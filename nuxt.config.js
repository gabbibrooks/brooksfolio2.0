import { getMetadata } from './utils/meta'
import { formatDate } from './utils/date'
const readingTime = require('reading-time')
const meta = getMetadata()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // server: {
  //   host: '0.0.0.0', //set to active to test mobile
  //   port: 8000
  // },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Zachary Brooks',
    meta: [
      ...meta,
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/global.css',
    'node_modules/lite-youtube-embed/src/lite-yt-embed.css',
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/youtube.client.js'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
    '@nuxtjs/cloudinary',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    'vue-plausible',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      // Adding reading time for markdown documents
      if (document.extension === '.md') {
        const { text } = readingTime(document.text)
        const formattedCreatedAtDate = formatDate(document.createdAt)

        document.readingTime = text
        document.formattedCreatedDate = formattedCreatedAtDate
      }
    },
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: 'var(--color-primary)',
    background: 'var(--color-bg-primary)',
  },
  //Module Configuration
  cloudinary: {
    cloudName: 'zacharybrooks-dev',
    useComponent: true,
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  content: {
    markdown: {
      remarkAutolinkHeadings: {
        behavior: 'append',
        linkProperties: {
          ariaHidden: 'true',
          tabIndex: '-1',
          title: 'Link to Section',
          className: ['[ heading-permalink ] [ not-external-link ]'],
        },
        content: {
          type: 'element',
          tagName: 'span',
          children: [
            {
              type: 'element',
              tagName: 'svg',
              properties: {
                height: '1em',
                width: '1em',
                viewBox: '0 0 24 24',
                fill: 'currentColor',
                ariaHidden: 'true',
                focusable: 'false',
              },
              children: [
                {
                  type: 'element',
                  tagName: 'path',
                  properties: {
                    d:
                      'M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z',
                  },
                },
              ],
            },
          ],
        },
      },
      remarkExternalLinks: {
        content: {
          type: 'element',
          tagName: 'svg',
          properties: {
            className: ['icn'],
            style: ['stroke-linecap: round;', 'stroke-linejoin: round;'],
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor',
          },
          children: [
            {
              type: 'element',
              tagName: 'path',
              properties: {
                d:
                  'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
              },
            },
          ],
        },
        contentProperties: {
          className: ['external-link'],
        },
      },
      prism: {
        theme: './assets/css/prism-cobalt2.css',
      },
    },
  },
  plausible: {
    domain: 'zacharybrooks.dev',
  },
  sitemap: {
    hostname: 'https://zacharybrooks.dev',
    gzip: true,
  },
  webfontloader: {
    google: {
      families: [
        'Varela:300,400,500,600,700&display=swap',
        'Open+Sans:300,400&display=swap',
      ],
    },
    //Eventually want to add Uni Neue W05 Regular, Bold, Semibold, Italic from
    monotype: {},
  },
}
