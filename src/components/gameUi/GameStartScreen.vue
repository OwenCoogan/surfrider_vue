<template>
    <div class="gameStartScreen">
        <div class="absolute--content">
            <h2 class="game--title">Coastline In Danger</h2>
            <h2>{{title}}</h2>
            <p>{{content}}</p>
        </div>
        <StartScreenIllustration/>
    </div>
</template>
<script>
import StartScreenIllustration from '../illustrations/StartScreenIllustration.vue'
export default({
    props: ['title','content','startScreen'],
    setup() {
        
    },
    components: {
        StartScreenIllustration
    },
})
</script>
