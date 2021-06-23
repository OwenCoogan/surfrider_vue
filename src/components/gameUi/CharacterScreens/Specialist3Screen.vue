<template>
    <div class="screen-wrapper">
        <Village/>
        <Specialist/>
        <Specialist1Dialog/>
    </div>
    
</template>
<script>
import Village from '../../illustrations/Village.vue'
import Specialist from '../../illustrations/Specialist2.vue'
import Specialist1Dialog from '../Questions/Specialist1Dialog.vue'
export default({
    setup() {
        
    },
    components: {
        Village,
        Specialist,
        Specialist1Dialog

    }
})
</script>
