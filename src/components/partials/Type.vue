<script>
import { typologies } from '../../data/typologies.js';
  export default {
    props:{
     
    },
    data(){
      return{
        typologies: typologies
        
      }
    },
    
  }
</script>

<template>
  <div class="col card d-flex align-items-center" v-for="el in typologies" :key="el.id">
    <img :src="el.image" alt="">
    
    

    <h4>{{ el.title }}</h4>
    
    
 
  </div>
</template>


<style lang="scss" scoped>
.card{
  border: none;
  img{
    height: 170px;
    width: 170px;
  }
}
</style>