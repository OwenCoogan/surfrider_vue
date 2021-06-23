<template>
    <div class="screen-wrapper">
        <Village/>
        <Promoteur/>
        <PromoteurDialog/>
    </div>
    
</template>
<script>
import Village from '../../illustrations/Village.vue'
import Promoteur from '../../illustrations/Promoteur.vue'
import PromoteurDialog from '../Questions/PromoteurDialog.vue'
export default({
    setup() {
        
    },
    components: {
        Village,
        Promoteur,
        PromoteurDialog

    }
})
</script>
