import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
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
      children: [
        { path: ':id', component: ContatoDetalhes, name: 'contato' },
        {
          path: ':id/editar',
          components: {
            default: ContatoEditar,
            'contato-detalhes': ContatoDetalhes
          }
        },
        { path: '', component: ContatosHome, name: 'contatos' }
      ]
    },
    { path: '/home', component: Home },
    {
      path: '/',
      redirect: to => {
        return { name : 'contatos' }
      }
    }
  ]
})
