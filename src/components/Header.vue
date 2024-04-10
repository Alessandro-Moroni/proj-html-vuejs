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

    <div class="plus d-flex justify-content-center ">+</div>

    <div class="container-square">
      <div class="square text-center">
        <p class="icon"><i class="fa-solid fa-laptop"></i></p>
        
        <p class="text-square demo">Demos</p>
      </div>

      <div class="square text-center">
        
        <span class="green sale">$</span>

        <p class="green">39</p> 
       
        <p class="text-square">On Sale</p>
             
      </div>
    </div>
    <div class="container d-flex justify-content-between">
   
  
      <img src="../assets/img/takeout-logo.png" alt="">
    
      <div class="menu">
        <nav>
          <ul class="d-flex justify-content-between align-items-center">
          <li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle btn-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
              </button>
              <ul class="dropdown-menu">

                <li v-for="elements in this.store.menuDropdown" :key="elements"><a class="dropdown-item" href="#">{{ elements }}</a></li>
                
              </ul>
            </div>
          </li>
          <li v-for="el in this.store.headerMenu" :key="el" class="li-menu"><a href="">{{ el }}</a></li>
          <li class="li-menu"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
        </nav>
        
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
  background-position: center;
  position: relative;
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
        &:hover{
          color: rgb(255, 228, 50);
        }
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
      &:hover{
        background-color: rgb(170, 19, 29);
      }
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

  .plus{
    color: white;
    font-size: 1.8rem;
    height: 50px;
    width: 50px;
    background-color: rgb(206, 26, 38);
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: 10px;
    &:hover{
      background-color: rgb(151, 75, 80);
      cursor: pointer;
    }
  }

  .container-square{
    position: absolute;
    color: rgb(88, 71, 82);
    right: 10px;
    top: 150px;
    .square{
      height: 70px;
      width: 70px;
      background-color: white;
      border-radius: 10px;
      margin-bottom: 10px;
      position: relative;
      
      .icon{
        font-size: 2rem;
  
      }
      .demo{
        margin-top: -20px;
      }
      p{
        font-size: .9rem;
        font-weight: bold;
      }
      .green{
        color: rgb(103, 189, 125);
        font-weight: bold;
        
      }
      p.green{
          font-size: 1.9rem;
          margin-bottom: 0;
        }
        
      .sale{
        position: absolute;
        left: 10px;
        top: 3px;
        
      }


      
    }
  }
}

</style>