import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const root = document.createElement('div')
document.body.appendChild(root)


const UserProfile = { 
    template: `<div>
        <input type="text" v-model='test1' />
    </div>`,
    data() {
        return {
            test1: 111
        }
    }
}
const UserPosts = {
    template: `<div>
        <input type="text" v-model='test2' />
    </div>`,
    data() {
        return {
            test2: 1222
        }
    }
}


const User = {
    template: `<div>
        <h2>User {{ $route.params.id }}</h2>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>`
}

const router = new VueRouter({
    routes: [
        { 
            path: '/user/:id', 
            component: User,
            children: [
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]

        }
    ]
})

const app = new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)