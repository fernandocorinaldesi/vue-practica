<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/calculadora">Calculadora(computed)</RouterLink>
        <RouterLink to="/tabla">Tabla</RouterLink>
        <RouterLink to="/ciclo-vida">Ciclo de vida</RouterLink>
        <RouterLink to="/prop">Prop</RouterLink>
        <RouterLink to="/pinia">Pinia</RouterLink>
        <RouterLink to="/solo-logeados">Solo logeados</RouterLink>

      </nav>
    </div>
    <button @click="login">logearme/deslogearme</button>
    <div>ESTADO ACTUAL LOGEADO :{{ auth.isLogged }} </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { authStore } from './stores/auth'
const auth = authStore()


function login() {
  auth.login()
}

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
