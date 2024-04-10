<script>
import { lastmain } from '../../data/lastmain.js';
  export default {
    props:{
     
    },
    data(){
      return{
        lastmain: lastmain,
        
      }
    },
    
  }
</script>

<template>
  <div class="col card text-center " v-for="el in lastmain" :key="el.id">
    
    <img :src="el.image" alt="">

    <h3>{{ el.title }}</h3>
    
    <span>{{ el.description }}</span>

 
  </div>
</template>


<style lang="scss" scoped>
.card{
  border: none;
  img{
    margin-bottom: 20px;
  }
  h3{
    font-weight: bold;
  }
}
</style>