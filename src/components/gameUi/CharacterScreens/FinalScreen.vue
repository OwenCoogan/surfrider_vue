<template>
    <div class="screen-wrapper">
        <Village/>
        <Maire/>
        <FinalDialog/>
    </div>
    
</template>
<script>

import Village from '../../illustrations/Village.vue'
import Maire from '../../illustrations/Maire.vue'
import FinalDialog from '../Questions/FinalDialog.vue'

export default({
    setup() {
        
    },
    components: {
        Village,
        Maire,
        FinalDialog

    }
})
</script>
