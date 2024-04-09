<script>
import Card from './partials/Card.vue';
import { store } from '../data/store';
  export default {
    components:{
      Card,
    },
    data(){
      return{
        store,
      }
    }
  }
</script>

<template>
  <div class="container under">
    
    <div class="container above d-flex justify-content-around">
      <div>
        <i class="fa-regular fa-clock"></i>24/7 DELIVERY
      </div>

      <div>
        <i class="fa-solid fa-burger"></i>OVER 100 DISHES
      </div>

      <div>
        <i class="fa-solid fa-mobile-screen-button"></i>IN APP ORDERING
      </div>

      <div>
        <i class="fa-solid fa-car"></i>FAST DELIVERY
      </div>
      
    </div>
  </div>
</template>


<style lang="scss" scoped>
.under{
  position: relative;
  height: 1000px;
}
.above{
  position: absolute;
  background-color: white;
  padding-top: 50px;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  .fa-solid{
    margin-right: 20px;
  }
  .fa-regular{
    margin-right: 20px;
  }
  
}
</style>