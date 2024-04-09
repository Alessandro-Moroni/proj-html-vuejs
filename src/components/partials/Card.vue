<script>
import { cardmain } from '../../data/cardmain.js';
  export default {
    props:{
     
    },
    data(){
      return{
        cardmain: cardmain
        
      }
    },
    
  }
</script>

<template>
  <div class="card col" v-for="item in cardmain" :key="item.id">
    <img :src="item.image" alt="image">
    <h3>{{ item.title }}</h3>
    <p>{{ item.price }}</p>
  </div>
</template>


<style lang="scss" scoped>
.card{
  border: none;
}
img{
  margin-bottom: 30px;
}
p{
  color: rgb(213, 122, 132);
}
</style>