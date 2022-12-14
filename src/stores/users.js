import { defineStore } from 'pinia'

import { ref, computed } from 'vue'
// Import axios to make HTTP requests
import axios from "axios"

export const NameOfUsers = defineStore('users', () => {
    let people = ref([]);

    let allPeople = computed(() => people.value);
   
        
  
    async function getList()  {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users');
        setTimeout(() => people.value.push(data), 2000);
    }

    return {allPeople, getList}
})
