<template>
    <div class="gameStartScreen">
        <div class="absolute--content">
            <h2 class="game--title">Coastline Challenge</h2>
            <h2>{{title}}</h2>
            <p>{{content}}</p>
            <input type="text" name="name" class="name-input" placeholder="Votre Prénom" v-on:change="event => logName(event)">
            <NextSlideButton class="blue--large"
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
