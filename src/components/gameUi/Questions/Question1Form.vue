<template>
<div class="questions-list">
    <h2>Question 1</h2>
    <div class="dialog-bubble">
        Dialog1
    </div>
    <div class="dialog-bubble--blue">
        Dialog2
    </div>
    <div class="dialog-bubble">
        Dialog3
    </div>
    <div class="answer-list">
        <button class="answer" score="1" @click="incrementScore(1)">Réponse 1</button>
        <button class="answer" score="2" @click="incrementScore(2)">Réponse 2</button>
        <button class="answer" score="3" @click="incrementScore(3)">Réponse 3</button>
    </div>
</div>
    
</template>
<script>
export default({
    setup() {
        
    },
    data(){
        return{
            score:0
        }
    },
    methods:{
        incrementScore(score){
            localStorage.score = score;
            this.score = score
            this.$store.commit('next') 
        }
    }
})
</script>
