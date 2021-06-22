<template>
    <div >
        <Carousel :per-page="1" :mouse-drag="false">
            <slide>
                <GameStartScreen
                v-bind:title="post.title"
                v-bind:content="post.content"
                v-bind:startScreen="post.backgroundImg"/>
            </slide>
            <slide>
                <Question1/>
            </slide>
            <slide>
                <Question2/>
            </slide>
            <slide>
                <Question3/>
            </slide>
        </Carousel>
    </div>
</template>
<script>

import GameStartScreen from '../components/gameUi/GameStartScreen.vue'
import Question1 from '../components/gameUi/Question1.vue'
import Question2 from '../components/gameUi/Question2.vue'
import Question3 from '../components/gameUi/Question3.vue'
import { Carousel, Slide } from 'vue-carousel';
import axios from 'axios'
export default({
    name: 'Home',
    components: {
        GameStartScreen,
        Question1,
        Question2,
        Question3,
        Carousel,
        Slide
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
        },
        
    },
    mounted () {
        this.fetchData()
    }  
})
</script>
