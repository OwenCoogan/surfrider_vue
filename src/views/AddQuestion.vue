<template>
    <div>
        <h2>Ajouter une question à une mission</h2>
        <form v-on:submit.prevent="submitForm">
            <label for="question">Question</label>
            <input
            id="question"
            v-model="question"
            type="text"
            name="question"
            >
            <div class="answer-holder--flex">
                <div class="answer--card">
                    <label for="answer1">Réponse 1</label>
                    <input
                    id="answer1"
                    v-model="answer1"
                    type="text"
                    name="answer1"
                    >
                    <label for="score1">Score pour Réponse 1</label>
                    <input
                    id="score1"
                    v-model="score1"
                    type="number"
                    name="score1"
                    >
                </div>
                <div class="answer--card">
                    <label for="answer2">Réponse 2</label>
                    <input
                    id="answer2"
                    v-model="answer2"
                    type="text"
                    name="answer2"
                    >
                    <label for="score2">Score pour Réponse 2</label>
                    <input
                    id="score2"
                    v-model="score2"
                    type="number"
                    name="score2"
                    >
                </div>
                <div class="answer--card">
                    <label for="answer3">Réponse 3</label>
                    <input
                    id="answer3"
                    v-model="answer3"
                    type="text"
                    name="answer3"
                    >
                    <label for="score3">Score pour Réponse 3</label>
                    <input
                    id="score3"
                    v-model="score3"
                    type="number"
                    name="score3"
                    >
                </div>
                
            </div>
            <input
                type="submit"
                value="Submit"
                >
        </form>
    </div>
</template>
<script>

import axios from 'axios'
export default({
    setup() {
        
    },
    data() {
    return {
      form:{
          question: null,
          answer1: null,
          answer2: null,
          answer3: null,
          score1: null,
          score2: null,
          score3: null,
      } 
    }
    },
    methods:{
        submitForm(){
            const splitUrl = window.location.href.split('/')
            const id = splitUrl[3]
            const answer1withScore= [this.answer1,this.score1]
            const answer2withScore= [this.answer2,this.score2]
            const answer3withScore= [this.answer3,this.score3]
            console.log(answer1withScore,answer2withScore,answer3withScore)
            
            const url = 'http://localhost:6590/v1/mission/'+id+'/addQuestion'
            axios.post(url,{
                question:this.question,
                answer1: answer1withScore,
                answer2 : answer2withScore,
                answer3 : answer3withScore
              })
            
                 .then((res) => {
                     console.log(res)
                 })
                 .catch((error) => {
                      console.log(error)
                 })
                 .then(this.$router.go('MissionList'))
              
        },
        
    }
})  
</script>
