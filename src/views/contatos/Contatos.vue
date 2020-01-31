<template>
  <div>
    <ContatosLista />
    <router-view></router-view>
    <router-view name="contato-detalhes"></router-view>
  </div>
</template>

<script>

import ContatosLista from './../../components/contatos/ContatosLista'

export default {
  components: {
    ContatosLista
  }
}
</script>