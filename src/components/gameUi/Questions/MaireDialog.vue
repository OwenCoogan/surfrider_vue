<template>
<div class="questions-list">
    <div class="question1" v-if="this.questionActive === 1">
        <div class="dialog-bubble">
            Bonjour, (prénom) , j'ai une mission pour toi. Je travaille sur un projet de création dans nouvel hôtel dans le but de re-dynamiser la ville. Le souci est que je suis conscient des enjeux liés aux risques côtiers et ce que cela implique. Ne maitrisant pas assez ce sujet, je viens te demander ton aide. Accepte-tu ?
        </div>
        <div class="answer-list">
            <button class="answer" score="1" @click="nextQuestion()">Oui, avec plaisir.</button>
        </div>
    </div>
    <div class="question2" v-if="this.questionActive === 2">
        <div class="dialog-bubble">
            Parfait ! J'ai contacté un promoteur immobilier. Il souhaite construire l'hôtel à l'emplacement dans l'ancien casino à environ 100m de la plage. La vue serait imprenable sur la mer et cette localisation attirera à coup sûr énormément de clients. Tout le monde en profitera.
        </div>
        <div class="answer-list">
            <button class="answer" score="1" @click="nextQuestion()">Et si se terrain n'est pas adapté à ce type d'aménagement, disposez-vous d'autres terrains exploitables ?</button>
        </div>
    </div>
    <div class="question3" v-if="this.questionActive === 3">
        <div class="dialog-bubble">
            Oui effectivement. En plus de celui-ci, la mairie dispose de trois autres terrains. Mais étant plus éloignés de la plage, je doute qu'ils attirent autant de monde.
        </div>
        <div class="answer-list">
            <NextSlideButton
            v-bind:text="'Très bien ! Je vous remercie pour toutes ces informations. Avant de pouvoir apporter une solution, je vais avoir besoin d\'étudier le projet plus en profondeur.'"
            />

        </div>
    </div>
</div>
    
</template>
<script>
import NextSlideButton from '../../gameUi/NextSlide.vue'
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
