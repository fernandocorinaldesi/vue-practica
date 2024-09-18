<template>
    <Hijo title="Mi Título" description="Esta es una descripción pasada como prop" />
    <Hijo :title="titulo" :description="descripcion" />

  </template>
  
  <script setup>
  import Hijo from './Hijo.vue'

  const titulo = "Mi Título"
   const descripcion = "Esta es una descripción pasada como prop"
  </script>
  