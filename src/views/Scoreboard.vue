<template>
    <div class="mission-holder">
        <ul class="player-list">
            <li class="player" v-for="player in players" :key="player.name" :v-if="player.name !=null">
                <div>
                    <p>{{player.name}}</p>
                    <p>{{player.score}}%</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

import axios from 'axios'
export default({
    setup() {
        
    },
    data () {
        return {
        players: [],
        }
    },
    methods: {
        
        async fetchData () {
            const res = await axios.get('http://localhost:6590/v1/players', {
            })
            this.players = res.data.data
            console.log(this.players)
        }
    },
    mounted () {
        this.fetchData()
    }
})
</script>
