import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    missionSlideActive: 1,
    missionSpecialistActive: null,
    score:0,
    player:null
  },
  mutations: {
    next (state) {
      state.missionSlideActive++
      state.missionSpecialistActive = null
    },
    getName (state) {
      state.player = localStorage.player
    },
    previous (state) {
      state.missionSlideActive--
      state.missionSpecialistActive = null
    },
    toggleSpecialist (state,specialist) {
      state.missionSpecialistActive = specialist
    },
    scoreTrack (state,score) {
        state.score + score

    },
    postScore(){
      var score = (+localStorage.score / +localStorage.scoreMax)*100
        if( +0<score&& score < +33){
            localStorage.typeName = "L’entrepreneur"
        }
        else if( +33<score && score< +66){
            localStorage.typeName = "L'Architecte"
        }
        else{
          localStorage.typeName = "L’altruiste"
        }
      const res = axios.post('http://localhost:6590/v1/players/create', {
        name:localStorage.player,
        score: score.toFixed(2),
        typeName:localStorage.typeName
      })
      .then(localStorage.scoreFinal = score )
      .then(console.log(res))
      .then(localStorage.removeItem('typeName'),localStorage.removeItem('player'),localStorage.removeItem('score'))
    },

    finalScore (state,score) {
      state.score + score

  }
  }
})