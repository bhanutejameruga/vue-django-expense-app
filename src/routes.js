import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from './views/homepage'
import Register from './views/Register'
import Login from './views/Login'
//import Logout from './views/Logout'
import ForgotPassword from './views/ForgotPassword'
//import Reset from './views/Reset'
//import Dashboard from './views/Dashboard'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        
        {
            path: '/',
            name: 'homepage',
            component: homepage,
            meta: {
                requiresLogin: true
            }
        },
       
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/ForgotPassword',
            name: 'ForgotPassword',
            component: ForgotPassword,
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
       
       // {
          //  path: '/Dashboard',
            //name: 'Dashboard',
            //component: Dashboard,
        //},

        


    ]
}
)