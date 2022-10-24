<script setup>
    import {ref} from "vue"
    import i18n from '../i18n.js';

    let t = i18n.global.t;

    const selected = ref('en')

    const options = ref([
        { text: 'English', value: 'en' },
        { text: 'Deutsch', value: 'de' },
    ])

</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">

        <select v-model="selected">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>

        <div>Selected: {{ selected }}</div>

        <h1>{{t('hi')}}</h1> 
        {{selected}}
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
