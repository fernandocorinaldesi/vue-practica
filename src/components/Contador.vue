<template>
  <div>
    <button @click="aumentar">aumentar</button>
    <button @click="disminuir">dismunir</button>
    <div>contador: {{contador}}</div>
  </div>
</template>

<script setup>
import  {ref} from 'vue'

const contador = ref(0)

function aumentar (){
   contador.value++
}
function disminuir (){
   contador.value--
}
</script>