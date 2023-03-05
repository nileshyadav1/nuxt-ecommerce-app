export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Handycart',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {name: 'robots', content: 'index,follow'} ,
      {hid:'og:type',name:'og:type',property:'og:type',content:'website'},
      {hid:'og:locale',name:'og:locale',property:'og:locale',content:'en_US'},
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lazysizes.client.js',
    '~/plugins/components.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/robots',
    // SiteMap should be last item
    '@nuxtjs/sitemap',
  ],
  robots: {
    Sitemap:'https://www.handycart.com/sitemap.xml',
    UserAgent: '*',
  },

  sitemap:{
    hostname: 'https://www.handycart.com',
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    },

    
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient, isDev, loaders: { vue } }) {
      vue.transformAssetUrls.LazyImage = ["src"]; 
   },
  }
}
