<script>
import { cardmain } from '../../data/cardmain.js';

  export default {
    props:{
      
    },
    data(){
      return{
        cardmain,
        
      }
    },
    
  }
</script>

<template>
  <div class="card col" v-for="el in cardmain.menu" :key="el">
    <img :src="el.image" alt="">
    <!-- <img src="../../assets/img/skin-on-fries.jpg" alt=""> -->
    <h3>{{ el.title }}</h3>
    <p>{{ el.price }}</p>
  </div>
</template>


<style lang="scss" scoped>
img{
  height: 100%;
  width: 100%;
}
p{
  color: rgb(213, 122, 132);
}
</style>