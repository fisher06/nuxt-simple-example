const config = {
  mode: 'universal',
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title:
      'Little Cigogne : Le service qui simplifie le shopping des parents !',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  webfontloader: {
    google: {
      // Loads Poppins font with weights 400, 500, 600, and 700 + display font as swap
      families: ['Poppins:400,500,600,700&display=swap']
    }
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/eslint-module', '@nuxtjs/style-resources', '@nuxtjs/axios', 'nuxt-i18n'],
  plugins: [
    '~/plugins/axios',
    '~/plugins/native-function',
    '~/plugins/format-data'
  ],
  i18n: {
    locales: [{
      code: 'fr',
      file: 'fr-FR.js'
    }],
    defaultLocale: 'fr',
    langDir: 'locales/'
  },
  /*
   ** Build configuration
   */
  build: {
    /**
     * Babel configuration
     * more: https://github.com/nuxt/nuxt.js/blob/4ca253e0b82980daa6912070ec54127d12acd169/packages/babel-preset-app/README.md
     */
    babel: {
      presets({ envName }) {
        const envTargets = {
          client: {
            browsers:
              'last 2 versions, safari >= 7, ios_saf >= 7, chrome >= 52',
            ie: 11
          },
          server: { node: 'current' }
        };
        return [
          [
            '@nuxt/babel-preset-app',
            {
              targets: envTargets[envName],
              corejs: { version: 3 },
              useBuiltIns: 'entry'
            }
          ]
        ];
      }
    }
  },
  css: ['~/assets/main.scss'],
  styleResources: {
    scss: ['~/assets/nuxt-variables.scss']
  },
  buildModules: [
    [
      '@nuxtjs/eslint-module',
      {
        fix: true
      }
    ],
    ['@nuxtjs/vuetify', {
      defaultAssets: {
        font: {
          family: 'Roboto'
        },
        icons: 'md'
      }
    }]
  ]
};

// Enable https on localhost when env var HTTPS is set to '1' or 'true'.
// Should be set for development only.
// nuxt only, does not work when running 'node server/index.js'
if (process.env.HTTPS === 'true' || process.env.HTTPS === '1') {
  config.server = {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem'))
    }
  };
}

module.exports = config;
