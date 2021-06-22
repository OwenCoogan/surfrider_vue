<template>
    <div class="mission-holder">

        <div class="mission-holder"  v-for="mission in missions" :ref="'modal-'+mission._id" :key="mission.content">
            <h2>{{mission.title}}</h2>
            <p>{{mission.content}}</p>
            <button class="button--delete" @click="deleteMission(mission._id)">Supprimer Mission</button>
            <router-link class="button-add--question" :to="mission._id+ '/AddQuestion/'" >Ajouter une question</router-link>
            <router-link class="button-start--mission" :to="'/Mission/' + mission._id ">Commencer la mission</router-link>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
export default({
    setup() {
        
    },
    data () {
        return {
        missions: [],
        }
    },
    methods: {
        
        async fetchData () {
            const res = await axios.get('http://localhost:6590/v1/missions', {
            })
            this.missions = res.data.data
            console.log(this.missions)
        },
        deleteMission(id){
            axios.delete('http://localhost:6590/v1/mission/delete/'+ id ,  {
            })
            .then((res) => {
            console.log(res)
            })
            .then(this.$router.go())
        }
    },
    mounted () {
        this.fetchData()
    }
})
</script>
