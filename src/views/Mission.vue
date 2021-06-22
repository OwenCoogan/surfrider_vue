<template>
    <div>
            <div>
            <GameStartScreen
            v-bind:title="post.title"
            v-bind:content="post.content"
            v-bind:startScreen="post.backgroundImg"/></div>
            <div><Question1/></div>
            <div><Question2/></div>
            <div><Question3/></div>
    </div>
</template>
<script>
import GameStartScreen from '../components/gameUi/GameStartScreen.vue'
import Question1 from '../components/gameUi/Question1.vue'
import Question2 from '../components/gameUi/Question2.vue'
import Question3 from '../components/gameUi/Question3.vue'

import axios from 'axios'
export default({
    name: 'Home',
    components: {
        GameStartScreen,
        Question1,
        Question2,
        Question3
    },
    data() {
        return {
        mission:null
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
            this.mission = res.data.data
            console.log(this.mission)
        },
        
    },
    mounted () {
        this.fetchData()
    }  
})
</script>
