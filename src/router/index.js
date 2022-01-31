import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '../plugins/firebase'
import Home from '../views/Home.vue'
import '../components/NoticiaPost.vue'
import '../components/MeetUp.vue'



Vue.use(VueRouter)

const routes = [
      {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/usuario',
    name: 'Usuario',
    
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
  },
  {
    path: '/sobre',
    name: 'Sobre',
    
    component: () => import(/* webpackChunkName: "sobre" */ '../views/Sobre.vue'),
  
  },
  {
    path: '/cadastrar-noticia',
    name: 'CadastrarNoticia',
    
    component: () => import(/* webpackChunkName: "cadastrar-noticia" */ '../views/CadastrarNoticia.vue'),
    _requiresAuth: true,
    get requiresAuth() {
      return this._requiresAuth
    },
    set requiresAuth(value) {
      this._requiresAuth = value
    },
  },
  {
    path: '/login',
    name: 'Login',
    
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    _requiresAuth: true,
    get requiresAuth() {
      return this._requiresAuth
    },
    set requiresAuth(value) {
      this._requiresAuth = value
    },
  },
    ]
  

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const requiresAuth= to.matched.some(x => x.meta.requiresAuth)

  if(requiresAuth && !auth.currentUser){
  next('/login')
} else {
  next()
}

})




export default router
