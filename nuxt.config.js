const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#FFFFFF' },

    /*
     ** Global CSS
     */
    css: [
        'vuetify/src/stylus/main.styl'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuetify'
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/auth',
        '@nuxtjs/axios',
        '@nuxtjs/onesignal', ['@nuxtjs/pwa', {
            manifest: {
                "name": "Washman",
                "short_name": "washman",
                "lang": "en-US",
                "description": "Washman PWA App"
            }
        }],
        '@nuxtjs/vendor',
        '@nuxtjs/sitemap',
        '@nuxtjs/component-cache',
    ],
    oneSignal: {
        init: {
            appId: '3bac4022-18c3-4015-a9e0-07ad5f83515f',
            allowLocalhostAsSecureOrigin: true,
            notifyButton: {
                enable: true,
            },
            welcomeNotification: {
                disable: false
            }
        }
    },
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        vendor: ["vuetify", "axios"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
            if (ctx.isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        }
    }
}