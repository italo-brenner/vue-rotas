import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Contatos from './views/contatos/Contatos'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/contatos', component: Contatos },
    { path: '/', component: Home }
  ]
})
