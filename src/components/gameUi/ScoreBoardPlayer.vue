<template>
    <div>
        <Village/>
        
        <div class="score-card hello">
            <div v-if="this.type === 1 && this.activeQuestion === 1" class="score-card">
                <h1>Un hôtel flambant neuf</h1>
                <img src=""/>
                <p>Malheureusement, en le plaçant ici, cela aura des répercussions dans les années à venir. 
                    L'hôtel n'existera plus en 2050. Il sera victime du phénomène d'érosion.</p>
                <button class="button--blue" v-if="this.activeQuestion === 1" @click="nextSlide()">Suivant</button>
            </div>
            <div v-if="this.type === 2 && this.activeQuestion === 1"  class="score-card">
                <h1>Un hôtel flambant neuf</h1>
                <img src=""/>
                <p>Ca peut être mieux</p>
                <button class="button--blue" v-if="this.activeQuestion === 1" @click="nextSlide()">Suivant</button>
            </div>
            <div v-if="this.type === 3 && this.activeQuestion === 1" class="score-card">
                <h1>Un hôtel flambant neuf</h1>
                <img src=""/>
                <p>C'est stylé</p>
                <button class="button--blue" v-if="this.activeQuestion === 1" @click="nextSlide()">Suivant</button>
            </div>
            <div v-if="this.type === 1 && this.activeQuestion === 2" class="score-card">
                <h2>L'entrepreneur</h2>
                <img src=""/>
                <p>Pour toi, les enjeux écologiques n'ont aucune importance. 
            Tu sembles être un entrepreneur.</p>
                <router-link class="button--blue" to="/Scoreboard/" v-if="this.activeQuestion === 2">Suivant</router-link>
            </div>
            <div v-if="this.type === 2 && this.activeQuestion === 2"  class="score-card">
                <h2>L'architecte</h2>
                <img src=""/>
                <p>Pour toi, tous les enjeux (économiques, écologiques et humains) sont sur le même pied d'égalité. 
Tu sembles être un architecte.</p>
            <router-link class="button--blue" to="/Scoreboard/" v-if="this.activeQuestion === 2">Suivant</router-link>
            </div>
            <div v-if="this.type === 3 && this.activeQuestion === 2" class="score-card">
                <h2>L'altruiste</h2>
                    <div class="flex--content">
                    <img src=""/>
                    <p>Pour toi, la Planète passe avant tout.
                        Tu sembles être un altruiste.</p> 
                        <router-link class="button--blue" to="/Scoreboard/" v-if="this.activeQuestion === 2">Suivant</router-link>
                </div>
            </div>
            
            

        </div>
    </div>
</template>
<script>
import Village from '../illustrations/Village.vue'
export default({
    setup() {
        
    },data(){
        return{
            player:localStorage.player,
            score:null,
            activeQuestion:1,
            type:null,
        }
    },
    components:{
        Village
    },
    methods:{
        checkScore(){
            
        },
        nextSlide(){
            this.activeQuestion = 2
        },
        checkType(){
            this.score = localStorage.scoreFinal
            if( +0<localStorage.scoreFinal&& localStorage.scoreFinal < +33){
                this.type = 1
                localStorage.typeName = "L’entrepreneur"
            }
            else if( +33<localStorage.scoreFinal && localStorage.scoreFinal < +66){
                this.type = 2
                localStorage.typeName = "L'Architecte"
            }
            else{
                this.type = 3
                localStorage.typeName = "L’altruiste"
            }
        }

    },
    mounted(){
        this.checkType();
    }
    
})
</script>
