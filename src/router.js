import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Erro404 from './views/Erro404'
import Erro404Contatos from './views/contatos/Erro404Contatos'
import Contatos from './views/contatos/Contatos'
import ContatosHome from './views/contatos/ContatosHome'
import ContatoDetalhes from './views/contatos/ContatoDetalhes'
import ContatoEditar from './views/contatos/ContatoEditar'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/contatos',
      component: Contatos,
      alias: ['/meus-contatos', '/lista-de-contatos'],
      children: [
        { path: ':id', component: ContatoDetalhes, name: 'contato' },
        {
          path: ':id/editar',
          alias: ':id/alterar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        },
        { path: '', component: ContatosHome, name: 'contatos' },
        { path: '/contatos*', component: Erro404Contatos }
      ]
    },
    { path: '/home', component: Home },
    {
      path: '/',
      redirect: to => {
        return { name : 'contatos' }
      }
    },
    { path: '*', component: Erro404 }
  ]
})
