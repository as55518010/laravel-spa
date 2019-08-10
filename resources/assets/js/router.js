import VueRouter from 'vue-router'
import Store from './store/index'
import jwtToken from './helpers/jwt'

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: {requiresGuest: true}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: {requiresGuest: true}
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {}
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta:{requiresAuth:true}
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to,from,next)=>{
    console.log(to.meta.requiresAuth,Store.state.AuthUser.authenticated,jwtToken.getTonken())
    if (to.meta.requiresAuth) {
        if (Store.state.AuthUser.authenticated || jwtToken.getTonken()) {
            return next()
        } else {
            return next({'name': 'login'})
        }
   }
   next()
})

export default router