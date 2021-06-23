<template>
    <div class="final-game-overlay">
        <div class="final-game-div">
            <div class="wrapper">
                <div class="one" score="1" @click="submitScore(1)">Un</div>
                <div class="two" score="2" @click="submitScore(2)">Deux</div>
                <div class="three" score="3" @click="submitScore(3)">Trois</div>
                <div class="four" score="4" @click="submitScore(4)">Quatre</div>
                <div class="five" score="5" @click="submitScore(5)">Cinq</div>
                <div class="six" score="6" @click="submitScore(6)">Six</div>
                <div class="four" score="7" @click="submitScore(7)">Sept</div>
                <div class="five" score="8" @click="submitScore(8)">Huit</div>
                <div class="six" score="9" @click="submitScore(9)">Neuf</div>
            </div>
        </div>
    </div>
</template>
<script>
export default({
    setup() {
        
    },
    methods:{
        submitScore(score){
            localStorage.score = +localStorage.score + +score
            localStorage.scoreMax = +localStorage.scoreMax + +9
            console.log(localStorage.score+ '/' +localStorage.scoreMax)
            this.$store.commit('postScore')
            this.$store.commit('toggleSpecialist','final')
        }

    }
})
</script>
