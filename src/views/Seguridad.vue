<template>
  <div>
    <h2>Prueba de CORS y Rate Limit</h2>
    <button @click="llamarApi">Llamar API</button>
    <p v-if="cargando">Cargando...</p>
    <p v-if="error" style="color:red">{{ error }}</p>
    <pre v-if="respuesta">{{ respuesta }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const respuesta = ref(null)
const error = ref(null)
const cargando = ref(false)

async function llamarApi() {
  respuesta.value = null
  error.value = null
  cargando.value = true
  try {
    const res = await fetch('http://localhost:3000/test')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    respuesta.value = JSON.stringify(data, null, 2)
  } catch (err) {
    error.value = err.message
  } finally {
    cargando.value = false
  }
}
</script>
