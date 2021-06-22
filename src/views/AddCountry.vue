<template>
    <div>
        <h2>Ajouter une mission</h2>
        <form v-on:submit.prevent="submitForm">
            <div class="answer--card">
                <label for="name">Titre</label>
                <input
                id="name"
                v-model="name"
                type="text"
                name="name"
                >
                <label for="content">Contenu</label>
                <input
                id="content"
                v-model="content"
                type="content"
                name="content"
                >
                <label for="countryId">countryId</label>
                <input
                id="countryId"
                v-model="countryId"
                type="countryId"
                name="countryId"
                >
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
          name: null,
          content: null,
          countryId:null,
      } 
    }
  },
    methods:{
        submitForm(){
            axios.post('http://localhost:6590/v1/country/create', {
                name: this.name,
                content: this.content,
                countryId:this.countryId
              })
                 .then((res) => {
                     console.log(res)
                 })
                 .catch((error) => {
                      console.log(error)
                 })
                 .then(this.$router.push({ name: 'MissionList' }))
              
        }
    }
})
</script>
