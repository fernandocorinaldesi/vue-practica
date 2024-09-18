<template>
    <div>
      <h1>Ciclos de Vida de un Componente</h1>
      <p>Contador: {{ count }}</p>
      <button @click="increment">Incrementar</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  
  // Definir una variable reactiva
  const count = ref(0)
  
  // Función para incrementar el contador
  const increment = () => {
    count.value++
  }
  
  // Ciclo de vida: antes de que el componente se monte
  onBeforeMount(() => {
    alert('El componente está a punto de montarse (onBeforeMount)!')
  })
  
  // Ciclo de vida: cuando el componente se monta
  onMounted(() => {
    alert('El componente ha sido montado (onMounted)!')
  })
  
  // Ciclo de vida: antes de que el componente sea actualizado
  onBeforeUpdate(() => {
    alert('El componente está a punto de actualizarse (onBeforeUpdate)!')
  })
  
  // Ciclo de vida: cuando el componente es actualizado
  onUpdated(() => {
    alert('El componente ha sido actualizado (onUpdated)! El valor de count es: ' + count.value)
  })
  
  // Ciclo de vida: antes de que el componente se desmonte
  onBeforeUnmount(() => {
    alert('El componente está a punto de desmontarse (onBeforeUnmount)!')
  })
  
  // Ciclo de vida: cuando el componente se desmonta
  onUnmounted(() => {
    alert('El componente ha sido desmontado (onUnmounted)!')
  })
  </script>
  