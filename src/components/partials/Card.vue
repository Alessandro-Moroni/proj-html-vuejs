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
    <div class="check">
      <i class="fa-regular fa-circle-check"></i>
        <div>VIEW CART</div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.card{
  border: none;
  position: relative;
  cursor: pointer;
  .check{
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    .fa-circle-check{
      border-radius: 50%;
      height: 100px;
      width: 100px;
      font-size: 4rem;
      line-height: 100px;
      background-color: rgb(69, 68, 68, .5);
    }
    div{
      font-weight: bold;
    }
    
  }
  &:hover .check{
    display: block;
  }
}
img{
  margin-bottom: 30px;
}
p{
  color: rgb(213, 122, 132);
}
</style>