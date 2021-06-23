<template>
    <div class="screen-wrapper">
        <Village/>
        <Maire/>
        <MaireDialog/>
    </div>
    
</template>
<script>
import Village from '../../illustrations/Village.vue'
import Maire from '../../illustrations/Maire.vue'
import MaireDialog from '../Questions/MaireDialog.vue'
export default({
    setup() {
        
    },
    components: {
        Village,
        Maire,
        MaireDialog

    }
})
</script>
