import colors from 'vuetify/es5/util/colors'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  
  //STORYBOOK
  storybook: {
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
    ]
  },

  server: {
    // host: '192.168.1.5' // default: localhost
    // port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bitss',
    title: 'bitss',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n'
  ],
  
  //ANALYTICS
  // buildModules: [
  //   ['@nuxtjs/google-analytics', {
  //     id: 'UA-12301-2'
  //   }]
  // ]
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#7D499D',
          secondary: '#80479C',
          textPrimary: '#422265',
          background: '#EEE1F6',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  //i18n Translation
  i18n: {
    locales:  [ 
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'zh', iso: 'zh-HK', file: '../i18n/hk.js'},
      { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          homepage: {
            banner: {
              bannerTitle: 'Shortened URL,',
              bannerSubTitle1: 'Branded',
              bannerSubTitle2: '&',
              bannerSubTitle3: 'Decrypted',
              bannerCaption: 'Say hello to branded human-readable links.',
              bannerLink: 'watch.bitss.intro.video',
            },
            form: {
              textfieldLinkPlaceholder: 'Place your target link here...',
              textfieldBrandPlaceholder: 'What is your brand?',
              btnSubmit: 'Create'
            },
          },
          login: {
            pageTitle: 'Sign in to your account',
            form: {
              namePlaceholder: 'Name',
              emailPlaceholder: 'Email',
              submit: 'Sign in',
              rememberMe: 'Remember me',
              forgotPassword: 'Forgot password?',
            }
          },
          register: {
            pageTitle: 'Create an account',
            form: {
              namePlaceholder: 'Name',
              emailPlaceholder: 'Email',
              submit: 'Register',
              termsConditions: 'Agree on Terms and Conditions',
              forgotPassword: 'Forgot password?',
            }
          },
        },
        fr: {
          welcome: 'Bienvenue',
          homepage: {
            banner: {
              bannerTitle: 'URL raccourcie, d??crypt??e.',
              bannerSubTitle: 'Dites bonjour aux liens lisibles par lhomme.',
              bannerLink: 'https://communicate.effectively.today',
            },
          },
        },
        zh: {
          homepage: {
            banner: {
              bannerTitle: 'URL?????????????????????',
              bannerSubTitle: '????????????????????????????????????',
              bannerLink: 'https://communicate.effectively.today',
            },
            form: {
              textfieldLinkPlaceholder: '?????????????????????????????????...',
              textfieldBrandPlaceholder: '????????????????????????',
              btnSubmit: '??????',
            },
          },
          login: {
            pageTitle: '?????????????????????',
            form: {
              rememberMe: '????????????',
              forgotPassword: '?????????????',
              namePlaceholder: '??????',
              emailPlaceholder: '????????????',
              submit: '????????????'
            }
          },
          register: {
            pageTitle: '??????????????????',
            form: {
              namePlaceholder: 'Name',
              emailPlaceholder: 'Email',
              submit: 'Register',
              termsConditions: 'Agree on Terms and Conditions',
              forgotPassword: 'Forgot password?',
            }
          },
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
