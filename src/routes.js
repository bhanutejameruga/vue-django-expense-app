import Vue from 'vue'
import VueRouter from 'vue-router'
//import homepage from './views/homepage'
import Register from './views/Register'
import Login from './views/Login'
import Income from './views/Income'
import Incomerecord from './views/Incomerecord'
import Daybook from './views/Daybook'
import Expenses from './views/Expenses'
import Profile from './views/Profile'
//import Logout from './views/Logout'
import Changepassword from './views/Changepassword'
import ForgotPassword from './views/ForgotPassword'
//import Reset from './views/Reset'
import Dashboard from './views/Dashboard'
//import leftside from './views/leftside'
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        
        {
            path: '/',
            name: 'Login',
            component: Login,
            
        },
        {
            path: '/Incomerecord',
            name: 'Incomerecord',
            component: Incomerecord,
        },
       
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/Changepassword',
            name: 'Changepassword',
            component: Changepassword,
        },
        {
            path: '/Expenses',
            name: 'Expenses',
            component: Expenses,
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
        {
        path: '/Daybook',
        name: 'Daybook',
        component: Daybook,
        },
        {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard,
        },
     
        {
            path: '/Income',
            name: 'Income',
            component: Income,
        },
   
      
    ]
}
)