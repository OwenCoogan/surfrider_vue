<template>
    <div>
        <button @click="NextSlide()">{{text}}</button>
    </div>
</template>
<script>
export default({
    props: ['text'],
    setup() {
        
    },
    methods:{
        NextSlide(){
            this.$store.commit('next')
            this.$forceUpdate()
        }
    }
    
})
</script>
