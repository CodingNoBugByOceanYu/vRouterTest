<template>
    <div id="app">
        <router-view />
        <button @click="goBack"> 后退 </button>
        <button @click="goForword"> 前进 </button>
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
                : this.$router.push('/user/hugh')
            },
        goForword () {
            window.history.length > 1
                ? this.$router.go(1)
                : this.$router.push('/user/hugh')
            },
        
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
