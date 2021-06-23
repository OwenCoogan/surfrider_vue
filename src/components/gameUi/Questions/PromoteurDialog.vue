<template>
<div class="questions-list">
    <div class="question1" v-if="this.questionActive === 1">
        <div class="dialog-bubble">
            <p>Bonjour, j’ai discuté avec le maire puis avec une spécialiste des risques côtiers sur le projet de création de l’hôtel. Vous vouliez le créer à 100 mètres de la plage au niveau de l’ancien Casino, mais il y a des risques à prendre en compte :</p>
        </div>
        <div class="answer-list-promotion">
            <button class="answer" score="1" @click="giveAnswer(1,1)">Fragilisation du littoral</button>
            <button class="answer" score="1" @click="giveAnswer(1,1)">Risque d'érosion</button>
            <button class="answer" score="0" @click="giveAnswer(0,1)">Remontée de nappes</button>
            <button class="answer" score="1" @click="giveAnswer(1,1)">Destruction de la végétalisation</button>
        </div>
    </div>
    <div class="question2" v-if="this.questionActive === 2">
        <div class="dialog-bubble">
            D’accord, je comprends votre inquiétude, mais pour moi, il y a des enjeux économiques, c’est un secteur très concurrentiel. Mais je m’y connais dans ce domaine et nous pourrions trouver un accord au niveau des aménagements à mettre en place.
        </div>
        <div class="answer-list-promotion">
            <button class="answer" score="1" @click="giveAnswer(1,1)">Enrochement</button>
            <button class="answer" score="0" @click="giveAnswer(0,1)">Digue</button>
            <button class="answer" score="1" @click="giveAnswer(1,1)">Artificialisation du littoral</button>
            <button class="answer" score="0" @click="giveAnswer(0,1)">Réhabilitation de zones humides</button>
        </div>
    </div>
    <div class="question3" v-if="this.questionActive === 3">
        <div class="dialog-bubble">
            D’accord, je comprends, mais réfléchissez bien, cela favoriserait le développement de la zone, du tourisme en passant par les commerces. Avez-vous pensé à tous ces gens que cela aiderait ?
        </div>
        <div class="answer-list-promotion">
            <button class="answer" score="1" id="1" @click="checkAnswer(1)">Pour être honnête, j’avais oublié de prendre en compte cet aspect-là, vous avez raison, l’aspect économique et financier prime sur la préservation du littoral. Quant à cette préservation, des aménagements pourront être réalisés dans le futur.</button>
            <button class="answer" score="0" id="2" @click="checkAnswer(2)">Je suis d’accord avec vous, ne pensez-vous pas que nous pourrions trouver une solution qui regroupe ces deux enjeux, à la fois l’aspect environnement et l’aspect économique ? Par exemple; en déplaçant légèrement l’hôtel sur la côte pour avoir une velle vue sur la mer et préserver le littoral ?</button>
            <button class="answer" score="1" id="3" @click="checkAnswer(3)">Je ne suis pas d’accord. Je ne  sacrifierai jamais notre précieux littoral au profit de vos intérêts financiers.</button>
        </div>
    </div>
    <div class="question4" v-if="this.questionActive === 4 && this.givenAnswer === 1">
        <div class="dialog-bubble">
            Je suis ravi que nous ayons pu trouver un terrain d'entente. Le maire m’a prévenu de votre implication décisive dans ce projet. Je vous laisse le contacter pour finaliser ce dossier.
        </div>
        <div class="answer-list-promotion">
            <button class="answer" score="1" id="1" @click="callMayor()">Appelez le maire</button>
        </div>
    </div>
    <div class="question4" v-if="this.questionActive === 4 && this.givenAnswer === 2">
        <div class="dialog-bubble">
             En effet, il y  a le terrain de l’ancien commissariat de la ville où l’on pourrait construire. Mais bon, vous êtres d’accord avec moi, un hôtel en bord de mer, ça en jette quand même.
        </div>
        <div class="answer-list-promotion">
            <div class="answer-list-promotion">
            <button class="answer" score="1" id="1" @click="callMayor()">Appelez le maire</button>
        </div>
        </div>
    </div>
    <div class="question4" v-if="this.questionActive === 4 && this.givenAnswer === 3">
        <div class="dialog-bubble">
            Je ne pensais pas que ça serait aussi compliqué. En suivant votre raisonnement, je vais perdre de l’argent à coup sûr et ça ne m’emballe pas. Je vous laisse voir avec le maire mais vous avez tous les éléments.
        </div>
        <div class="answer-list-promotion">
            <button class="answer" score="1" id="1" @click="callMayor()">Appelez le maire</button>
        </div>
    </div>
    
</div>
    
</template>
<script>
export default({
    setup() {
        
    },
    data(){
        return{
            questionActive:1,
            givenAnswer:0
        }
    },
    methods:{
        nextQuestion(){
            this.questionActive = this.questionActive + 1 
        },
        callMayor(){
           this.$store.commit('toggleSpecialist' , 'maire')

        },
         checkAnswer(id){
            if(id===1){
                this.givenAnswer=1
                this.nextQuestion()
            }
           else if(id===2){
               this.givenAnswer=2
               this.nextQuestion()
           }
           else if(id===3){
               this.givenAnswer=3
               this.nextQuestion()
           }
           console.log(this.givenAnswer)
        },
        giveAnswer(score,max){
            if(localStorage.score){
                localStorage.score = +localStorage.score + +score;
                localStorage.scoreMax = +localStorage.scoreMax + +max;
            }
            else{
                 localStorage.score = +score;
                 localStorage.scoreMax = +max; 
            }
            localStorage.scoreMax = +localStorage.scoreMax + +max;
            this.score = score
            this.nextQuestion();
        }
    }
})
</script>
