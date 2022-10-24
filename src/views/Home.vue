<script setup>
    import i18n from '../i18n';
    const {t, locale} = i18n.global;
    let lang = {
        en: locale.value = 'en',
        ja: locale.value = 'ja'
    }

</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">

        <select v-model="locale">
            <option :value="lang.en">en</option>
            <option :value="lang.ja">ja</option>
        </select>

        {{t('hello')}}

        <h1>Red<font-awesome-icon class="red" :icon="['fas', 'flask']" />Lab</h1>
        <h1>You Have the Access Token credentials</h1>
        {{t('name')}}
    </div>
    
</template>

<style scoped lang="scss">

    select {
        position: absolute;
        top: 4rem;
        right: 4rem;
    }

    .main {
        height: 100vh;
        background-color: #eaedef;   
        position: relative;                                                                                                                        
    }

    .red {
        color: #dd594a;
    }

</style>
