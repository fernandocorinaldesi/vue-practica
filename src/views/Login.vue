<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Username:</label>
          <input v-model="username" id="username" type="text" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" id="password" type="password" />
        </div>
        <button type="submit">Login</button>
        <p v-if="loginError">{{ loginError }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const auth = useAuthStore()
      const router = useRouter()
      const username = ref('')
      const password = ref('')
      const loginError = ref('')
  
      async function handleLogin() {
        loginError.value = '' // Reset error message
        auth.login(username.value, password.value)
        if (auth.isAuthenticated) {
          router.push('/') // Redirige a la página de inicio después de un login exitoso
        } else {
          loginError.value = 'Invalid username or password'
        }
      }
  
      return { username, password, handleLogin, loginError }
    }
  }
  </script>
  