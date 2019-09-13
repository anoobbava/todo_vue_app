<template>
  <div>
    <v-toolbar dark>
        <v-toolbar-title
          @click="redirectToHome">My todos
        </v-toolbar-title>

      <div class="flex-grow-1"></div>
      <v-toolbar-items v-if="isLoggedIn">
        <v-btn text >Add Todo</v-btn>
        <v-btn text
        @click="logoutAction"
        >SignOut</v-btn>
      </v-toolbar-items>

      <v-toolbar-items v-else>
        <v-btn text>Register</v-btn>
        <v-btn text @click="redirectToLogin">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  methods: {
    ...mapActions(['logoutAction']),
    redirectToHome () {
      this.$router.push('/')
    },

    redirectToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
