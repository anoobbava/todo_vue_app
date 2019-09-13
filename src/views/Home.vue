<template>
  <div>
    <h3>welcome {{this.userName}}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName'])
  }
}
</script>
