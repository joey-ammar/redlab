<script setup>
    import { useCounterStore } from '@/stores/counter'
    import { NameOfUser } from '@/stores/name'
    import { NameOfUsers } from '@/stores/users'
    import {ref} from "vue"
    const counter = useCounterStore();
    const name = NameOfUser();
    const users = NameOfUsers();


    users.getList();
    let allP = users.allPeople;
    allP.forEach(element => {
        element.data.forEach(e => {
            console.log(e.name)
        })
    });

    counter.$patch({ count: counter.count + 1 })
    counter.increment()
    const {getName} = name;
    let ChangeName = () => {
        name.$patch({username: "Mike"});
    }

</script>

<template>
    <div class="main d-flex flex-column justify-content-center align-items-center">
        {{$t('hello')}} 
        <h1>LIST</h1>
        
        <ul>
            <li v-for="names in allP">
                <li v-for="n in names.data">
                    {{n.name}}
                </li>
            </li>
        </ul>
        
        <h1>Red<font-awesome-icon class="red" :icon="['fas', 'flask']" />Lab</h1>
        <h1>Welcome {{name.username}} You have the access Token!</h1>
        <button @click="ChangeName">Change Name</button>
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
