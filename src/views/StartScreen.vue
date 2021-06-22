<template>
    <div class="">
        <div class="start-screen-content">
           <h2 class="startscreen--title">Coastline Challenge</h2>
           <router-link to="/LargeMap" class="startscreen--button">Commencer</router-link
           > 
        </div>
        <StartScreenIllustration/>
        
    </div>
</template>
<script>
import StartScreenIllustration from '../components/illustrations/StartScreenIllustration'
export default({
    
    setup() {
        
    },
    components: {
        StartScreenIllustration
    },
    
})
</script>
