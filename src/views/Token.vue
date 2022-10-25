<script setup>
      import {ref, computed, reactive, nextTick} from 'vue'
      const form = reactive({
            email: '',
            name: '',
            label: null,
            checked: [],
        })
        const labels = [{text: 'Select One', value: null}, 'frontend', 'Backend', 'management', 'HR']
  const show = ref(true)

  const onSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify(form))
  }

  const onReset = (event) => {
    event.preventDefault()
    // Reset our form values
    form.email = ''
    form.username = ''
    form.labels = null
    form.checked = []
    // Trick to reset/clear native browser form validation state
    show.value = false
    nextTick(() => {
      show.value = true
    })
  }
</script>
<template>
    <b-card class="space">
        <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
            >
            <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
            ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Your Username:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.username"
                placeholder="Enter name"
                required
            ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="label" label-for="input-3">
            <b-form-select id="input-3" v-model="form.label" :options="labels" required></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
            <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
            >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        </div>
  </b-card>
</template>
<style scoped lang="scss">
    .space {
        padding: 10rem;
    }
</style>