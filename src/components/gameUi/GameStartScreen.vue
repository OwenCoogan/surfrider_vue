<template>
    <div class="gameStartScreen">
        <div class="absolute--content">
            <h2 class="game--title">Coastline In Danger</h2>
            <h2>{{title}}</h2>
            <p>{{content}}</p>
            <input type="text" name="name" placeholder="Votre Prénom" v-on:change="event => logName(event)">
            <NextSlideButton
            v-bind:text="'Commencer'"
            />
        </div>
        <StartScreenIllustration/>
        
    </div>
</template>
<script>
import StartScreenIllustration from '../illustrations/StartScreenIllustration.vue'
import NextSlideButton from '../gameUi/NextSlide.vue'
export default({
    props: ['title','content','startScreen'],
    setup() {
        
    },
    methods:{
        logName(event){
            localStorage.player = event.target.value
        }
    },
    components: {
        StartScreenIllustration,
        NextSlideButton
    }
})
</script>
