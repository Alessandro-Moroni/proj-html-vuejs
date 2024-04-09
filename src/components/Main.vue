<script>
import Card from './partials/Card.vue';
import Categories from './partials/Categories.vue';
import Type from './partials/Type.vue';
import { store } from '../data/store';
  export default {
    components:{
      Card,
      Categories,
      Type,
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
  <div class="container text-center card-top">
    <h1>Our Most Popular Dishes</h1>

    <div class="row">

      <Card />

    </div>
    <button type="button" class="btn btn-danger">START YOUR ORDER <i class="fa-solid fa-arrow-right"></i></button>
  </div>

  <div class="container-fluid wave-image"> 
    
  </div>

  <div class="container mt-5 ">
    <div class="d-flex justify-content-between align-items-center">
      <h3>Menu Categories</h3>

      <button type="button" class="btn btn-danger">VIEW THE FULL MENU <i class="fa-solid fa-arrow-right"></i></button>
    </div>

    <div class="row row-cols-4 ">
      <Categories />
    </div>

    <div class="row types">
      <Type />
    </div>

  </div>


  <div class="container-fluid bg-app d-flex align-items-center">
    <div class="container">

      <span>Download Our</span>
      <h3>Ordering App</h3>
      <div class="d-flex">
        <img src="../assets/img/app-store-badge-200x67.png" alt="">
        <img src="../assets/img/play-store-badge-200x67.png" alt="">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.under{
  position: relative;
  height: 150px;
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
.card-top{
  h1{
    margin-bottom: 50px;
  }
}
.btn-danger{
  width: 300px;
  height: 40px;
  border-radius: 25px;
  margin: 50px;
  background-color: rgb(206, 26, 38);
  &:hover{
     background-color: rgb(170, 19, 29);
  }
  i{
    margin-left: 20px;
    color: rgb(206, 26, 38);
    height: 20px;
    width: 20px;
    background-color: white;
    border-radius: 50%;
    line-height: 20px;
  }
}
.wave-image{
  background: url(../assets/img/hamburger.jpg);
  height: 500px;
  background-size: cover;
  background-position: center;
}

.types{
  margin: 50px 0 80px 0;
}

.bg-app{
  background-image: url(../assets/img/app-ordering-scaled.jpg);
  height: 600px;
  background-size: cover;
  background-position: center;
  font-weight: bold;
  span{
    color: white;
    font-size: 2rem;
  }
  h3{
    font-weight: bold;
    color: rgb(252, 220, 49);
    font-size: 3rem;
    margin-bottom: 50px;
  }
  img{
    margin-right: 20px;
  }
}

</style>