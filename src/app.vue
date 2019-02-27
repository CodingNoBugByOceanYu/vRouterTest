<template>
    <div id="app">
        <p>
            <router-link to="/user/foo/post/1111">Go to Foo</router-link>
            <router-link to="/user/bar/post/2222">Go to Bar </router-link>
        </p>
        <router-view></router-view>

        <div> {{username}} </div>
        <div> {{postId}} </div>

        <button @click="goBack"> back </button>
    </div>
</template>

<script>
export default {
    computed: {
        username () {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.username
        },
        postId() {
            return this.$route.params.post_id
        }
    },
    methods: {
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
            }
    }
}
</script>
<style lang="stylus" scoped>
#app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }

</style>
