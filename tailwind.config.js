module.exports = {
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1280px'
    },
    flex: {
      '1': '1 0 auto'
    },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
      sans: ['Varela', 'sans-serif'] //new main font?
    },
    fontStyle: {
      italic: 'italic'
    },
    typography: theme => ({
      default: {
        css: {
          color: 'var(--color-text-primary)',
          h1: {
            position: 'relative',
            color: 'var(--color-text-primary)',
            scrollSnapMarginTop: '6rem',
            scrollMarginTop: '6rem',
            paddingBottom: '.25rem'
          },
          h2: {
            position: 'relative',
            color: 'var(--color-text-primary)',
            scrollSnapMarginTop: '6rem',
            scrollMarginTop: '6rem',
            paddingBottom: '.25rem'
          },
          h3: {
            color: 'var(--color-text-primary)',
            scrollSnapMarginTop: '6rem',
            scrollMarginTop: '6rem'
          },
          blockquote: {
            borderLeft: '4px solid var(--color-border-primary)',
            paddingLeft: 'calc(var(--space) / 2)',
            color: 'var(--color-text-primary)'
          },
          strong: {
            color: 'var(--color-text-primary)',
            fontWeight: theme('fontWeight.semibold')
          },
          small: {
            fontSize: theme('fontSize.sm')
          },
          p: {
            marginTop: '1.25em',
            marginBottom: '1.25em'
          },
          a: {
            // color: 'var',
            // '&:hover': {
            //   color: '#2F40EB',
            // },
          },
          em: {
            fontStyle: theme('fontStyle.italic')
          },
          code: {
            color: '#f7fafc',
            fontWeight: '400',
            fontSize: '.875em',
            backgroundColor: '#2d3748',
            padding: '.25rem',
            borderWidth: '0',
            borderColor: '#edf2f7',
            borderRadius: '.25rem'
          }
        }
      }
    }),
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        tertiary: 'var(--color-bg-tertiary)',
        inverse: 'var(--color-bg-inverse)',
        code: 'var(--color-bg-code)',
        accent: 'var(--color-primary)',
        navigation: 'var(--color-bg-navigation)'
      },
      textColor: {
        initial: 'var(--color-primary)',
        'initial--muted': 'var(--color-primary--muted)',
        primary: 'var(--color-text-primary)',
        'primary--muted': 'var(--color-text-primary--muted)',
        'internal-link': 'var(--color-text-internal-link)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        nav: 'var(--color-text-nav)',
        inverse: 'var(--color-text-inverse)',
        success: 'var(--color-text-success)',
        error: 'var(--color-text-error)'
      },
      spacing: {
        '-12': '-3rem',
        '1/2': '50%',
        '15': '3.75rem',
        '30': '7.5rem',
        '35': '2.1875rem',
        '75': '4.6875rem',
        '85': '5.3125rem',
        px10: '10px',
        px64: '64px',
        px82: '82px',
        px300: '300px',
        px320: '320px',
        px340: '340px',
        px900: '900px'
      },
      opacity: {
        inherit: 'inherit',
        '80': 0.8,
        '90': 0.9
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        'primary-muted': 'var(--color-border-primary--muted)',
        inverse: 'var(--color-border-inverse)',
        'text-primary': 'var(--color-text-primary)'
      },
      borderRadius: {
        '1/2': '50%'
      },
      boxShadow: {
        base: 'var(--box-shadow)',
        lg: 'var(--box-shadow--lg)'
      },
      gridTemplateColumns: {
        'full': '100%',
        'projects': 'minmax(0,1fr) minmax(0,1fr)'
      },
      gridTemplateRows: {
        'auto': 'auto auto',
        'auto-1': 'auto 1fr'
      },
      height: {
        auto: 'auto',
        '14': '0.875rem',
        'screen-1/4': '25vh',
        'screen-1/3': '33vh',
        'screen-1/2': '50vh',
        '3/4': '75%'
      },
      inset: {
        '-7': '-0.4375rem',
        '-15': '-0.9375rem',
        '-20': '-1.25rem',
        '-25': '-1.5625rem',
        '-85': '-5.3125rem',
        '16': '4rem',
        '100px': '100px',
        '1/2': '50%',
        full: '100%'
      },
      width: {
        auto: 'auto',
        '14': '0.875rem',
        '3/4': '75%',
        '90': '90%'
      },
      minHeight: {
        '33': '33vh',
        '38': '38vh',
        px250: '250px',
        px275: '275px',
        px300: '300px',
        'screen-w-footer': 'calc(100vh - 112px)'
      },
      minWidth: {
        '70': '70%'
      },
      maxWidth: {
        '500': '500px',
        '800': '800px',
        '900': '900px',
        '1080': '1080px',
        '1250': '1250px',
        '1/2': '50%',
        'screen-1/2': '50vw'
      },
      maxHeight: {
        '400px': '400px',
        '300': '300px',
        '600': '600px'
      },
      zIndex: {
        '-1': '-1',
        '2': 2,
        '1000': 1000
      }
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus'],
    transitionDuration: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'hover', 'first']
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'content/**/*.md',
      'content/**/*.yml',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: [/svg.*/],
      extractors: [
        {
          extractor: content => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches =
              content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

            return broadMatches.concat(innerMatches)
          },
          extensions: ['vue', 'js', 'jsx', 'md', 'html']
        }
      ]
    }
  }
}
