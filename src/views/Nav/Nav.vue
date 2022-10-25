<script setup>
     import { useRouter, useRoute } from 'vue-router'
     import i18n from '../../i18n';
     const {t, locale} = i18n.global;
    let lang = {
        en: locale.value = 'en',
        de: locale.value = 'de'
    }
</script>
   
<template>

 

  <div class="nav">
        <b-nav tabs>
        <router-link to="/">
            <b-nav-item>Home</b-nav-item>
        </router-link>
        <router-link to="/token">
            <b-nav-item>Settings</b-nav-item>
        </router-link>
        <select v-model="locale">
            <option :value="lang.en">en</option>
            <option :value="lang.de">de</option>
        </select>
    </b-nav>
  </div>

</template>

<style scoped lang="scss">
    .nav {
        display: flex;
        flex-direction: row;
        justify-content: right;
        a {
            text-decoration: none;
        }
    }
</style>