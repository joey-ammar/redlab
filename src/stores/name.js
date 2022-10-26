import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const NameOfUser = defineStore('Name', () => {
    let username = ref("JOEY");
    let getName = computed(() => username.value + "Is my Name")
    function changeNmae() {
        username.value  = "MIKE"
    }
    return {username, changeNmae, getName}
})