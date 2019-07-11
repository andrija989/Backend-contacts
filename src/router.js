import Vue from 'vue'
import VueRouter from 'vue-router'
import Contacts from './pages/Contacts.vue'
import AddContact from './pages/AddContact.vue'
import Login from './pages/Login.vue'
import { authService } from './services/Auth'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/contacts' },
    { path: '/contacts', component: Contacts, name: 'contacts' },
    { path: '/contacts/:id', component: Contacts, name: 'contact-details' },
    { path: '/add-contact', component: AddContact, name: 'add-contact' },
    { path: '/login', component: Login, name: 'login' }
  ]

export const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next)=> {
    
    if(to.name !== 'login' && !authService.isAuthenticated()) {
        return router.push( {name:'login'}); // reroute na login ako nije ulogovan
    }

    if(to.name == 'login' && authService.isAuthenticated()) {
        return router.push({ name: from.name }) // vraca na stranicu gde si bio pre klika
    }

    next()
})