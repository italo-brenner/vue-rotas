import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Contatos from './views/contatos/Contatos'
import ContatosHome from './views/contatos/ContatosHome'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      children: [
        { path: '/contatos/:id', component: ContatoDetalhes, name: 'contato' },
        { path: '', component: ContatosHome }
      ]
    },
    { path: '/', component: Home }
  ]
})
