<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#app-navbar-collapse" class="navbar-toggle collapsed"><span class="sr-only">Toggle Navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                <router-link to="/" class="navbar-brand" exact>Vue-SPA</router-link>
            </div>
            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <ul class="nav navbar-nav"></ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link v-if="!user.authenticated" to="/login" tag="li">
                        <a>登入</a>
                    </router-link>
                    <router-link v-if="!user.authenticated" to="/register" tag="li">
                        <a>註冊</a>
                    </router-link>
                    <router-link v-if="user.authenticated" to="/profile" tag="li">
                        <a>個人中心</a>
                    </router-link>
                    <li v-if="user.authenticated">
                        <a href="#">退出登入</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                user:state =>state.AuthUser
            })
        },
    }
</script>
