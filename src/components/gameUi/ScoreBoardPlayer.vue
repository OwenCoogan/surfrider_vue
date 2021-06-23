<template>
    <div>
        <Village/>
        <h1>Bonjour {{this.player}}</h1>
        <div>
            <div v-if="this.type === 1" class="score-card">
                Il faut faire un effort
            </div>
            <div v-if="this.type === 2" class="score-card">
                Il faut faire un effort mais ça va
            </div>
            <div v-if="this.type === 3" class="score-card">
                C'est pas mal
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
            type:null
        }
    },
    components:{
        Village
    },
    methods:{
        checkScore(){
            
        },
        checkType(){

            this.score = localStorage.scoreFinal
            if( 0< localStorage.scoreFinal < 33){
                this.type = 1
            }
            else if( 33< localStorage.scoreFinal < 66){
                this.type = 2
            }
            else{
                this.type = 3
            }
            console.log('type:'+this.type)
        }

    },
    mounted(){
        this.checkType();
    }
    
})
</script>
