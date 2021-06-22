<template>
    <div class="gameStartScreen">
        <h1>{{title}}</h1>
        <p>{{content}}</p>
        <StartScreenIllustration/>
    </div>
</template>
<script>
import StartScreenIllustration from './StartScreenIllustration.vue'
export default({
    props: ['title','content','startScreen'],
    setup() {
        
    },
    components: {
        StartScreenIllustration
    },
})
</script>
