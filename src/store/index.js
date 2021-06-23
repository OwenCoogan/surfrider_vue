import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    missionSlideActive: 1,
    missionSpecialistActive: null,
    score:0
  },
  mutations: {
    next (state) {
      state.missionSlideActive++
      state.missionSpecialistActive = null
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
      const score = (+localStorage.score / +localStorage.scoreMax)*100
      console.log(score)
      const res = axios.post('http://localhost:6590/v1/players/create', {
        name:localStorage.player,
        score:score
      })
      .then(localStorage.scoreFinal = score )
      .then(console.log(localStorage.scoreFinal))
      .then(console.log(res))
    },

    finalScore (state,score) {
      state.score + score
      console.log(state.score);

  }
  }
})