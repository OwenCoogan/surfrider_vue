<template>
<div class="questions-list">
    <div class="question1" v-if="this.questionActive === 1">
        <div class="dialog-bubble">
            Bonjour (prénom), en quoi puis-je t'aider ?
        </div>
        <div class="answer-list">
            <button class="answer" score="1" @click="nextQuestion()">Bonjour Laure, le maire m'a contacté au sujet de l'aménagement d'un nouvel en bord de mer. Mais je doute que ce projet soit réalisable au vu des nombreux risques côtiers. Peux-tu m'aider ?</button>
        </div>
    </div>
    <div class="question2" v-if="this.questionActive === 2">
        <div class="dialog-bubble">
            Je t'écoute, peux-tu m'en dire plus ?
        </div>
        <div class="answer-list">
            <button class="answer" score="1" @click="nextQuestion()">Le maire ainsi qu'un promoteur immobilier envisage la construction de cet hôtel au plus près de la plage, 100m, à la place de l'ancien casino. Penses-tu qu'un tel projet puisse avoir des conséquences négatives sur notre précieux littoral ? </button>
        </div>
    </div>
    <div class="question3" v-if="this.questionActive === 3">
        <div class="dialog-bubble">
            Étant une spécialiste des déchets maritimes, je suis bien placée pour savoir que la création d'un hôtel si près de la plage favorisera la pollution de l'environnement. De nombreux déchets plastiques y seront déposés. Mais je pense qu'en complément tu auras besoin de l'avis d'un véritable spécialiste en risques côtiers
        </div>
        <div class="answer-list">
            <NextSlideButton
            v-bind:text="'D\'accord, je te remercie pour toutes ces informations.'"
            />

        </div>
    </div>
</div>
    
</template>
<script>
import NextSlideButton from '../NextSlide.vue'
export default({
    setup() {
        
    },
    components: {
        NextSlideButton
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
