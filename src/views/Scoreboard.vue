<template>
    <div class="mission-holder">
        <Village/>
        <div class="scoreboard">
            <h2>Tableau des scores</h2>
            <ul class="player-list">
                <li class="player" v-for="player in players" :key="player.name" :v-if="player.name !=null">
                    <div class="player-flex">
                        <p><b>Nom :</b> {{player.name}}</p>
                        <p><b>Type :</b> {{player.typeName}}</p>
                        <p><b>Score :</b> {{player.score}}%</p>
                        <button @click="deletePlayer(player._id)">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Village from '../components/illustrations/Village.vue'
import axios from 'axios'
export default({
    setup() {
        
    },
    components:{
        Village
    },
    data () {
        return {
        players: [],
        typeName:null
        }
    },
    methods: {
        
        async fetchData () {
            const res = await axios.get('http://localhost:6590/v1/players', {
            })
            this.players = res.data.data
            
        },
        deletePlayer(id){
            axios.delete('http://localhost:6590/v1/player/delete/'+ id ,  {
            })
        }
    },
    mounted () {
        this.fetchData()
        this.typeName = localStorage.typeName
    }
})
</script>
