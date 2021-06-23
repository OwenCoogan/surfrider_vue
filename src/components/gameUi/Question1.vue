<template>
    <div class="backdrop">
        <Village/>
        <div class="character-holder"><Maire/></div>
        <Question1Form/>
    </div>
</template>
<script>
import Village from '../illustrations/Village.vue'
import Maire from '../illustrations/Maire.vue'
import Question1Form from './Questions/MaireDialog.vue'
export default({
    setup() {
        
    },
    components: {
        Village,
        Maire,
        Question1Form
    },
    methods:{
    }
})
</script>
