<template>
    <h2>PINIA 1</h2>
    <div>
      {{ store.count }}
    </div>
    <div>
        <button @click="store.increment">increment</button>
    </div>
</template>

<script setup>

import {useCounterStore} from '../stores/counter'

const store =  useCounterStore()


</script>

<style lang="scss" scoped>


</style>