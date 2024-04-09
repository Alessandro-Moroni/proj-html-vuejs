<script>
import { menucategories } from '../../data/menucategories.js';
  export default {
    props:{
     
    },
    data(){
      return{
        menucategories: menucategories,
        
      }
    },
    
  }
</script>

<template>
  <div class="col card" v-for="el in menucategories" :key="el.id">
    <img :src="el.image" alt="">
    
    <div class="d-flex justify-content-center align-items-center ">

      <h3>{{ el.title }}</h3>
    </div>
    
 
  </div>
</template>


<style lang="scss" scoped>
img{
  object-fit: cover;
  height: 258px;
  
}
.card{
  position: relative;
  border: none;
  margin-bottom: 20px;
  div{
    position: absolute;
    color: white;
    height: 258px;
    width: 304px;
    background-color: rgb(53, 52, 52,.3);
    
  }
}
</style>