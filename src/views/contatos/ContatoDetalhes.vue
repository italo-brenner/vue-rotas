<template>
  <div v-if="contato">
    <h3 class="font-weight light">Nome: {{ contato.nome }}</h3>
    <p>E-mail: {{ contato.email }}</p>
    <button
      class="btn btn-secondary mr-2"
      @click="$router.back()"
    >
      Voltar
    </button>
    <router-link
      :to="`/contatos/${id}/editar`"
      class="btn btn-primary">
      
      Editar
    </router-link>
  </div>
</template>

<script>

import EventBus from './../../event-bus'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      contato: undefined
    }
  },
  created() {
    this.contato = EventBus.buscarContato(this.id)
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }
}
</script>