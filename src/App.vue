<template>
  <v-app>
    <v-content>
      <NavBar />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

import NavBar from '@/components/NavBar'
export default {
  name: 'App',

  components: {
    NavBar
  },

  computed: {
    ...mapGetters(['isLoggedIn'])
  },

  data: () => ({
    //
  }),
  created () {
    if (this.isLoggedIn) {
      this.$router.push('/')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>
