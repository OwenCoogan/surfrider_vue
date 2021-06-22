<template>
    <div>
        <h2>Ajouter une mission</h2>
        <form v-on:submit.prevent="submitForm">
            <div class="answer--card">
                <label for="title">Titre</label>
                <input
                id="title"
                v-model="title"
                type="text"
                name="title"
                >
                <label for="content">Contenu</label>
                <input
                id="content"
                v-model="content"
                type="text"
                name="content"
                >
            </div>
            <select v-model="backgroundImg">
            <option disabled value="">Choisissez</option>
            <option value="@/assets/mission_images/mission1.svg">http://localhost:8080/src/assets/mission_images/mission1.svg</option>
            </select>
            <span>Sélectionné : {{ selected }}</span>
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
          title: null,
          content: null,
          backgroundImg:null,
      } 
    }
  },
    methods:{
        submitForm(){
            axios.post('http://localhost:6590/v1/mission/create', {
                title: this.title,
                content: this.content,
                backgroundImg:this.backgroundImg,
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
