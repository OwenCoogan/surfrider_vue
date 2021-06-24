<template>
    <div >
                <GameStartScreen
                v-bind:title="post.title"
                v-bind:content="post.content"
                v-bind:startScreen="post.backgroundImg"
                v-if="this.$store.state.missionSlideActive === 1"
                />
                <PhoneScreen
                v-if="this.$store.state.missionSlideActive === 2 && this.$store.state.missionSpecialistActive ===null"
                />
                <MaireScreen
                v-if="this.$store.state.missionSlideActive === 3 && this.$store.state.missionSpecialistActive ===null"
                />
                <SpecialistesScreen
                v-if="this.$store.state.missionSlideActive === 4 && this.$store.state.missionSpecialistActive ===null"
                />
                <Specialist1Screen
                v-if="this.$store.state.missionSpecialistActive ==='conservatrice'"
                />
                <Specialist2Screen
                v-if="this.$store.state.missionSpecialistActive ==='specialist2'"
                />
                <Specialist3Screen
                v-if="this.$store.state.missionSpecialistActive ==='specialist3'"
                />
                <PhoneScreen
                v-if="this.$store.state.missionSlideActive === 5 && this.$store.state.missionSpecialistActive ===null"
                />

                <PromoteurScreen
                v-if="this.$store.state.missionSpecialistActive ==='immobilier'"
                />
                <FinalScreen
                v-if="this.$store.state.missionSpecialistActive ==='maire'"
                />
                <ScoreBoardPlayer v-if="this.$store.state.missionSpecialistActive ==='final'"/>

                <!--<Question1
                v-if="this.$store.state.missionSlideActive === 6 && this.$store.state.missionSpecialistActive ===null"
                />
                <Question2
                v-if="this.$store.state.missionSlideActive === 7 && this.$store.state.missionSpecialistActive ===null"
                />
                <Question3
                v-if="this.$store.state.missionSlideActive === 8 && this.$store.state.missionSpecialistActive ===null"
                />-->
    </div>
</template>
<script>

import GameStartScreen from '../components/gameUi/GameStartScreen.vue'
import PhoneScreen from '../components/gameUi/CharacterScreens/PhoneScreen.vue'
import MaireScreen from '../components/gameUi/CharacterScreens/MaireScreen.vue'
import SpecialistesScreen from '../components/gameUi/CharacterScreens/SpecialistesScreen.vue'
import Specialist1Screen from '../components/gameUi/CharacterScreens/Specialist1Screen.vue'
import Specialist2Screen from '../components/gameUi/CharacterScreens/Specialist2Screen.vue'
import Specialist3Screen from '../components/gameUi/CharacterScreens/Specialist3Screen.vue'
import PromoteurScreen from '../components/gameUi/CharacterScreens/PromoteurScreen.vue'
import FinalScreen from '../components/gameUi/CharacterScreens/FinalScreen.vue'
import ScoreBoardPlayer from '../components/gameUi/ScoreBoardPlayer.vue'

/*import Question1 from '../components/gameUi/Question1.vue'
import Question2 from '../components/gameUi/Question2.vue'
import Question3 from '../components/gameUi/Question3.vue'*/
import axios from 'axios'
export default({
    name: 'Home',
    components: {
        GameStartScreen,
        PhoneScreen,
        MaireScreen,
        SpecialistesScreen,
        Specialist1Screen,
        Specialist2Screen,
        Specialist3Screen,
        PromoteurScreen,
        FinalScreen,
        ScoreBoardPlayer
        //Question1,
        //Question2,
        //Question3
    },
    data() {
        return {    
        post:null,
        }
    },
    setup() {
        
    },
    methods: {
        async fetchData () {
            const splitUrl = window.location.href.split('/')
            const id = splitUrl[4]
            const res = await axios.get('http://localhost:6590/v1/mission/' +id, {
            })
            this.post = res.data.data
        },
    },
    mounted () {
        this.fetchData()
    }  
    
})
</script>
