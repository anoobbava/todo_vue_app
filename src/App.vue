<template>
  <v-app>
    <v-content>
      <NavBar/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  })
}
</script>
