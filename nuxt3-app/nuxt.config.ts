import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    publicRuntimeConfig: {
        API_BASE: '/api'
    },
    privateRuntimeConfig: {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
    },
})
