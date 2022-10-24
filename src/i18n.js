import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        hello: 'hello world'
    },
    ja: {
        hello: 'こんにちは、世界'
    }
}

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: messages, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })


export default i18n;