<template>
    <div>
        <span>numero 1 </span><input v-model="number1" type="number">
        <span>numero 2 </span><input v-model="number2" type="number">
        <div>resultado: {{calcular}}</div>
    </div>
  </template>
  
  <script setup>
  import  {computed, ref} from 'vue'
  
  const number1 = ref(0)
  const number2 = ref(0)

  const calcular =  computed(()=>{
    return number1.value+number2.value
  })  

  </script>