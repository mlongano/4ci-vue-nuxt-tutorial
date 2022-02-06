import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin( () => {
    return {
        provide: {
            hello: () => 'world',
            img_placeholder: () => 'https://source.unsplash.com/l3Jdvs1Qui4/800x600'
        }
    }
} )