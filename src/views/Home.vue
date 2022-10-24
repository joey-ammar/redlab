<script setup>

</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">
        <select>
            <option>English</option>
            <option>Deutsch</option>
        </select>
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
