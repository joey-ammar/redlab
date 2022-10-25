<script setup>
    import { useCounterStore } from '@/stores/counter'
    const counter = useCounterStore();
    counter.$patch({ count: counter.count + 1 })
    counter.increment()
    console.log(counter.name);
    let name = counter.name;
</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">
        {{$t('hello')}}
        {{counter.count}}
        <h1>Red<font-awesome-icon class="red" :icon="['fas', 'flask']" />Lab</h1>
        <h1>Welcome {{name}} You have the access Token!</h1>
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
