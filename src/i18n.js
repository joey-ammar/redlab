import { createI18n } from 'vue-i18n'
import en from "./locals/en.json"
import de from "./locals/de.json"

const messages = {
    en,
    de
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