import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const root = document.createElement('div')
document.body.appendChild(root)


const User = {
    template: '<div>User  {{ $route.params.username }} {{ $route.params.post_id }}</div>',
    watch: {
        '$route'(to, from) {
            console.log(to, from)
        }
    }
}

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        { path: '/user/:username/post/:post_id', component: User }
    ]
})

const app = new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)