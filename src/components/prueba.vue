<template>
    <div>
        <button @click="agregar">agregar</button>
        <button @click="filtrar">filtrar</button>

        <input v-model="text" type="text">
        <ul>
            <li v-for="(item, index) in lista">{{ item.title }} : {{ item.completed }}</li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const texto = 'ESTE ES MI PRIMER COMPONENTE'

const lista = ref([])
let text = ''

function agregar() {
    llamadaApi()
}

function filtrar() {
lista.value =  lista.value.filter(e=>e.completed)

}

function llamadaApi() {
    fetch("https://192.168.1.16/usuarios").then(response => {
        return response.json()
    }).then(data => {
        lista.value = data
    })
}

</script>

<style scoped>
div {
    background-color: aqua;
}
</style>