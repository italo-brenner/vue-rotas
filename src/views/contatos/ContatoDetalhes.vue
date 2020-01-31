<template>
  <div>
    <h3 class="font-weight light">Detalhes sobre o contrato com id: {{ id }}</h3>
    <router-link
      :to="`/contatos/${id}/editar`"
      class="btn btn-primary">
      
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  created() {
    console.log('Parâmetros da rota: ', this.$route.params)
  }
}
</script>