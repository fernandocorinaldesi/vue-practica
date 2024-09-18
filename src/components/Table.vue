<template>
    <v-data-table :headers="headers" :items="datos" item-key="name"></v-data-table>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue'

const datos = ref([])
const URL = 'https://jsonplaceholder.typicode.com/todos'
const headers = [
    { title: 'User id', align: 'start', key: 'userId' },
    { title: 'id', align: 'end', key: 'id' },
    { title: 'title', align: 'end', key: 'title' },
    { title: 'completado', align: 'end', key: 'completed' },
  ]

async function llamadaApi() {
    try {
        let response = await fetch(URL)
        if (!response) {
            throw new Error('Problema en la api');
        }
        datos.value = await response.json()
    } catch (error) {
        console.log(error)
    }
}


onBeforeMount(async () => {
    await llamadaApi()
})

</script>





<style scoped></style>
