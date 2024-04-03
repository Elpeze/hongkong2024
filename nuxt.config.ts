// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'User Security Summit',
            link: [
                { rel: 'icon', href: 'https://gopluseco.io/favicon.ico' },
                {
                    rel: "stylesheet",
                    href: "//at.alicdn.com/t/c/font_4033046_dl5qz2m5xip.css",
                },
            ],
            meta: [
                { name: 'description', content: 'User Security Summit' }
            ],
            script: [
                // {
                //     src: 'https://cdn.bootcdn.net/ajax/libs/web3/1.9.0/web3.min.js',
                // },
            ]
        }
    },
    
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/device',
        '@element-plus/nuxt',
        '@morev/vue-transitions/nuxt',
        'congi18n'
    ],
    i18n: {
        locales: [
            {
              code: 'en',
              iso: 'en-US',
              file: 'en.js'
            },
            {
              code: 'cn',
              iso: 'zh-CN',
              file: 'cn.js'
            },
        ],
        lazy: true,
        langDir: 'locales',
        defaultLocale: 'en', 
        strategy: 'no_prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
            // alwaysRedirect: true
        }
        // detectBrowserLanguage: false,
        // vueI18n: './i18n.config.v1.ts',
    },

    postcss: {
        plugins: {
            // 这个工具可以实现自动添加CSS3前缀
            "autoprefixer": {
              overrideBrowserslist: ["last 5 version", ">1%", "ie >=8"]
            },
            'postcss-pxtorem': {
                rootValue: 16, // 指定转换倍率，我现在设置这个表示1rem=16px;
                propList: ['*'], // 属性列表，表示你要把哪些css属性的px转换成rem，这个*表示所有
                mediaQuery: false, // 是否允许使用媒体查询，false媒体查询的代码可用，true不可用
                exclude: 'ignore',
                replace: true, // 替换包含rem的规则，而不是添加回退
                minPixelValue: 1, // 需要转换的最小值，一般1px像素不转换，以上才转换
                unitPrecision: 6, // 转换成rem单位的小数点后的保留位数
                selectorBalckList: ["van"], // 匹配不被转换为rem的选择器
            },
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/css/default.scss";'	
                }
            }
        },
    }
})
