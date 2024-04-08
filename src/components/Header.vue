<script>
import { store } from '../data/store';
  export default {
    data(){
      return{
        store,
      }
    }
    
  }
</script>

<template>
  <div class="container-fluid">

    <div class="container d-flex justify-content-between">
   
  
      <img src="../assets/img/takeout-logo.png" alt="">
    
      <div class="menu">
        <ul class="d-flex justify-content-between align-items-center">
          <li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle btn-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </li>
          <li v-for="el in this.store.headerMenu" :key="el" class="li-menu"><a href="">{{ el }}</a></li>
          <li class="li-menu"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
      </div>
  
    
    </div>
    <div class="container jumbotron">
      <span>Hungry?</span>
      <h1>Great Food</h1>
      <h2>Delivered</h2>
      <button type="button" class="btn btn-danger">VIEW OUR MENU <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container-fluid{
  background-image: url(../assets/img/home-background-hero-scaled.jpg);
  height: 1000px;
  background-size: cover;
  .container{
    padding-top: 60px;
    img{
      object-fit: contain;
    }
    .btn-menu{
      background: none;
      border: none;
      color: rgb(255, 228, 50);
    }
    li{

      list-style: none;
    }
    .li-menu{
      padding: 0 30px;
      a{
        color: white;
        text-decoration: none;
      }
    }
   
  }

  .jumbotron{
    color: white;
    span{
      font-size: 2rem;
    }
    h1{
      color: rgb(255, 228, 50);
      font-size: 4rem;
    }
    h2{
      font-size: 3.5rem;
      padding-bottom: 20px;
    }
    .btn-danger{
      background-color: rgb(206, 26, 38);
      border-radius: 20px;
      font-size: .8rem;
      padding: 10px 30px;
      i{
        margin-left: 8px;
        background-color: white;
        color: rgb(206, 26, 38);
        border-radius: 50%;
        height: 20px;
        width: 20px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}

</style>