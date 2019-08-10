import Vue from 'vue'
import Vuex from 'vuex'

import AuthUser from './modules/Auth-user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        AuthUser
    }
})