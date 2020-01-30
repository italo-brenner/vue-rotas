<template>
  <h3 class="font-weight light">Detalhes sobre o contrato com id: {{ id }}</h3>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id
    next()
  },
  created() {
    console.log('Parâmetros da rota: ', this.$route.params)
  }
}
</script>