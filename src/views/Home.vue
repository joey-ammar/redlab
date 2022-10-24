<script setup>
    import i18n from '../i18n.js';
    let t = i18n.global.t;
    let values = i18n.global.locale.value;
    let en = i18n.global.messages.value.en;
    let de = i18n.global.messages.value.de;
    console.log(i18n.global.locale)
</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">
        <select v-model="values">
            <option :value="en">English</option>
            <option :value="de">Deutsch</option>
        </select>
       
        <h1>{{t('hi')}}</h1> 
        <h1>Red<font-awesome-icon class="red" :icon="['fas', 'flask']" />Lab</h1>
        <h1>You Have the Access Token credentials</h1>
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
