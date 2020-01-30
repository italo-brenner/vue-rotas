<template>
  <h3 class="font-weight light">Detalhes sobre o contrato com id: {{ $route.params.id }}</h3>
</template>

<script>
export default {
  created() {
    console.log('Parâmetros da rota: ', this.$route.params)
  }
}
</script>