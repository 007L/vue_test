<template>

  <div class="hello">
    <div v-for="(animal , indexanimal) in animails"  :key="indexanimal">
      <span>{{animal.animalName}}</span>
      <!--<img :src="animal.coverImage" alt="">-->
    </div>
    <Animals></Animals>
  </div>
</template>

<script>
  import Animals from "../Animals/Animals.vue"
  import {mapState} from "vuex"
export default {

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  mounted(){
    this.$store.dispatch("getAnimals",()=>{
      console.log("ok");
    })
  },

  computed:{
    ...mapState(['animails'])
  },

  components: {
    Animals
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
