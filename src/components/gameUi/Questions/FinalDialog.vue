<template>
<div class="">
    <div class="questions-list" v-if="this.questionActive === 1">
        <div class="question1 ">
            <div class="dialog-bubble">
                Bonjour (prénom). Alors je t'écoute, où décides-tu de placer l’hôtel ? 
            </div>
            <div class="answer-list">
                <button class="answer" score="1" @click="nextQuestion()">Placer l'hôtel</button>
            </div>
        </div>
    </div>
    <div class="questions-list last-game" v-if="this.questionActive === 2">
        <FinalGame v-if="this.questionActive === 2"/>
    </div>
</div>
</template>
<script>
import FinalGame from '../FinalGame.vue'
export default({
    setup() {
        
    },
    components: {
        FinalGame
    },
    data(){
        return{
            questionActive:1
        }
    },
    methods:{
        nextQuestion(){
            this.questionActive = this.questionActive + 1 
        }
    }
})
</script>
