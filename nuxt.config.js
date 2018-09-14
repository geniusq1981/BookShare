module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bookshare',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'bookshare Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'/common/common.css'}
    ]
  },
  vender:[
    'element-ui'
  ],
  babel:{
    "plugins":[["component",[
      {
        "libraryName":"element-ui",
        "styleLibraryName":"theme-default"
      },
      'transform-async-to-generator',
      'transform-runtime'
    ]]],
    comments:true
  },
  plugins:[
    {src:'~plugins/element-ui',ssr:true}
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  // ... 
  modules: [ '@nuxtjs/axios', ], 
  axios: { prefix: '/api/', proxy: true // Can be also an object with default options 
  },
  proxy: { '/api/': { target: 'http://localhost:8080', pathRewrite: {'^/api/': ''} }} 

}

