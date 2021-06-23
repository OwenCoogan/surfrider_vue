<template>
    <div class="backdrop">
        <Village/>
        <div class="character-holder"><Maire/></div>
    </div>
</template>
<script>
import Village from '../illustrations/Village.vue'
import Maire from '../illustrations/Maire.vue'
export default({
    setup() {
        
    },
    components: {
        Village,
        Maire
    },
})
</script>

