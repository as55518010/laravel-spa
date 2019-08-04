<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">登入</div>

                    <div class="panel-body">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<<script>
import LoginForm from './LoginForm'
export default {
    components:{
        LoginForm
    }
}
</script>