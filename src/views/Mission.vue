<template>
    <div>
        <GameStartScreen
        v-bind:title="post.title"
        v-bind:content="post.content"
        v-bind:startScreen="post.backgroundImg"/>
    </div>
</template>
<script>

import GameStartScreen from '../components/gameUi/GameStartScreen.vue'
import axios from 'axios'
export default({
    name: 'Home',
    components: {
        GameStartScreen
    },
    data() {
        return {
        post:null
        }
    },
    setup() {
        
    },
    methods: {
        async fetchData () {
            const splitUrl = window.location.href.split('/')
            const id = splitUrl[4]
            const res = await axios.get('http://localhost:6590/v1/mission/' +id, {
            })
            this.post = res.data.data
            console.log(this.post)
        },
        
    },
    mounted () {
        this.fetchData()
    }  
})
</script>
