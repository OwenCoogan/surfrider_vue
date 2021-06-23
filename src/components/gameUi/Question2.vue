<template>
    <div class="backdrop">
        <Hotel/>
        <div class="character-holder"><Maire/></div>
    </div>
</template>
<script>
import Hotel from '../illustrations/Hotel.vue'
import Maire from '../illustrations/Maire.vue'
export default({
    setup() {
        
    },
    components: {
        Hotel,
        Maire
    },
})
</script>
